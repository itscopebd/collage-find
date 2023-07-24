import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const AdmissionForm = () => {
    const title = useParams();

    const { user } = useContext(AuthContext)
  
    const image_host_token = import.meta.env.VITE_HOST_IMAGE_API;

    const [btnLoading, setBtnLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {

        setBtnLoading(true)

        const image_host_url = `https://api.imgbb.com/1/upload?key=${image_host_token}`;
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_host_url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(ImageHostRes => {
                const imageUrl = ImageHostRes.data.display_url;

                const saveInfo = { name: data.name, subject: data.subject, email: data.email, number: data.number, birth: data.birth, image: imageUrl, address: data.address, collgeName: title.title, admissionEmail: user.email };

                fetch("http://localhost:3000/save-apply-info", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(saveInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.acknowledged) {
                            console.log(data)
                            setErrorMessage("Your Admission Sucess! ")
                            
                        }
                        else{
                            setErrorMessage(data.message)
                        setBtnLoading(false)
                        }
                    }).catch(error=>{
                        console.log(error)
                        setBtnLoading(false)
                    })



            })

    }

    return (


        <>
            <Breadcrumbs img={'https://i.ibb.co/d4Py0Cf/admission.png'} title="Admission Form" ></Breadcrumbs>

            <div class=" my-14 block w-6/12 mx-auto rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">


                {
                    errorMessage && <h2 className='text-3xl text-green-600 text-center my-5 font-bold'>{errorMessage} </h2>
                }
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div class="grid grid-cols-2 gap-4">

                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="text"
                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                id="exampleInput123"
                                aria-describedby="emailHelp123"
                                placeholder="Name" {...register("name")} />

                        </div>

                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="text"
                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                id="exampleInput124"
                                aria-describedby="emailHelp124"
                                placeholder="Subject"  {...register("subject")} />


                        </div>
                    </div>


                    <div class="grid grid-cols-2 gap-4">

                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="email"
                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                id="exampleInput123"
                                aria-describedby="emailHelp123"
                                placeholder="Email"  {...register("email")} />

                        </div>

                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="number"
                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 "
                                id="exampleInput124"
                                aria-describedby="emailHelp124"
                                placeholder="Phone Number" {...register("number")} />

                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4">

                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="date"
                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput123"
                                aria-describedby="emailHelp123"
                                placeholder="Date Of Birth" {...register("birth")} />

                        </div>

                        <div class="relative mb-6" data-te-input-wrapper-init>
                            <input
                                type="file"
                                class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                id="exampleInput124"
                                aria-describedby="emailHelp124"
                                placeholder="Image" {...register("image")} />

                        </div>
                    </div>

                    <div class="relative mb-6" data-te-input-wrapper-init>

                        <textarea className='class="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"' name="" id="" cols="10" rows="5" placeholder="Address" {...register("address")}></textarea>

                    </div>

                    {
                        btnLoading && btnLoading ? <span className="loading loading-spinner text-success"></span> : <button
                            type="submit"
                            className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Submit
                        </button>
                    }
                </form>
            </div>
        </>
    );
};

export default AdmissionForm;