import React from 'react';

import Card from '../Card/Card';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';





const CollegeList = (data) => {

console.log(data)
    return (
        <div>
            {/* <Breadcrumbs img={'https://i.ibb.co/6vxFCY9/Untitled-3.png'}></Breadcrumbs> */}
            <div className='grid grid-cols-3 gap-5'>
                {/* {
                    data.map(college => <Card list={college} key={college._id}></Card>)
                } */}
            </div>
        </div>
    );
};

export default CollegeList;