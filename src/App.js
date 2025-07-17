import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Staff from './Component/Staff';
import Login from './Component/Login';
import VerifyOtp from './Component/VerifyOtp';
import Sidebar from './Dashborad/Sidebar';
import StaffName from './Component/StaffName';
import Dashboard from './Dashborad/Dashboard';
// import AppWrapper from './Dashborad/Dashboard';
import Staffnamepage from './Component/Staffnamepage';
// import Dashboard from './Dashborad/Dashboard';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/verify-otp" element={<VerifyOtp/>}/>
        <Route path = "/staff" element={<Staff/>}/>
        <Route path = "/sidebar" element={<Sidebar/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/dashboard/staffname" element={<Staffnamepage/>}/>
        <Route path = "/staffname" element={<StaffName/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
