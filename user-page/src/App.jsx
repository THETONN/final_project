import { Route, Routes } from 'react-router-dom';
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
  return (
    <div className='wrapper'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registers" element={<Registers />} />
        <Route path="/HomePredict" element={<HomePredict />} />
        <Route path="/LoginHome" element={<LoginHomePage />} />
        <Route path="/HomePredict2" element={<HomePredict2 />} />
        <Route path="/HomePredict3" element={<HomePredict3 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
