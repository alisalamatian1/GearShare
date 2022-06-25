import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function AllGears() {
    const [gears, setGears] = useState([]);

    const fetchGearList = () => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        axios.get('/api/list/all', config).then(
            res => {
                setGears(res.data.gears_list);
                console.log("!!!!")
                console.log(res)
            }
        ).catch(
            err => {
                alert(err.message);
            }
        )      
    }

    useEffect(() => {
        console.log("-------")
        fetchGearList();
    },);

    return (
        <div>
            {console.log("++++")}
           <div>
                <a href="/">Home</a>
                <Link to = "/Post">Post a gear</Link>
            </div>
            <h2>Gear Bank</h2>
            <div>
                {gears.map(                  
                    (gear) => {
                        return (                            
                            <div>
                                <p>{gear.title}
                                </p>
                                <hr />
                                <p>{gear.body}</p>
                                <hr />
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}






