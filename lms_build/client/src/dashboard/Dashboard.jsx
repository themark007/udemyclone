import React from "react"
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseInfo from "../courses/CourseInfo";
import Courses from "../courses/Courses";
import Footer from "./Footer";
// Dashboard.js
function Dashboard() {
  const containerStyle = {
    minHeight: '100vh',
    background: 'linear-gradient(45deg, #f8fafc 0%, #f1f5f9 100%)',
    paddingBottom: '40px',
  };

  const heroStyle = {
    textAlign: 'center',
    padding: '80px 20px 40px',
    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
    marginBottom: '40px',
    borderBottom: '1px solid #e2e8f0',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <div style={heroStyle}>
        <h1 style={{ fontSize: '36px', margin: '0 0 16px', color: '#1e293b' }}>
          Expand Your Career Opportunities
        </h1>
        <p style={{ fontSize: '18px', color: '#64748b', margin: 0 }}>
          Choose from 100+ online video courses with new additions published every month
        </p>
      </div>
      <Courses />
      <Footer />
    </div>
  );
}

export default Dashboard
