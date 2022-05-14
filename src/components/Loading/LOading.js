import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import Animation from './Loading.json'
import './Loading.css'



const LOading = () => {

    const loading = useRef(null)

    useEffect(() => {
           const instance =  Lottie.loadAnimation({
            container: loading.current,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            animationData: Animation,
        });
        // return ()=> instance.destroy();
    }, [])

    return (
        <div  ref={loading} className="loading" >
            
        </div>
    );
};

export default LOading;