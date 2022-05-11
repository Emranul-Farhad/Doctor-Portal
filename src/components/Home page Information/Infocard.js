import React from 'react';
import './Infocard.css'



const Infocard = ({clock, title , text}) => {
   
   
    return (
        <div className='cardShadow'>
            <div class="card card-side p-4 shadow-2xl ">
                <figure><img src={clock} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-white text-left"> {title} </h2>
                    <p className='text-white font-bold text-left'> {text}.</p>
                </div>
            </div>
        </div>
    );
};

export default Infocard;