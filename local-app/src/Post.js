import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Navbar from './components/navbar';

const Post = () => {
    const [title, setTitle] = useState("");
    const [dates, setDates] = useState("");
    const [rate, setRate] = useState("");
    const [contact, setContact] = useState("");
    const [isUsingDefaultContact, setDefaultContact] = useState("");
    const [description, setDescription] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
        
        const config = {
            headers: {
                "Content-Type": "application/json" 
            }
        }

        axios.post('/api/post', {title, description}, config).then(
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

    const datesHandler = (e)=>{
        setDates(e.target.value)
    }

    const rateHandler = (e)=>{
        setRate(e.target.value)
    }

    const contactHandler = (e)=>{
        setContact(e.target.value)
    }

    const descriptionHandler = (e)=>{
        setDescription(e.target.value)
    }

    const defaultContactHandler = (e)=> {
        // does nothing
        setDefaultContact(e.target.checked);
    }
    
    return (       
        <div id='post-page' className='section'>
            <Navbar />
            <h1 className='main-text'>Make a Post</h1>
            <div id='post-container'>
                <form id='post' onSubmit={submitHandler}>
                    <label htmlFor='title'>
                        Post Title <br />
                        <input 
                        onChange={titleHandler}
                    />
                        </label>
                        <label htmlFor='dates'>
                            Available Dates <br />
                            <input 
                            onChange={datesHandler}
                        />
                            </label>
                            <label htmlFor='rate'>
                                Rate<br />
                                <input 
                                onChange={rateHandler}
                            />
                                </label>
                                <label id='contact' htmlFor='contact'>
                                    Contact<br />
                                    <input 
                                    onChange={contactHandler}
                                />
                                        <label htmlFor='default-contact'>
                                            <input 
                                            type='checkbox'
                                            id='default-c'
                                            onChange={defaultContactHandler}/>
                                            Use my registered e-mail as my preferred 
                                            contact
                                        </label>
                                    </label>
                                    <label htmlFor='description'>
                                        Description<br />
                                        <input 
                                        onChange={descriptionHandler}
                                    />
                                        </label>
                                        <button>Post</button>
                                    </form>
                                </div>
                            </div>
   );
}

export default Post;

