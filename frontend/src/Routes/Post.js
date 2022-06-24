import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Post = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        
        const config = {
            headers: {
                "Content-Type": "application/json" 
            }
        }

        axios.post('/api/post', {title, body}, config).then(
            res => {
                alert(`${res.data.message}`);
            }
        ).catch(
            err => {
                alert(err.message);
            }
        )
    }

    const titleHandler = (e)=>{
        setTitle(e.target.value)
    }

    const bodyHandler = (e)=>{
        setBody(e.target.value)
    }
    
    
    return (       
        <div>
                <h2>Enter the details of the gear</h2>
                <form>
                    <input onChange = {titleHandler} type= "text" placeholder='Enter the title'/> <br />
                    <textarea onChange = {bodyHandler} type= "text" placeholder='Enter the gear description'/> <br />
                    <button onClick={submitHandler}>
                        Submit
                    </button>
                </form>
        </div>
    )
}

export default Post;