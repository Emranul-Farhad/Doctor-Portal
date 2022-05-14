import { format } from 'date-fns';
import React, { useEffect, useState }  from 'react';
import Availableappoinment from './Availableappoinment';
import Mymodal from '../Mymodal/Mymodal'


const Availappoiments = ({ date }) => {
    const [popusp, setModal] = useState(null)

    let footer;
    if (date) {
        footer = <p> Available Appointments on {format(date, 'PP',)}</p>
    }
    const [availabledoctors  , setAvailabledoctors] = useState([])
    useEffect(()=> {
        fetch("http://localhost:8000/services")
        .then(res => res.json())
        .then(data => setAvailabledoctors(data))
    }, []) 

    return (
        <div>
            <h1 className='text-primary text-2xl font-bold text-center mt-12' > {footer} </h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 rounded-xl mt-16'>
                {
                    availabledoctors.map(availabledoctor => <Availableappoinment key={availabledoctor._id} availabledoctor={availabledoctor} modals={setModal} ></Availableappoinment> )
                }
            </div>
          
             {
                 popusp && <Mymodal dateforappoinments={date} modaldetails={popusp}> </Mymodal>
             }
          
        </div>
    );
};

export default Availappoiments;