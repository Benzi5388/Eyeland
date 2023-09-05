import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './Routes/userRoutes.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <Router>
      <div className='App'>
      <ToastContainer />
        <Routes>
          <Route path='/*' element={<UserRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
