import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from './../../AuthProvider/AuthProvider';

const Registration = () => {
    const { createUser } = useContext(AuthContext)
    const [btnLoading, setBtnLoading] = useState(false);
    const [errorMessage,setErrorMessage]=useState("")
 
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setBtnLoading(true)
        createUser(data.email, data.password)
            .then(data => {
                console.log(data.user)
                setBtnLoading(false)
                
                navigate("/login")
            })
            .catch(error=>{
                setErrorMessage("User Already Existing ! ");
                setBtnLoading(false)
            })
            
    };

 

    return (
        <div className='container mx-auto'>
            <section className="h-screen">
                <div className="h-full">

                    <div
                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div
                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                            <img
                                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="w-full"
                                alt="Sample image" />
                        </div>


                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                            <h2 className='text-3xl text-center my-5 font-bold'>Registration </h2>
                           {
                             errorMessage? <h2 className='text-3xl  text-red-600 text-center my-5 font-bold'>{errorMessage} </h2> :""
                           }
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="relative mb-6" data-te-input-wrapper-init>

                                    <input
                                        type="text"
                                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address" {...register("email")} />
                                    <label
                                        for="exampleFormControlInput2"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Email address
                                    </label>
                                </div>


                                <div className="relative mb-6" data-te-input-wrapper-init>
                                    <input
                                        type="password"
                                        className="peer block min-h-[auto] w-full rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                        id="exampleFormControlInput22"
                                        placeholder="Password" {...register("password")} />
                                    <label
                                        for="exampleFormControlInput22"
                                        className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                                    >Password
                                    </label>
                                </div>

                                <div className="text-center lg:text-left flex gap-3">
                                    {
                                        btnLoading && btnLoading ? <span className="loading loading-spinner text-success"></span> : <button
                                            type="submit"
                                            className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                                            data-te-ripple-init
                                            data-te-ripple-color="light">
                                            Registration
                                        </button>
                                    }


                                    <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                                        Already have an account?
                                        <Link to="/login" className="text-danger  text-red-500 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"> Login</Link>
                                    </p>
                                </div>
                            </form>


                            <div
                                className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                                <p
                                    className="mx-4 mb-0 text-center font-semibold dark:text-white">
                                    Or
                                </p>
                            </div>
                            


                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Registration;