import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import Nav from '../componants/Nav';
import Head from '../componants/Main';
import About from '../componants/about';
import Work from '../componants/Work';
const Main = () => {
    return ( 
        <>
        <Nav />
        <Head />
        <About />
        <Work />
        </>
     );
}
 
export default Main;