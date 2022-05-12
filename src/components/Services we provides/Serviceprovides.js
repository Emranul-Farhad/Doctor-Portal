import React from 'react';
import Serviceprovide from './Serviceprovide';




const Serviceprovides = () => {

    const services =
     [
      {  img : "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/specialities/47/icon/ZpzlHSulC9AHfuRuYMnTDgbOvBLThCqH6xjxHgjm.png",
      Name : "Physical Medicine & Rehablititaion",
      Title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum, autem "
     },
     {
         img: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/specialities/dentistry.png",
         Name: " Dental Care/ Denistry ",
         Title :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, accusamus."
     },
     {
         img: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/specialities/16/icon/Ijmjkj6wKA0XQmv0mnxi22kFdbxzFxgRJBIlkeMi.png",
         Name: "Ear,Nose & Throat/ENT ",
         Title :" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, eligendi?"
     },
     {
         img: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/specialities/dermatology.png",
         Name: "Skin/Dermatology ",
         Title :" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, itaque."
     },
     {
         img: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/specialities/1/icon/F9k25CgCSLcZYDsu1WfIuQRwAueQRTbyHXA0Qn6z.png",
         Name: " MEdicine/General physician ",
         Title : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quia."
     },
     {
         img: "https://doctime-core-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/specialities/gynaecology.png",
         Name: " Gynecology ",
         Title : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, optio!"
     },
     
    ]

    return (
        <div>

           <h1 class="text-4xl text-center font-bold"> Our Services <br /> <span className='text-2xl text-primary tracking-wide' > That We Provides </span> </h1>

           <div className='gap-4 mt-10 grid grid-cols-1 lg:gap-7 lg:grid-cols-3 md:grid-cols-2  px-20 '>
              {
                  services.map(service => <Serviceprovide service={service} ></Serviceprovide> )
              }
           </div>
        </div>
    );
};

export default Serviceprovides;