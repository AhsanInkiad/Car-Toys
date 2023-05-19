import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='flex py-20'>
            <form className="Laform mx-auto">
                <div className="Latitle mx-auto  text-center"> <span className=''></span>     Welcome<br /><span>Complete your registration :</span></div>
                <input type="text" placeholder="Name" name="name" className="Lainput" required />
                <input type="email" placeholder="Email" name="email" className="Lainput" required />
                <input type="password" placeholder="Password" name="password" className="Lainput" required />
                <input type="text" placeholder="Photo URL" name="photo" className="Lainput" required />
                <button className='mx-auto w-1/2 btn btn-xs sm:btn-sm md:btn-md lg:btn-md'>Register</button>

               
                <div className="-mt-6 font-semibold text-[#666] mx-auto   text-center"> <br /><span className='text-sm'>Already have an account? : <Link to='/login'> <u className=' hover:text-blue-500 text-md font-bold'>Log in</u></Link> </span></div>
            </form>


        </div>

    );
};

export default Register;