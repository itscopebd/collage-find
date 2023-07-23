import React from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import useSWR from 'swr';
import { Link } from 'react-router-dom';
const fetcher = (...args) => fetch(...args).then(res => res.json())

const Admission = () => {

    const { data, error, isLoading } = useSWR('https://college-find-server.vercel.app/college-list', fetcher)
    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div>
            <Breadcrumbs title="Admission" img={'https://i.ibb.co/d4Py0Cf/admission.png'}></Breadcrumbs>
            <div className='grid grid-cols-4 gap-5 text-center'>

                { 
                    data && data.map(collegeTilte=> 
                
                <Link to="/addmission-form">
                <div className="card bg-base-100 shadow-md">
                    <div className="card-body">
                        
                        <p>{collegeTilte.title}</p>
                    </div>
                </div>
                </Link>
                )}
            </div>
        </div>
    );
};

export default Admission;