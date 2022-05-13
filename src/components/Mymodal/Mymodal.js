import { format } from 'date-fns';
import React from 'react';




const Mymodal = ({ modaldetails, dateforappoinments }) => {
    const { img, categorey, name, education, designation, department, hospital, slots } = modaldetails

    const appoinmentbook = event => {
        event.preventDefault();
        // const slot = event.target.slot.value;
        // console.log(slot);
        const solts = event.target.slot.value ;
        console.log(solts);
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
                            {/* <h3 className='text-center  text-accent font-bold mb-5' > {format(dateforappoinments, 'PP',)} </h3> */}


                            <input className='mb-2 bg-white text-primary font-bold mx-auto' type="text" placeholder={format(dateforappoinments, 'PP',)} value={format(dateforappoinments, 'PP',)} disabled />

                            <select name='slot' class="select select-info w-full">
                               {
                                   slots.map(slot => <option value={slot} > {slot} </option> )
                               }
                            </select>

                            <div className='flex flex-row gap-3 mt-2'>
                                <input type="text" placeholder="First Name" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="text" placeholder="Last Name" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className='flex flex-row gap-3 mt-3'>
                                <input type="text" placeholder="Email" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="text" placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" />
                            </div>
                            <div className='flex flex-row gap-3 mt-4'>
                                <input type="text" placeholder="Age" className="input input-bordered input-info w-full max-w-xs" />
                                <input type="select" placeholder="Weight" className="input input-bordered input-info w-full max-w-xs" />
                                <select id="cars" className="text-accent input input-bordered input-info w-full max-w-xs" >
                                    <option disabled value="Not set" selected >select gender</option>
                                    <option value="volvo">Male</option>
                                    <option value="saab">Femal</option>
                                    <option value="vw">Other</option>

                                </select>
                            </div>
                            <textarea className='input input-bordered input-info mt-10' name="" id="" cols="60" rows="21"></textarea>
                            <input class=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold" type="submit" submit />
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