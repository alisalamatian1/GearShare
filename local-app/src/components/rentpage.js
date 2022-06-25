import React from 'react';
import Navbar from './navbar';
import uniqid from 'uniqid';

export default function RentPage(props) {
    const items = props.items.map(item => {
        return (
            <div className='item' key={uniqid()}>
                <p id='item-title' className='main-text'>
                    {item.title}
                </p>
                <p id='item-dates' className='main-text'>
                    {item.dates}
                </p>
                <p id='item-price' className='main-text'>
                    {item.rate}
                </p>
            </div>
        );
    });
    return (
        <div id='rent-page' className='section'>
            <Navbar />
            <div id='rent-container'>
                <h2 className='main-text'>Rent Gear</h2>
                <div id='items-container'>
                    {items}
                </div>
            </div>
       </div>
    );
}
