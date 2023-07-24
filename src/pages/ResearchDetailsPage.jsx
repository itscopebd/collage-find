import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import Breadcrumbs from '../components/breadcrumbs/breadcrumbs';
const fetcher = (...args) => fetch(...args).then(res => res.json())
const ResearchDetailsPage = () => {

    const detailsId = useParams();
    const { data, error, isLoading } = useSWR(`http://localhost:3000/research-details/${detailsId.id}`, fetcher)
    if (error) return <div className=''>failed to load</div>
    if (isLoading) return <div>loading...</div>



    return (
        <div>
            <Breadcrumbs  img={'https://i.ibb.co/d4Py0Cf/admission.png'} title="Details"></Breadcrumbs>
            {
                data.researchDes.map(details => <>

                    <ul>
                        <li className='list-disc'> <span className='font-bold'>{details.title}</span>: {details.description} </li>

                    </ul>




                </>)
            }
        </div>
    );
};

export default ResearchDetailsPage;