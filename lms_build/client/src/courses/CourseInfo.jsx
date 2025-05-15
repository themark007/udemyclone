import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CourseInfo({ data }) {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

const handleButtonClick = async () => {
  try {
    // 1️⃣ Send course_id to backend
    const response = await fetch('http://localhost:3000/api/courses/select', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ course_id: data.id }),
    });

    if (!response.ok) {
      throw new Error('Failed to save course selection');
    }
    const result = await response.json();
    // 2️⃣ On success, navigate to the course page
    navigate('/courses', { state: { videos: result.videos.rows } });
  } catch (err) {
    console.error('Error handling course selection:', err);
  }
};

  const containerStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: isHovered 
      ? '0 12px 24px -6px rgba(0,0,0,0.15)' 
      : '0 4px 6px -2px rgba(0,0,0,0.05)',
    transition: 'all 0.3s ease',
    position: 'relative',
  };

  const imageStyle = {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderBottom: '1px solid #f1f5f9',
  };

  const contentStyle = {
    padding: '20px',
  };

  const footerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '20px',
  };

  const priceStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: '#1e293b',
  };

  const buttonStyle = {
    backgroundColor: '#6366f1',
    color: 'white',
    padding: '10px 24px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.2s ease',
  };

  return (
    <div 
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={data.thumbnail} 
        alt="Course" 
        style={imageStyle}
      />
      <div style={contentStyle}>
        <h3 style={{ 
          margin: '0 0 12px', 
          fontSize: '18px', 
          color: '#1e293b',
          minHeight: '56px'
        }}>
          {data.title}
        </h3>
        <p style={{ 
          fontSize: '14px', 
          color: '#64748b', 
          margin: '0 0 16px',
          height: '60px',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical'
        }}>
          {data.description}
        </p>
        <div style={footerStyle}>
          <div>
            <p style={{ 
              fontSize: '14px', 
              color: '#64748b', 
              margin: '0 0 4px'
            }}>
              {data.instructor}
            </p>
            <div style={priceStyle}>₹{data.price}</div>
          </div>
          <button 
            style={buttonStyle}
            onClick={handleButtonClick}
          >
            {data.enrolled ? 'Continue' : 'Visit Course'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CourseInfo;
