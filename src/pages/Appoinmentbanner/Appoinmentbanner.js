
import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const Appoinmentbanner = ({date, setDate}) => {
  // const [date, setDate] = useState(new Date())

  let footer = <p> Please Select a date For Your Appoinment </p>
  if (date) {
    footer = <p> You are select {format(date, 'PP',)}. </p>
  }

  return (
    <div className='bannerimage'>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">

          <div className='basis-3/4 mx-10'>
            <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/08/img-01-2.png" class="w-[100%] lg:w-[100%] chair hidden md:block rounded-lg shadow-1xl" alt='doctors' />
          </div>
          <div className="max-w-md text-white font-bold shadow-2xl bg-accent mr-14">

            <DayPicker
              disableNavigation
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