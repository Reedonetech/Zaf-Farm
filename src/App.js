import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Staff from './Component/Staff';
import Login from './Component/Login';
import VerifyOtp from './Component/VerifyOtp';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
        <Route path = "/" element={<Login/>}/>
        <Route path = "/verify-otp" element={<VerifyOtp/>}/>
        <Route path = "/staff" element={<Staff/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
