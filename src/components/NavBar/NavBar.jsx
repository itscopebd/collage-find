import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    const NavBar = <>

        <li> <NavLink className="text-white text-md hover:bg-transparent hover:text-red-500" to="/">Home</NavLink> </li>
        <li><NavLink className="text-white text-md hover:bg-transparent hover:text-red-500" to="/all-college">Colleges</NavLink></li>
        <li><NavLink className="text-white text-md hover:bg-transparent hover:text-red-500" to="/admission">Admission</NavLink></li>
        <li><NavLink className="text-white text-md hover:bg-transparent hover:text-red-500" to="/my-college">My College</NavLink></li>

    </>
    return (
        <div className='bg-blue-700 border-b-2 border-blue-900'>
        <div className='container mx-auto'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm bg-blue-700 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {
                                NavBar
                            }
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-sm md:text-xl text-white italic">BookingCollege</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            NavBar
                        }
                    </ul>

                </div>
                <div className="navbar-end gap-1 md:gap-5">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-32 md:w-auto" />
                    </div>
                    <Link to="/login" className="btn">LogIn</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default NavBar;