import React from 'react';
import chair from '../../Images/images/chair.png'




const Homebanner = () => {
    return (
       <div className=''>
            <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={chair} class="w-[100%]  hidden md:block rounded-lg shadow-1xl offset-1" />
                </div>
                {/* className='sm:mt-[-200px] md:mt-[10px]' */}
                <div>
                    <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6">i eaque aut repudiandae et a id nisi Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sed illum culpa itaque inventore alias ut ad aspernatur minus impedit..</p>
                    <button class="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold">Get Started</button>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Homebanner;