import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {

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
            <div>
                <Link to="/signin"><button className='text-white pr-4'>Sign In</button></Link>
                <Link to="signup"><button className='text-white px-6 py-2 rounded bg-red-600 cursor-pointer transition hover:bg-red-700'>Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Navbar
