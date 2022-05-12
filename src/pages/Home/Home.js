import React from 'react';
import DoctorSaid from '../../components/Doctoe said/DoctorSaid';
import Doctors from '../../components/Doctors/Doctors';
import Explain from '../../components/Explainations/Explain';
import InfoCards from '../../components/Home page Information/InfoCards';
import Howwork from '../../components/How it Works/Howwork';
import Serviceprovides from '../../components/Services we provides/Serviceprovides';
import Appoinment from '../../components/Take appionment/Appoinment';
import Testimonials from '../../components/Testimonial/Testimonials';
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
{/* Doctors section  */}
       <div>
       <Doctors></Doctors>
       </div>
{/*How it works  */}
        <div>
            <Howwork></Howwork>
        </div>
{/* testimonials whaat says our cysromer */}
        <div>
            <Testimonials></Testimonials>
        </div>
        
        </div>
    );
};

export default Home;