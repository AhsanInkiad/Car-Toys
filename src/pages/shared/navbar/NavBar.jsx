import React from 'react';
import propic from '../../../assets/propic.jpg'
import logo2 from '../../../assets/logo-2.jpg'
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiCarWheel } from "react-icons/gi";
import { Link } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
    return (
        <div className="navbar bg-[#1D1F1F] rounded-lg p-6">
            <div className="navbar-start">
                {/* Logo and website name */}
                <Link to='/'><div className='flex space-x-4 btn btn-ghost  bg-[#1D1F1F] h-20 '>
                    <img className='border-4 border-[#EAB902] w-10 md:w-12 lg:w-16 m-auto rounded-full' src={logo2} />
                    <p className="text-white  normal-case text-xsm md:text-lg  lg:text-xl"> <span className='flex align-items-center'> Fast <span className='text-[#EAB902] mt-1 ml-1'><AiOutlineThunderbolt ></AiOutlineThunderbolt></span> </span>  <span className='text-[white]'> &</span>  Curious  </p>
                </div></Link>

                {/* Dropdown */}
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <GiCarWheel className="text-white h-6 w-6"></GiCarWheel>
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-[#EAB902] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>

                    </label>
                    <ul tabIndex={0} className="text-white menu menu-compact dropdown-content mt-3 p-2 shadow border border-[#EAB902] bg-[#1D1F1F] rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>All Toys</a></li>
                        <li><a>My Toys</a></li>
                        <li><a>Add a Toy</a></li>
                        <li><a>Blog</a></li>

                    </ul>
                </div>
            </div>
            {/* Menu in the center */}
            <div className="navbar-center text-lg font-semibold text-white hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>All Toys</a></li>
                    <li><a>My Toys</a></li>
                    <li><a>Add a Toy</a></li>
                    <li><a>Blog</a></li>



                </ul>
            </div>
            {/* Profile pic and login/logout button */}
            <div className="navbar-end">
                <div className="w-12 rounded-full">
                    <img className='rounded-full -ml-2' title='Koshai' src={propic} />
                </div>
                <Link to='/login'>
                    <button className="Btn ">
                        <div className="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div>
                        <div className="text">Login</div>
                    </button>
                </Link>




            </div>
        </div>
    );
};

export default NavBar;