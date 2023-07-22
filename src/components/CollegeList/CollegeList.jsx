import React from 'react';

import useSWR from 'swr';
import Card from '../Card/Card';

const fetcher = (...args) => fetch(...args).then(res => res.json())

const CollegeList = () => {

    const { data, error, isLoading } = useSWR('http://localhost:3000/college-list', fetcher)

    
    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>
    console.log(data)
    return (
        <div className='grid grid-cols-3 gap-5'>
{
    data.map(college=><Card list={college} key={college._id}></Card>)
}
        </div>
    );
};

export default CollegeList;