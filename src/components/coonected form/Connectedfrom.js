import React from 'react';
import connectedformpic from '../../Images/images/appointment.png'


const Connectedfrom = () => {

    return (
        <div>
           <div style={{
        background:`url(${connectedformpic})`
    }} className='bg-primary px-10 py-14 '>
      <div className='text-center pb-14 text-white'>
        <p className='text-2xl font-bold text-primary bg-clip-text bg-gradient-to-br from-accent to-secondary'>
          Contact Us
        </p>
        <h1 className='text-4xl font-bold '>Stay connected with us</h1>
      </div>
      <div className='grid grid-cols-1 justify-items-center gap-5'>
        <input
          type='text'
          placeholder='Email Address'
          className='input w-full max-w-md'
        />
        <input
          type='text'
          placeholder='Subject'
          className='input w-full max-w-md'
        />
        <textarea
          className='textarea w-full max-w-md'
          placeholder='Your message'
          rows={6}
        ></textarea>
          <button class=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold">Message Us </button>
      </div>
    </div>
        </div>
    );
};

export default Connectedfrom;