import React from 'react';
import Infocard from './Infocard';
import clock from '../../Images/icons/clock.svg'
import location from '../../Images/icons/marker.svg'
import phone from '../../Images/icons/phone.svg'


const InfoCards = () => {
    return (
        <div className='grid grid-cols-3 gap-4 p-6'>
          <div className='bg-primary'> <Infocard clock={clock} ></Infocard> </div>
           <div className='bg-accent'>
           <Infocard clock={location} ></Infocard>
           </div>
            <Infocard clock={phone} ></Infocard>
        </div>
    );
};

export default InfoCards;