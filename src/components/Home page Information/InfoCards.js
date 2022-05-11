import React from 'react';
import Infocard from './Infocard';
import clock from '../../Images/icons/clock.svg'
import location from '../../Images/icons/marker.svg'
import phone from '../../Images/icons/phone.svg'


const InfoCards = () => {

    return (
        <div className='grid grid-cols-3 gap-4 p-6'>
            <div className=' bg-gradient-to-r from-primary to-secondary  rounded-lg shadow-2xl'>           
                 <Infocard title='Opening Hours' text='7/24' clock={clock} ></Infocard>
            </div>
           
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500  shadow-xl rounded-xl'>
                <Infocard title='Visit Our Location' text='
Brooklyn, NY 10036, Chittagong' clock={location} ></Infocard>
            </div>
            <div className='bg-gradient-to-r from-primary to-accent shadow-xl rounded-xl'>
                <Infocard title='Contact us now' text='
+88 01867-000-000' clock={phone} ></Infocard>
            </div>   
            
        </div>
    );
};

export default InfoCards;