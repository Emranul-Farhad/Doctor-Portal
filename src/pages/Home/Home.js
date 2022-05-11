import React from 'react';
import InfoCards from '../../components/Home page Information/InfoCards';
import Homebanner from '../Home banner/Homebanner';



const Home = () => {
    return (
        <div>
           <Homebanner></Homebanner>

 {/* Home pages basic time location  informaiton cards */}
           <div>
               <InfoCards></InfoCards>
           </div>
           
        </div>
    );
};

export default Home;