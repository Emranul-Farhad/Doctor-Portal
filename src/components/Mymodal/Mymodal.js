import { format } from 'date-fns';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebasekey/Firebasekey';
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';
import { useNavigation } from 'react-day-picker';





const Mymodal = ({ modaldetails, dateforappoinments, refetch  }) => {

    const { img, categorey, name, education, _id, designation, department, hospital, slots, price } = modaldetails

    // navigate
    const navigate = useNavigate()

    const takingdates = format(dateforappoinments, "PP")

    // submit button handel
    const appoinmentbook = event => {   
        event.preventDefault();
        const userappointmnettakingform = {
            treatmentid: _id,
            price: price,
            doctorcategorey: categorey,
            appointmentDate: takingdates,
            appoinmentslot: event.target.slot.value,
            appoinmentpattientname: user?.displayName,
            appoinmentpattientemail: user?.email,
            appoinmentpattientnumber: event.target.number.value,
            appoinmentpattientproblem: event.target.problem.value
        }
        fetch('http://localhost:8000/appoinments', {
            method: 'POST', // or 'PUT'
            headers: {
                
             'Content-Type': 'application/json',
            },
            body: JSON.stringify(userappointmnettakingform),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data, "here from");
                console.log('Success:', data);
                if(data.success){
                    toast(`appoinment setted in ${takingdates} at${event.target.slot.value} `)
                     

                }
                else{
                    toast.error(`already setted in ${data?.userappointmnettakingform.appointmentDate} at ${data?.userappointmnettakingform.appoinmentslot}`)
                }
                refetch()
               
            })
    }

    const [user] = useAuthState(auth)

    let fnames;
    if (user) {
        fnames = user?.displayName.split(' ')[0]
    }

    let lastname;
    if (user) {
        lastname = user?.displayName.split(' ')[1]
    }

    return (
        <div>
            <div>
                <input type="checkbox" id="bookingmodal" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label for="bookingmodal" className="btn btn-sm btn-circle absolute right-2 top-2 cursor-pointer ">✕</label>
                        <form onSubmit={appoinmentbook} >
                            <div className='mx-[160px]' >
                                <div className="avatar online  ">
                                    <div className="w-24 rounded-full ">
                                        <img src={img} alt=" doctor's_photo " />
                                    </div>
                                </div>
                            </div>
                            <h2 className='text-center text-2xl font-bold text-secondary' > {categorey}</h2>
                            <h3 className='text-center text-1xl font-bold text-accent mt-1' > ({designation}) </h3>
                            <h3 className='text-center text-1xl font-bold text-accent mt-2 mb-1' >  {name} </h3>
                            <h3 className='text-center text-1xl font-bold text-accent mt-2 mb-1' > service fee ৳{price} </h3>
                            {/* <h3 className='text-center  text-accent font-bold mb-5' > {format(dateforappoinments, 'PP',)} </h3> */}

                            {/* date taking from react day picker */}
                            <input
                                className='mb-2 bg-white text-primary font-bold mx-auto'
                                type="text"
                                placeholder={format(dateforappoinments, 'PP',)}
                                value={format(dateforappoinments, 'PP',)} disabled
                            />

                            <select name='slot' className="select select-info w-full">
                                {
                                    slots.map(slot => <option value={slot} > {slot} </option>)
                                }
                            </select>

                            <div className='flex flex-row gap-3 mt-2'>
                                <input value={fnames} disabled type="text" placeholder="First Name" className="input input-bordered input-info w-full max-w-xs" />
                                <input value={lastname} disabled type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className='flex flex-row gap-3 mt-3'>
                                <input value={user?.email} disabled type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
                                <input name='number' type="text" placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className='flex flex-row gap-3 mt-4'>
                                <input name='age' type="text" placeholder="Age" className="input input-bordered input-info w-full max-w-xs" />
                                <input name='weight' type="select" placeholder="Weight" className="input input-bordered input-info w-full max-w-xs" />
                                <select id="gender" className="text-accent input input-bordered input-info w-full max-w-xs" >
                                    <option disabled value="Not set" selected >select gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Femal</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>
                            <textarea className='input input-bordered input-info mt-10' name="problem" id="" cols="60" rows="21"></textarea>
                            {/* <input className=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold" type="submit" submit /> */}
                             <input className=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold" type="submit" submit /> 
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mymodal;

//      {/* <h3 className="font-bold text-lg">Congratulations random Interner user!</h3>
// {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */} */}