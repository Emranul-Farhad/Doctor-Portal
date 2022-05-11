import React from 'react';

const Serviceprovide = ({ service }) => {
    return (
        <div className='mb-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure><img src={service.img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title"> {service.Name} </h2>
                    <p tit className='text-left'> {service.Title} </p>
                    <div class="card-actions justify-end">
                   
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Serviceprovide;