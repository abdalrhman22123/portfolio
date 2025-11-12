import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/home';
import Aboutt from './pages/Categories';
import No from './pages/error';
const Routingapp = () => {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about-us" element={<Aboutt />} />
        <Route path="*" element={<No />} />
 

        </Routes>
        </BrowserRouter>
        
     );
}
 
export default Routingapp;