import React from 'react';
import qoute from '../../Images/icons/quote.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Testemonial from './Testemonial';

const Testimonials = () => {
    const testimonials = [
        {
    
            quote : 'I saw Dr. Md. Firoj Hossain was able to diagnosis my condition immediately. He and his staff were extremely professional and kind. There was absolutely no wait time. I would highly recommend this practice to anyone looking for a neurologist.',
            name : 'Md Mazid Mahmud',
            from : 'Dhaka',
            img : 'https://imgur.com/Zt8inGj.png'
        },
        {
            quote : 'I had a great experience with Dr. Humaira Afreen. He took time and really listened to my concerns. I really liked him! She seems like he is really trying to help me, and is willing to look outside the box to see what’s going on. It was entirely stress free.',
            name : 'Nabila Islam',
            from : 'Chittagong',
            img : 'https://imgur.com/GLJS9vL.png'
        },
        {
            quote : 'I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.',
            name : 'Syed Asif Ahmed',
            from : 'Rajshahi',
            img : 'https://i.imgur.com/MfjEql4.jpg'
        },
        {
            quote : 'I was extremely impressed with him at my first appointment because he cared!  In addition to being a great doctor, he is kind, compassionate and down to earth. I would recommend him to anyone who is suffering from headaches like I was.',
            name : 'Syed Asif Ahmed',
            from : 'Rajshahi',
            img : 'https://i.imgur.com/MfjEql4.jpg'
        }
    ]
    
    return (
        <div>
            <div className='mt-[130px] p-4 ' >
            <div className='flex justify-between align-center '>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img src={qoute} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            </div>

            <div className='p-16'> 
 
            <Swiper
                    modules={[Autoplay, Pagination, Zoom, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredslide="true"
                    key={testimonials.length}
                    autoplay={true}
                >

                    {
                        testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} >
                                <Testemonial testimonial={testimonial} ></Testemonial>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
                </div>
        </div>
    );
};

export default Testimonials;