
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from './../AuthProvider/AuthProvider';

const ForgetPassword = () => {

    const { resetUserPassword } = useContext(AuthContext)
    const [btnLoading, setBtnLoading] = useState(false);
    const [errorMessage,setErrorMessage]=useState("")

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        setBtnLoading(true)
        resetUserPassword(data.email)
            .then(data => {
                console.log(data)
                setBtnLoading(false)
                
                setErrorMessage(" Please Check Your Email! ");
            })
            .catch(error=>{
               
                setBtnLoading(false)
            })
            
    };



    return (


            <div className="container mx-auto">
                <div className="flex justify-center my-12">

                    <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                    <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-center rounded-lg bg-[url('https://i.ibb.co/QbN6cdD/The-Wildest-Editorial-Peeved-Pup.png')]"></div>
                          

                        <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                            <div className="px-8 mb-4 text-center">
                                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>

                            </div>

                            {
                             errorMessage? <h2 className='text-3xl  text-red-600 text-center my-5 font-bold'>{errorMessage} </h2> :""
                           }
                        
                            <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        placeholder="Enter Email Address..."
                                        {...register("email")} />
                                </div>
                                <div className="mb-6 text-center">
                                    {
                                        btnLoading && btnLoading ? <span className="loading loading-spinner text-success"></span>:<button
                                        className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Reset Password
                                    </button>
                                    }
                                    
                                </div>
                               
                            </form>
                            <hr className="mb-6 border-t" />
                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to="/registration"
                                    >
                                        Create an Account!
                                    </Link>
                                </div>
                                <div className="text-center">
                                    <Link
                                        className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        to="/login"
                                    >
                                        Already have an account? Login!
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
  

    );
};

export default ForgetPassword;