import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import Animation from './notfound.json'
import './Found.css'
import { useNavigate } from 'react-router-dom';





const NotFound = () => {
    const navigate = useNavigate()
    const container = useRef(null)

    useEffect(() => {
        const instance = Lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: Animation,
        });
        return () => instance.destroy();
    }, [])


    return (
        <div>
             <button onClick={()=> navigate("/") } className=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold"> Back to Home </button>
            <div className='containers p-[-100px !important]'>
                <div ref={container} ></div>
            </div>
        </div>

    );
};

export default NotFound;

