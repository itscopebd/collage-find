import React from 'react';
import Banner from '../components/banner/Banner';
import useSWR from 'swr';
import Card from '../components/Card/Card';
import Gallery from '../components/Gallery/Gallery';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const HomePage = () => {
    const { data, error, isLoading } = useSWR('https://college-find-server.vercel.app/college-list', fetcher)

    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const genarateData = data.sort(() => 0.5 - Math.random())
 
    return (
        <div className='container mx-auto'>

            <Banner></Banner>
            <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5 my-14'>
                {
                    genarateData.slice(0, 3).map(college => <Card list={college}></Card>)
                }
            </div>
           <Gallery></Gallery>
        </div>
    );
};

export default HomePage;