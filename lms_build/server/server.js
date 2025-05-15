import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt';
import { Pool } from 'pg'; // ✅ Corrected import

const app = express();
const PORT = 3000;

// PostgreSQL pool
const pool = new Pool({
  host: "localhost",
   user: "postgres",
  database: "mark_tech",
  password: "xmkms@123",
  port: 5432,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Test route
app.get('/test/', (req, res) => {
  res.json({ message: "connected to backend" });
});

// Dummy login route for testing
app.post('/login', async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Check if user exists with the given username and role
    const result = await pool.query(
      `SELECT * FROM users WHERE username = $1 AND role = $2`,
      [username, role]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ success: false, message: "User not found or role mismatch." });
    }

    const user = result.rows[0];

    // Compare password hash
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: "Invalid password." });
    }

    // Update last_login timestamp
    await pool.query(
      `UPDATE users SET last_login = NOW() WHERE id = $1`,
      [user.id]
    );

    // Success response
    res.json({
      success: true,
      message: `Login successful as ${user.role}!`,
      userId: user.id,
      username: user.username
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// Sign-up endpoint
app.post("/signin", async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password || !role) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (username, email, password_hash, role) 
       VALUES ($1, $2, $3, $4) RETURNING id`,
      [username, email, hashedPassword, role]
    );

    res.json({ success: true, message: "User registered", userId: result.rows[0].id });
  } catch (err) {
    console.error(err);
    if (err.code === '23505') {
      res.status(409).json({ success: false, message: "Username or email already exists." });
    } else {
      res.status(500).json({ success: false, message: "Server error" });
    }
  }
});


app.get('/api/courses', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT c.*, u.username AS instructor_name
      FROM courses c
      LEFT JOIN users u ON c.instructor_id = u.id
    `);
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch courses' });
  }
});

app.post('/api/courses/select', async (req, res) => {
  const { course_id } = req.body;

  if (!course_id) {
    return res.status(400).json({ error: 'course_id is required' });
  }

  try {
    // 🔍 Fetch all videos for the given course ID
    const result = await pool.query(
      'SELECT * FROM videos WHERE course_id = $1',
      [course_id]
    );

    res.status(200).json({ videos: result.rows });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});