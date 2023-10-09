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
    console.log(movie)

    return (
        <div>

        </div>
    )
}

export default Main
