import React from 'react';

const Card = ({ list }) => {
    console.log(list)
    const { title, end_date, start_date, sports, research_history, image } = list;
    return (
       <div className=''>
            <div className="card shadow-xl h-72 w-full image-full">
                <figure className='h-full w-full'><img className='h-full' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{research_history}</p>
                    <div>
                        <h3 className='text-lg font-bold flex items-center gap-3'>Admission:
                        <p className='text-base font-normal'>{start_date} From {end_date}</p>
                        </h3>
                        <h3 className='text-lg font-bold flex items-center gap-3'>Sports:
                        <p className='text-base font-normal'>{sports}</p>
                        </h3>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Details</button>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default Card;