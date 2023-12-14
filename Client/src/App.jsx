import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Home from './Page/Home';
import Header from './Components/Header/Header.jsx';

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    
    </div>
  );
};

export default App;
