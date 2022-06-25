import React from 'react';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar';
import uniqid from 'uniqid';

export default function RentPage() {
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
        <div id='rent-page' className='section'>
            <Navbar />
            <div id='rent-container'>
                <h2 className='main-text'>Rent Gear</h2>
                <div id='items-container'>
                    {gears.map(                  
                        (gear) => {
                            return (                            
                            <div className='item' key={uniqid()}>
                                <p className='item-title' className='main-text'>
                                    {gear.title}
                                </p>
                                <p className='item-dates' className='main-text'>
                                    {gear.dates}
                                </p>
                                <p className='item-rate' className='main-text'>
                                    {gear.rate}
                                </p>
                            </div>
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    );
}







