import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

function SignIn() {

    const { user, SignIn } = UserAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await SignIn(email, password)
            navigate('/')

        }
        catch (error) {
            setError(error.message.slice(10, -1))
        }

    }


    return (
        <div className='w-full h-screen'>
            <img className='sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg' />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'>
                <div className='fixed w-full px-4 py-20 z-50'>
                    <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                        <div className='py-10 max-w-[[320px] px-10'>
                            <h1 className='font-bold text-3xl'>Sign In</h1>
                            {error ? <p className='text-white mt-2 bg-red-600 -mb-2'>{error}</p> : <p></p>}
                            <form onSubmit={handleSubmit}
                                className='flex flex-col py-8'>
                                <input
                                    onInput={() => setError('')}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='bg-gray-700 w-full p-3 rounded my-3' type='email' placeholder='Email' />
                                <input
                                    onInput={() => setError('')}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='bg-gray-700 w-full p-3 rounded my-3' type='password' placeholder='Password' />
                                <button className='bg-red-600 p-3 my-6 rounded font-bold'>Sign In</button>
                                <div className='flex justify-between text-sm'>
                                    <p className='text-gray-600'><input className='mr-1' type='checkbox' />Remember me</p>
                                    <p className='text-gray-600'>Need help?</p>
                                </div>
                                <p className='text-gray-600 py-6'>New Netflix's account?<span className='text-white font-bold cursor-pointer'>
                                    <Link to='/signup'> Sign Up</Link></span> </p>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default SignIn
