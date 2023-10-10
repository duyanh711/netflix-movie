import React from 'react'
import { Link } from 'react-router-dom'

function SignUp() {
    return (
        <div className='w-full h-screen'>
            <img className='sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
                <div className='fixed w-full px-4 py-20 z-50'>
                    <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                        <div className='py-10 max-w-[[320px] px-10'>
                            <h1 className='font-bold text-3xl'>Sign Up</h1>
                            <form className='flex flex-col py-8'>
                                <input className='bg-gray-700 w-full p-3 rounded my-3' type='email' placeholder='Email' />
                                <input className='bg-gray-700 w-full p-3 rounded my-3' type='password' placeholder='Password' />
                                <button className='bg-red-600 p-3 my-6 rounded font-bold'>Sign Up</button>

                                <p className='text-gray-600'>Already subscribed to Netflix?<span className='text-white font-bold cursor-pointer'>
                                    <Link to='/signin'> Sign In</Link></span> </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignUp
