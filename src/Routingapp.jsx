import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/home';
import Aboutt from './pages/Categories';
import No from './pages/error';
import Details from './pages/Details';
const Routingapp = () => {
    return ( 
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Categories" element={<Details />} />
        

 

        </Routes>
        </BrowserRouter>
        
     );
}
 
export default Routingapp;