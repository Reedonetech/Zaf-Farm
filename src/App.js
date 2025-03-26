import { BrowserRouter, Router, Routes } from 'react-router-dom';
import './App.css';

import Staff from './Component/Staff';

function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
        <Router path = "/staff" element={<Staff/>}/>;
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
