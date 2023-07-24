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
        <div className='gird grid-cols-4 py-14'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">

                    {
                        data.map(title =>
                            <Link to={`/research-details/${title._id}`}>
                                <h3>{title.title}</h3>
                                {/* <ResearchCard researchDes={title.researchDes}></ResearchCard> */}
                                <p>Students Research</p>
                            </Link>

                        )
                    }


                </div>
            </div>
        </div>
    );
};

export default Paper;