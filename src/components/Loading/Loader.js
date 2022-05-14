import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react';
import Animation from './loaders.json'




const Loader = () => {
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
              <div className='containers p-[-100px !important]'>
                <div ref={container} ></div>
            </div>
        </div>
    );
};

export default Loader;