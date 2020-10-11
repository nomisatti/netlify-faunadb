import React, { useEffect, useState } from 'react'

export default () => {

    const [netlifyData , setNetlifyData] = useState(Object);

    useEffect(() => {

        fetch('/.netlify/functions/netlify-faunadb')
        .then(response => response.json())
        .then( data => {
            setNetlifyData(data)
        })
    }, [])

    return (
        <div>
        {netlifyData.message}
      </div>
    )
}