import React from 'react';
import chair from '../../Images/images/chair.png'
import './Homebanner.css'




const Homebanner = () => {
    return (
       <div className='bannerimage'>
            <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
              
                    <img src={chair} class="w-[100%] lg:w-[60%] chair hidden md:block rounded-lg shadow-1xl" />
              
                {/* className='sm:mt-[-200px] md:mt-[10px]' */}
                <div>
                    <h1 class="text-5xl font-bold text-accent text-left">Your New Smile Starts Here</h1>
                    <p class="py-6 text-accent text-left">i eaque aut repudiandae et a id nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed illum culpa itaque inventore alias ut ad aspernatur minus impedit..</p>
                    <button class="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Homebanner;