import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Youtube() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])

    const data = useLoaderData()
    return (
        <div className='text-white bg-orange-700 flex justify-center mx-auto my-2 text-3xl p-4 w-auto rounded-lg'>Youtube Subscribers: {data.followers}</div>
    )
}

export default Youtube

export const youtubeInfo= async()=>{
    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}