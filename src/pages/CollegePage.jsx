import React from 'react';
import useSWR from 'swr';
import Card from '../components/Card/Card';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const CollegePage = () => {

    const { data, error, isLoading } = useSWR('https://college-find-server.vercel.app/college-list', fetcher)

    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>


    return (
        <div className='container mx-auto'>
            <Breadcrumbs img={'https://i.ibb.co/d4Py0Cf/admission.png'} title="All College" ></Breadcrumbs>
             <div className='grid  md:grid-cols-2 lg:grid-cols-4 gap-5 mb-14'>
                {
                    data.map(college => <Card list={college}></Card>)
                }
            </div>
        </div>
    );
};

export default CollegePage;