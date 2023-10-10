import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'

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
            <div className='relative flex items-center'>
                <div id={'slider'}>
                    {movies.map((movieItem, id) => (
                        <Movie movie={movieItem} id={id} />
                    ))
                    }
                </div>
            </div>

        </>
    )
}

export default Row
