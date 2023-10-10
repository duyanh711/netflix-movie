import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL }) => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(fetchURL).then((res) =>
            setMovies(res.data.results)
        )
    }, [fetchURL])

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4 md:p-8'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft size={40} className='  bg-white/30 rounded-full hover:bg-white/100 absolute left-0 overflow-visible group-hover:block hidden cursor-pointer z-10' />
                <div id={'slider'} className='w-full h-full overflow-x-scroll relative whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((movieItem, id) => (
                        <Movie movie={movieItem} id={id} />
                    ))
                    }
                </div>
                <MdChevronRight size={40} className='  bg-white/30 rounded-full hover:bg-white/100 absolute right-0 overflow-visible group-hover:block hidden cursor-pointer z-10' />
            </div>

        </>
    )
}

export default Row
