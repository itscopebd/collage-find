import React from 'react';
import CollegeList from '../components/CollegeList/CollegeList';
import Registration from '../components/registration/Registration';
import ForgetPassword from '../forgetPassword/ForgetPassword';
import Login from '../login/Login';

const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <h3>Home</h3>
            <CollegeList></CollegeList>
            
        </div>
    );
};

export default HomePage;