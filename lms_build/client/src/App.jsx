import React from "react"
import Logins from "./auth/Logins"
import Dashboard from "./dashboard/Dashboard"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboardi from "./dashboard/Dashboardi";
import Signin from "./auth/Signin";
import Viewcourse from "./courses/Viewcourse";
function App() {
  

  return (
 <>
      <Router>
      <Routes>
        <Route path="/" element={<Logins />} />
        <Route path="/login" element={<Logins />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/dashboardi" element={<Dashboardi />} />
          <Route path="/signin" element={<Signin />} />
           <Route path="/courses" element={<Viewcourse />} />
       
        
      </Routes>
    </Router>
    </>
  )
}

export default App
