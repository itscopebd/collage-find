import React from 'react';
import CollegeList from '../components/CollegeList/CollegeList';

const HomePage = () => {
    return (
        <div className='container mx-auto'>
            <h3>Home</h3>
            <CollegeList></CollegeList>
            
        </div>
    );
};

export default HomePage;