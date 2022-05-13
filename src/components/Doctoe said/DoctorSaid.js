import React from 'react';
import './Doctors.css'



const DoctorSaid = () => {
    return (
        <div className='doctorbg'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">

                    <div className='basis-2/4'>
                        <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/img-01-2.png" className="w-[100%] lg:w-[100%] chair hidden md:block rounded-lg shadow-1xl" alt='doctors' />
                    </div>

                    <div className='text-right basis-3/4 '>
                        <h1 className="text-5xl font-bold text-right"> Bring Care to Your </h1>
                        <h1 className='text-3xl mt-4 text-primary font-bold ' >Home With One Click</h1>
                        <p className="py-6 text-right box-border text-accent  ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, corporis!.</p>
                        <button className=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold">Contact</button>
                        <button className="btn btn-outline btn-primary"> About US </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorSaid;