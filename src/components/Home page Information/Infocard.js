import React from 'react';




const Infocard = ({clock}) => {
   
    return (
        <div>
            <div class="card card-side ">
                <figure><img src={clock} alt="Movie" /></figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
        </div>
    );
};

export default Infocard;