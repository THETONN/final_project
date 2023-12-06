import React, { useState,useEffect } from "react";
import { useLocation, Navigate, Routes, Route,useNavigate } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import Quiz from './pages/quiz';
import Login from './pages/Login';
import Registers from './pages/register';
// import Registers from './pages/';
import HomePredict from './pages/predictionpage/HomePredict';
import HomePredict2 from './pages/predictionpage/HomePredict2';
import HomePredict3 from './pages/predictionpage/HomePredict3';
import LoginHomePage from './pages/LoginHome/LoginHome';
import NotFoundPage from './pages/Notfound';

function App() {

  const location = useLocation();
  const navigate = useNavigate();
  // const [groupId, setGroupId] = useState(localStorage.getItem('groupId'));
  const [groupId, setGroupId] = useState(localStorage.getItem('groupId') || 'default');

  useEffect(() => {
    // ตรวจสอบเงื่อนไขเมื่อ path ของ location เริ่มต้นด้วย '/HomePredict'
    if (location.pathname.startsWith('/LoginHome') && (!groupId || groupId === 'default')) {
      navigate('/LoginHome'); // นำทางไปยัง '/LoginHome' หาก groupId ไม่ถูกต้อง
    }
  }, [location, groupId, navigate]); // ใส่ navigate เพื่อป้องกัน warning และ errors


  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registers" element={<Registers />} />
        <Route path="/LoginHome" element={<LoginHomePage />} />
        {/* <Route path="/HomePredict0" element={groupId === '0' ? <HomePredict /> : <Navigate to="/LoginHome" replace />} />
        <Route path="/HomePredict1" element={groupId === '1' ? <HomePredict2 /> : <Navigate to="/LoginHome" replace />} />
        <Route path="/HomePredict2" element={groupId === '2' ? <HomePredict3 /> : <Navigate to="/LoginHome" replace />} /> */}
        <Route path="/HomePredict0" element={<HomePredict />} />
        <Route path="/HomePredict1" element={<HomePredict2 />} />
        <Route path="/HomePredict2" element={<HomePredict3 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
