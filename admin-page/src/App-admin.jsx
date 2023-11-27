import './App-admin.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './page/Dashboard';
import Users from './page/navpage/User';
import Registers from './page/register';
import Login from './page/Login';
import Groups from './page/navpage/Group';
import Trips from './page/navpage/trips';
// import Responses from './page/Users/Responses';
import Feedback from './page/navpage/feesback';
import QA from './page/navpage/Q&A';

function App() {


  return (

    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path="/Dashboard" element={<Dashboard/>}></Route>
          <Route path="/register" element={<Registers/>}></Route>
          <Route path="/login" element={<Login/>}></Route>

          <Route path="/Users" element={<Users/>}></Route>
          <Route path="/Group" element={<Groups/>}></Route>
          <Route path="/Trip" element={<Trips/>}></Route>
          {/* <Route path="/Res" element={<Responses/>}></Route> */}
          <Route path="/Q&A" element={<QA/>}></Route>
          <Route path="/Feedback" element={<Feedback/>}></Route>
          

        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
