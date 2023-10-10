import React, { useEffect, useState } from 'react'
import requests from './Requests'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random() * movies.length)]

    // Close API when close app
    useEffect(() => {
        axios.get(requests.requestPopular).then((res) => {
            setMovies(res.data.results)
        })
    }, [])
    const truncateStr = (str, num) => {
        if (str?.length > num)
            return str.slice(0, num) + ' ...'
        return str
    }

    return (
        <div className='w-full h-[700px] text-white'>
            <div className='w-full h-full'>
                <div className=' absolute w-full h-full bg-gradient-to-r from-black'></div>
                <img className='w-full h-[630px] object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

                <div className='absolute w-full top-[20%] p-4 md:p-8'>
                    <h1 className='text-white text-3xl font-bold md:text-5xl'>{movie?.title}</h1>
                    <button className='border bg-gray-300 text-black my-4 py-2 px-5' >Play</button>
                    <button className='border my-4 py-2 px-5 ml-3'>Watch Later</button>
                    <p className='text-gray-400 text-sm'>Released: {movie?.release_date}</p>
                    <p className='text-sm mt-2 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%]'>{truncateStr(movie?.overview, 150)}</p>
                </div>

            </div>
        </div>
    )
}

export default Main
