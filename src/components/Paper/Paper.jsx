import React from 'react';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const Paper = () => {
    const { data, error, isLoading } = useSWR('http://localhost:3000/research-data', fetcher)

    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>
    console.log(data)
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3  py-14 gap-5'>
 {
                    data.map(title =>
            <div className="card bg-base-100 shadow-xl hover:bg-green-500 hover:text-white">
               
                        <Link to={`/research-details/${title._id}`}>
                            <div className="card-body text-center">


                                <h3 className='text-2xl'>{title.title}</h3>
                                <p>Students Research</p>





                            </div>
                        </Link>
                
            </div>
    )
}
        </div>
    );
};

export default Paper;