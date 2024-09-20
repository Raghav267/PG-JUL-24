import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Special = () => {
    const { dogId } = useParams();
    console.log(dogId);
    useEffect(() => {
        // Network Calls
    });

    return (
        <>
            <h2>Let see some more hooks.</h2>
            <h3>We are seeing the useParans and dogId is : {dogId}</h3>
        </>

    )
}

export default Special
