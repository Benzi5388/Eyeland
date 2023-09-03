import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserRoutes from './Routes/userRoutes.jsx'


function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/*' element={<UserRoutes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
