import React from 'react';
import Explain from '../../components/Explainations/Explain';
import InfoCards from '../../components/Home page Information/InfoCards';
import Homebanner from '../Home banner/Homebanner';



const Home = () => {
    return (
        <div>
           <Homebanner></Homebanner>

 {/* Home pages basic time location  informaiton cards */}
           <div className='mt-[-55px]  '>
               <InfoCards></InfoCards>
           </div>
{/* website services explain how to get services */}        
           <div className='mt-10'>
               <Explain></Explain>
           </div>
        </div>
    );
};

export default Home;