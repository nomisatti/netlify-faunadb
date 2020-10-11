import React , {useState , useEffect} from 'react'

export default() => {

    const [postData , setPostData] = useState("");
    const [data , setData] =  useState("");
    const addtitle = (e)=> {
        console.log(postData)
        e.preventDefault();
        fetch('/.netlify/functions/netlify-add' , {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            method:'post',
            body:JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            setData(data),
            console.log('return data  :',data)
        })
    }
    return (
        <div>
            <h3>Add Posts Title</h3>
            <form onSubmit={addtitle}>
                <input type='text' placeholder='Title' onChange={(e) => setPostData(e.target.value)} />

                <button type='submit' >Add Title</button>
            </form>

            <hr></hr>
            <h3>Result</h3>
            <p>{data.message}</p>
        </div>

    )
}