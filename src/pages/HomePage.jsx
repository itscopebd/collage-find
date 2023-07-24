import React, { useState } from 'react';
import Banner from '../components/banner/Banner';
import CollegeList from './../components/CollegeList/CollegeList';
import useSWR from 'swr';
import Card from '../components/Card/Card';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const HomePage = () => {
    const [randomNumber, setRandomNumber] = useState(0)
    const { data, error, isLoading } = useSWR('https://college-find-server.vercel.app/college-list', fetcher)

    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>

    const genarateData = data.sort(() => 0.5 - Math.random())
    console.log(genarateData)
    //    console.log(ge.slice(0,3))
    // const generateRandomNumber = Math.floor(Math.random() * 3);
    // setRandomNumber(generateRandomNumber)


    return (
        <div className='container mx-auto'>

            <Banner></Banner>
            <div className='grid grid-cols-3 gap-5 my-14'>
                {
                    genarateData.slice(0, 3).map(college => <Card list={college}></Card>)
                }
            </div>
            {/* <CollegeList data={ data}></CollegeList> */}

        </div>
    );
};

export default HomePage;