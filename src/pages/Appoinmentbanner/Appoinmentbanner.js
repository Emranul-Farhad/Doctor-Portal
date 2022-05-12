// import React from 'react';
// import './Appoinmentbanner.css'
// import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';


// const Appoinmentbanner = () => {
//     return (
//         <div>
//              <div>
//          <div className='bannerimage'>
//             <div class="hero min-h-screen ">
//             <div class="hero-content flex-col lg:flex-row-reverse">

//                     <img src="https://online-doctors-portal.web.app/static/media/banner-img.3965511e.jpg" class="w-[100%] lg:w-[40%] chair hidden md:block rounded-lg shadow-1xl" alt='pc' />

//                 <div className='mr-4'>
//                     return <DayPicker />
//                 </div>
//             </div>
//         </div>
//        </div>
//         </div>
//         </div>
//     );
// };

// export default Appoinmentbanner;


import React, { useState } from 'react';
import bgappoinment from '../../Images/images/appointment.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Appoinmentbanner = () => {

 const [date, setDate] = useState( new Date())

 let footer = <p> Please Select a date For Your Appoinment </p>
if(date){
    <p> You select {format (date , 'pp')}.  </p>
}

    return (
        <div>
            <div class="hero min-h-screen" style={{
                background: `url(${bgappoinment})`
            }} >
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold">Hello there</h1>                

                        <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        footer={footer}
                        />                  
                       
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Appoinmentbanner;