import React from 'react';

const Card = ({ list }) => {
    // console.log(list)
    // const { title, end_date, start_date, sports, research_history, image } = list;
    return (
        <div className='min-h-96'>




            <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img class="rounded-t-lg w-full" src={list.image} alt="" />
                </a>
                <div class="p-5">
                    <a href="#">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{list.name}</h5>
                        <h5 class="mb-2 text-lg tracking-tight text-gray-600 dark:text-white italic"> <span className=' font-bold'>Admission Date:</span> {list.admission_date}</h5>
                        <h5 class="mb-2 text-md tracking-tight text-gray-500 dark:text-white "> <span className='font-bold'>Research History: </span>
                         
                         {
                            list.research_history.map(event=><span>{event}. </span>)
                         }
                         
                        </h5>
                    </a>
                    
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;