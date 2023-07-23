import React from 'react';

const Breadcrumbs = ({ img, title }) => {
  
    return (
        <div className='w-full my-10 relative'>
            <img className='w-full rounded-lg' src={img} alt="" />
          
            <div className='bg-black flex items-center justify-center bg-opacity-70 rounded-lg absolute top-0 left-0 w-full h-full'>
            {
                title && <h3 className='text-white text-2xl '>{title}</h3>
            }
            </div>
        </div>
    );
};

export default Breadcrumbs;