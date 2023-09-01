import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
