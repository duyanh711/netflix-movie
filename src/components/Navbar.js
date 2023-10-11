import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext';


const Navbar = () => {

    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };

    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 0) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])



    return (
        <div className={`flex fixed justify-between md:h-[25px]  md:p-8 p-4  w-full items-center text-center z-[100] top-0 ${show && ' bg-black/90 fixed'} `}>
            <Link to="/"><h1 className='text-red-600 text-4xl font-bold cursor-pointer'>NETFLIX</h1></Link>
            {user?.email ? (
                <div>
                    <Link to='/account'>
                        <button className='text-white pr-4'>Account</button>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <Link to='/signin'>
                        <button className='text-white pr-4'>Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'>
                            Sign Up
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};


export default Navbar
