import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ title, fetchURL, rowId }) => {

    const [movies, setMovies] = useState([])


    useEffect(() => {
        axios.get(fetchURL).then((res) =>
            setMovies(res.data.results)
        )
    }, [fetchURL])


    const handleSlideLeft = () => {
        const sliderElement = document.getElementById('slider' + rowId)
        sliderElement.scrollLeft -= 500
    }
    const handleSlideRight = () => {
        const sliderElement = document.getElementById('slider' + rowId)
        sliderElement.scrollLeft += 500
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4 md:p-8'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={handleSlideLeft}
                    size={40}
                    className='  bg-white/30 rounded-full hover:bg-white/100 absolute left-0 overflow-visible group-hover:block hidden cursor-pointer z-10' />
                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll relative whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((movieItem, id) => (
                        <Movie movie={movieItem} key={id} />
                    ))
                    }
                </div>
                <MdChevronRight onClick={handleSlideRight}
                    size={40}
                    className='  bg-white/30 rounded-full hover:bg-white/100 absolute right-0 overflow-visible group-hover:block hidden cursor-pointer z-10' />
            </div>

        </>
    )
}

export default Row
