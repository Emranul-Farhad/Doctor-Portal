import React from 'react';
import appointment from '../../Images/images/appointment.png'
import doctor from '../../Images/images/doctor.png'

// appoinment home page banner

const Appoinment = () => {
    return (
        <div className='mt-20'>
            <section style={{
                background: `url(${appointment})`
            }}
                className='flex justify-center items-center'>
                <div className='flex-1 hidden md:block lg:block'>
                    <img className='mt-[-130px]' src={doctor} alt="" />
                </div>
                <div className='flex-1 p-5'>
                    <h3 className='text-2xl text-primary font-bold text-left mb-2'>Appointment</h3>
                    <h2 className='mb-2 text-3xl text-white text-left '>Make an Appointment Today</h2>
                    <p className='text-white text-left '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente earum ab cupiditate autem accusantium expedita sequi, temporibus, aut illo doloribus quaerat explicabo, assumenda consectetur est vel ad sed maiores doloremque consequatur. Amet consequuntur quibusdam autem, quod maxime qui itaque quaerat.</p>
                    <button class=" mt-4 mx-5 btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold">Take Appoinment </button>
                </div>
            </section>
            {/* <Swiper
					spaceBetween={30}
					slidesPerView="auto"
					centeredslide="false"
					navigation
					autoplay={true}
					key={reviews.length}
				>
					{reviews.map((reviews, index) => (
						<SwiperSlide key={index}>
							<Testimonial reviews={reviews} />
						</SwiperSlide>app
					))}
				</Swiper> */}

        </div>
    );
};

export default Appoinment;



