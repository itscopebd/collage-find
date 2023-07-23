import React from 'react';
import useSWR from 'swr';
import Card from '../Card/Card';
import Breadcrumbs from '../../breadcrumbs/breadcrumbs';


const fetcher = (...args) => fetch(...args).then(res => res.json())

const CollegeList = () => {

    const { data, error, isLoading } = useSWR('https://college-find-server.vercel.app/college-list', fetcher)

    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div>
            <Breadcrumbs img={'https://i.ibb.co/6vxFCY9/Untitled-3.png'}></Breadcrumbs>
            <div className='grid grid-cols-3 gap-5'>
                {
                    data.map(college => <Card list={college} key={college._id}></Card>)
                }
            </div>
        </div>
    );
};

export default CollegeList;