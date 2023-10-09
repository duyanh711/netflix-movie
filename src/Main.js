import React, { useEffect, useState } from 'react'
import requests from './Requests'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])
    // Close API when close app
    useEffect(() => {
        axios.get(requests.requestPopular).then((res) => {
            setMovies(res.data)
        })
    }, [])

    return (
        <div>

        </div>
    )
}

export default Main
