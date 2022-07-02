import React from 'react';
import slide1 from '../img/testimony1.jpg';
import slide2 from '../img/testimony2.jpg';
import slide3 from '../img/testimony3.jpg';
import '../styles/testimony.css';


export default function Testimonies(props) {
    return (
        <div id='testimonies' className='section'>
            <div className='gallery'>
                <div class = "slides">
                <input type= "radio" name = "common" id = "btn1" checked></input>
                <input type= "radio" name = "common" id = "btn2" ></input>
                <input type= "radio" name = "common" id = "btn3" ></input>

                <div class="image first">
                    <img class = "pic" src={slide1}/>
                </div>
                <div class="image">
                    <img class = "pic" src={slide2}/>
                </div>
                <div class="image">
                    <img class = "pic" src={slide3}/>
                </div> 

                </div>
                <div class = "navigator">
                    <label for = "btn1" class = "bar"></label>
                    <label for = "btn2" class = "bar"></label>
                    <label for = "btn3" class = "bar"></label>
                </div>
            </div>
           
        </div>
    );
}
