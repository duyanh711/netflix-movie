import React, { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'


function Movie({ movie, id }) {
    const [love, setLove] = useState(false)

    return (
        <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:2-[280px] inline-block cursor-pointer relative p-2' key={id}>
            <img className='w-full h-full block' src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className='text-white absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100'>
                <p className='white-space-normal test-xs ms:text-sm font-bold flex justify-center text-center items-center h-full'>{movie?.title}</p>
                <p className='absolute top-4 left-4'>{love ? <FaHeart /> : <FaRegHeart />}</p>
            </div>

        </div>
    )
}

export default Movie
