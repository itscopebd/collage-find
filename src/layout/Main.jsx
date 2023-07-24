import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <>
        <NavBar></NavBar>
        {/* <div className='container mx-auto'> */}
            
            <Outlet></Outlet>
      
        {/* </div> */}
        <Footer></Footer>
        </>   
    );
};

export default Main;