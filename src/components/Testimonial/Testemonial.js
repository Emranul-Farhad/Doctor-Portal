import React from 'react';

const Testemonial = ({testimonial}) => {
    return (
        <div>
            <div className="card lg:max-w-lg bg-accent shadow-xl  ">
            <div className="card-body">
                <p className='text-white' > {testimonial.quote} </p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={testimonial.img} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl text-white '>{testimonial.name}</h4>
                        <p>{testimonial.location}</p>
                    </div>                 
                </div>
                <div>
                        <p className='text-white mx-20 mt-[-15px] ' > {testimonial.from} </p>
                 </div>
            </div>
        </div>
        </div>
    );
};

export default Testemonial;