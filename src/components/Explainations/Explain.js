import React from 'react';
import './Explain.css'


// 
const Explain = () => {
    return (
        <div className='mx-1 md:mx-0 grid grid-cols-2 lg:grid-cols-5 md:grid-cols-5  '>
            <div class="image-gallery">

                <div className='imagehoverhide'>
                    <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/3.png" alt="" />

                </div>

                <div className='showtext'>
                    <h1 className='text-accent  font-bold hospital mt-4 mx-8 text-left text-3xl'> Live chat with <br /> <strong className='text-primary font-bold text-4xl'> Doctors </strong> <br /> </h1>
                </div>

                <div class="photodetails" >
                    <h1 className='text-accent font-bold hospital mt-4 mx-8 text-left text-2xl'> Live chat with <br /> <strong className='text-primary font-bold text-4xl'> Doctors </strong> <br /> </h1>
                    <button className='font-bold text-white mt-4 mx-5 btn btn-outline btn-primary' >show nearest Doctors</button>
                </div>

            </div>
            {/*  */}
            <div class="image-gallery mt-10">

                <div className='imagehoverhide'>
                    <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/2.png" alt="" />

                </div>

                <div className='showtext'>
                    <h1 className='text-accent  font-bold hospital mt-4 mx-4 text-left text-2xl'> First Appoinment With <br /> <strong className='text-secondary font-bold text-3xl'> Nearest Hospital </strong> <br /> </h1>
                </div>

                <div class="photodetails" >
                    <h1 className='text-accent font-bold hospital mt-4 mx-8 text-left text-2xl'> <br /> <strong className='text-secondary font-bold text-3xl'> Nearest Hospital </strong> <br /> </h1>
                    <button className='font-bold text-white mt-4 mx-5 btn btn-outline btn-secondary'>Nearest ALL Hospital </button>
                </div>

            </div>
            {/*  */}
            <div class="image-gallery mt-10 md:mt-0 ">

                <div className='imagehoverhide'>
                    <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/1.png" alt="" />

                </div>

                <div className='showtext'>
                    <h1 className='text-accent  font-bold hospital mt-4 mx-4 text-left text-2xl'> Articale from top <br />  <strong className='text-warning font-bold text-3xl'> Hospital & DOC. </strong> <br /> </h1>
                </div>

                <div class="photodetails" >
                    <h1 className='text-accent font-bold hospital mt-4 mx-4 text-left text-2xl'> Articale from Top <br /> <strong className='text-warning font-bold text-4xl'> specialist </strong> <br /> </h1>
                    <button className='font-bold text-white mt-4 mx-5 btn btn-outline btn-warning' >show nearest Doctors</button>
                </div>

            </div>
            {/*  */}
            <div class="image-gallery mt-14 md:mt-10">

                <div className='imagehoverhide'>
                    <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/4.png" alt="" />

                </div>

                <div className='showtext'>
                    <h1 className='text-accent  font-bold hospital mt-4 mx-8 text-left text-3xl'>Our 24/7 <br /> <strong className='text-error font-bold text-4xl'> support... </strong> <br /> </h1>
                </div>

                <div class="photodetails" >
                    <h1 className='text-accent font-bold hospital mt-4 mx-8 text-left text-2xl'> Our 24/7 <br /> <strong className='text-error font-bold text-4xl'> Support </strong> <br /> </h1>
                    <button className='font-bold text-white mt-4 mx-5 btn btn-outline btn-error' >show nearest Doctors</button>
                </div>

            </div>
            {/*  */}
            <div class="image-gallery mx-16 mt-10 md:mt-0 mx-0">

                <div className='imagehoverhide'>
                    <img src="http://amentotech.com/projects/doctreat/wp-content/uploads/2019/10/5.png" alt="" />

                </div>

                <div className='showtext'>
                    <h1 className='text-accent  font-bold hospital mt-4 mx-1 text-left text-2xl'> Help on The Go <br /> <strong className='text-[purple] font-bold text-4xl'> Download App </strong> <br /> </h1>
                </div>

                <div class="photodetails" >
                    <h1 className='text-accent font-bold hospital mt-4 mx- text-left text-2xl'> Help on the Go <br /> <strong className='text-[purple] font-bold text-3xl'> Download App </strong> <br /> </h1>
                    <button className='font-bold text-white mt-4 mx-5 btn btn-outline btn-accent' >show nearest Doctors</button>
                </div>

            </div>
        </div>
    );
};

export default Explain;