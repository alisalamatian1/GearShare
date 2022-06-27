import React from 'react';
import axios from 'axios'
import uniqid from 'uniqid';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar';
import Copyright from './copyright';
import Modal from './modal';
import {Transition, CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";

export default function RentPage(props) {
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
    }, []);

    const [isModalDisplayed, setModalDisplayed] = useState(false);
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentDates, setCurrentDates] = useState('');
    const [currentRate, setCurrentRate] = useState('');
    const [currentDescription, setCurrentDescription] = useState('');
    const [currentContact, setCurrentContact] = useState('');

    const handleClose = () => {
        setModalDisplayed(false);
    }

    const handleClick = (e) => {
        const currentGear = lookupGear(e.target.firstChild.textContent);
        setCurrentTitle(currentGear.title);
        setCurrentDates(currentGear.dates);
        setCurrentRate(currentGear.rate);
        setCurrentDescription(currentGear.body);
        setCurrentContact(currentGear.contact);
        setModalDisplayed(true);
    }

    const lookupGear = (title) => {
        let currentGear;
        gears.forEach(obj => {
            if (obj.title === title) {
                currentGear = Object.assign({}, obj);
            }
        });
        return currentGear;
    }

    return (
        <div id='rent-page' className='section'>
            <Navbar isSuccessful={props.isSuccessful}/>
            <Modal 
            title={currentTitle}
            dates={currentDates}
            rate={currentRate}
            description={currentDescription}
            contact={currentContact}
            onClose={handleClose}
            isDisplayed={isModalDisplayed}
            />
                <div id='rent-container'>
                    <h2 className='main-text'>Rent Gear</h2>
                <div id='items-container'>
                    {gears.map(                  
                        (gear) => {
                            return (                            
                            <div style={{backgroundImage:`url(${gear.image})`}} className='item' key={uniqid()} onClick={handleClick}>
                                <p className='item-title main-text'>
                                    {gear.title}
                                </p>
                                <p className='item-dates main-text'>
                                    {gear.dates}
                                </p>
                                <p className='item-rate main-text'>
                                    {gear.rate}
                                </p>
                            </div>
                            )
                        }
                    )}
                </div>
            </div>
            <Copyright />
        </div>
    );
}







