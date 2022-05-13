import React, { useState } from 'react';
import Availappoiments from '../../components/Available Appoinments/Availappoiments';
import Foter from '../../sharedcomponents/Footer/Foter';
import Nav from '../../sharedcomponents/Nav bar/Nav';
import Appoinmentbanner from '../Appoinmentbanner/Appoinmentbanner';



const Appoinmentpage = () => {
    const [date , setDate] = useState(new Date())

    return (
        <div>
            <div>
                <Nav></Nav>
            </div>
            {/* appoinmets banner */}
            <div className='mt-14'>
                <Appoinmentbanner date={date} setDate={setDate} ></Appoinmentbanner>
            </div>
            {/* available appoinments  */}
            <div>
                <Availappoiments date={date} ></Availappoiments>
            </div>
  {/* footer */}
            <div className='mt-10'>
                <Foter></Foter>
            </div>
        </div>
    );
};

export default Appoinmentpage;