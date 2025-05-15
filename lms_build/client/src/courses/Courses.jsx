import react from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CourseInfo from './CourseInfo';

function Courses() {
    const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '32px',
    justifyContent: 'center',
  };
      const [courses, setCourses] = useState([]);

    useEffect(() => {
    fetch('http://localhost:3000/api/courses')
      .then(res => res.json())
      .then(data => {
        // Convert data into expected format for CourseInfo
        const formatted = data.map(course => ({
          id: course.id,
          title: course.title,
          description: course.description,
          price: course.price,
          instructor: course.instructor_name || 'Unknown',
          enrolled: false, // default value, replace with real logic if needed
          thumbnail: course.image
        }));
        setCourses(formatted);
      })
      .catch(err => console.error('Error fetching courses:', err));
  }, []);
    return (
    <div style={containerStyle}>
      <div style={gridStyle}>
        {courses.map(course => (
          <CourseInfo key={course.id} data={course} />
        ))}
      </div>
    </div>
  );
}
export default Courses