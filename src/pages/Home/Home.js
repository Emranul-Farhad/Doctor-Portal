import React from 'react';
import DoctorSaid from '../../components/Doctoe said/DoctorSaid';
import Explain from '../../components/Explainations/Explain';
import InfoCards from '../../components/Home page Information/InfoCards';
import Serviceprovides from '../../components/Services we provides/Serviceprovides';
import Appoinment from '../../components/Take appionment/Appoinment';
import Homebanner from '../Home banner/Homebanner';



const Home = () => {
    return (
        <div>
           <Homebanner></Homebanner>

 {/* Home pages basic time location  informaiton cards */}
           <div className='mt-[-55px]  '>
               <InfoCards></InfoCards>
           </div>
 {/* doctor said */}
           <div className='mt-[130px]'>
               <DoctorSaid></DoctorSaid>
           </div>
{/* website services explain how to get services */}        
           <div className='mt-[131px]'>
               <Explain></Explain>
           </div>
{/* services we provides */}
        <div className='mt-[131px]'> 
            <Serviceprovides></Serviceprovides>
        </div>
{/* Take appoin ments */}
        <div className='mt-[131px]'>
            <Appoinment></Appoinment>
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam ullam maxime, repudiandae ea officia quas quibusdam quis, inventore consectetur esse temporibus, ipsam fugit quo possimus! Qui inventore perspiciatis doloribus praesentium repellat voluptate dolorem, magni libero vel at sapiente excepturi omnis rerum tempora rem consequuntur accusantium esse sint minima aliquam soluta?</p>
        </div>
    );
};

export default Home;