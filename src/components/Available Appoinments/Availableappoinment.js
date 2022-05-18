import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiFillCalendar} from 'react-icons/ai'


const Availableappoinment = ({availabledoctor, modals }) => {
    const { img, categorey, name, education, designation, department, hospital,slots,price } = availabledoctor
    const [ descriptionCollapse, setDescriptionCollapse ] = useState(true);

	const showMore = () => {
		setDescriptionCollapse(true);
	};

	const showLess = () => {
		setDescriptionCollapse(false);
	};

    return (
        <div>
            <div className="single-doctor p-7">

			{!availabledoctor.image ? (
				<img className="doctor-image" src={img} alt="doctor" />
			) : (
				<img style={{ height: '200px' }} src={`data:image/png;base64,${availabledoctor.image.img}`} alt="doctor" />
			)}
			
			<div className="doctor-description">
				<p className="doctor-category">{categorey}</p>
				<p className="doctor-category mb-2"> <span className='font-bold text-2xl text-accent '>visit fee ৳</span>{price}</p>
				<h4 className="doctor-name">{name}</h4>

				<span className="doctor-education">{ descriptionCollapse ? education.substr(0, 80) : education  }</span>

			 {
                education.length > 80 ? descriptionCollapse ? (
					<span onClick={showLess} className="collapse-btn font-bold text-primary  ">
						see more
					</span>
				) : (
					<span onClick={showMore} className="collapse-btn">
						See lesse
					</span>
				) : (
					<span> </span>
				)

             } 
                
				<h6 className="mt-4">{designation}</h6>
				<h6 className="department">{department}</h6>
				<h6 className="hospital">{hospital}</h6>
				<h6  className={slots.length > 1 ? "text-primary font-bold text-1xl mt-3" : "text-red-600 font-bold text-1xl mt-3 "} > { slots.length > 0 ? slots[0] : "No slots Available" } </h6>
				<h6  className={slots.length > 1 ? "text-secondary font-bold text-1xl " : "text-red-600 font-bold text-1xl "  } > {slots.length} {slots.length > 1 ? "spaces" : "space" } Available </h6>
				<div className="text-center">	

					<label for="bookingmodal" className="text-1xl mt-4 mx-5 btn btn-primary bg-gradient-to-r from-primary to-accent text-white font-bold" 
					onClick={()=> modals(availabledoctor) } disabled={slots.length === 0 } 
					> <span className='text-[20px] text-white mr-2'> <AiFillCalendar></AiFillCalendar> </span> 
			      appoinment </label>

				</div>
			</div>
		</div>
        </div>
    );
};

export default Availableappoinment;