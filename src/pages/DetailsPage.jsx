import React from 'react';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
import useSWR from 'swr';
import { useParams } from 'react-router-dom';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const DetailsPage = () => {

    const detailsId = useParams();
    console.log(detailsId.id);

    const { data, error, isLoading } = useSWR(`https://college-find-server.vercel.app/details/${detailsId.id}`, fetcher)

    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>

    return (
        <div className='pb-14'>
            <Breadcrumbs  img={'https://i.ibb.co/d4Py0Cf/admission.png'} title="Details" ></Breadcrumbs>
            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                <img class="rounded-t-lg w-full" src={data.details_img} alt="" />

                <div class="p-5">

                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                    <h5 class="mb-2 text-lg tracking-tight text-gray-600 dark:text-white "> <span className=' font-bold'>Admission Process:</span> {data.admission_process}</h5>
                    <div>
                        <h3 class="mb-2 text-lg text-gray-600 dark:text-white font-bold">Events</h3>
                        <ul className='px-5'>
                            {
                                data.events.map(event => <li className='list-disc'>{event}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 class="mb-2 text-lg text-gray-600 dark:text-white font-bold">Research Works</h3>
                        <ul className='px-5'>
                            {
                                data.research_works.map(research => <li className='list-disc'>{research}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 class="mb-2 text-lg text-gray-600 dark:text-white font-bold">Sports </h3>
                        <ul className='px-5'>
                            {
                                data.sports_categories.map(sport=> <li className='list-disc'>{sport}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;