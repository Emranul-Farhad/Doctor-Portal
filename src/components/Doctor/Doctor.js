
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ doctor}) => {
	const { img, category, name, education, designation, department, hospital } = doctor;
	const [ descriptionCollapse, setDescriptionCollapse ] = useState(true);

	const showMore = () => {
		setDescriptionCollapse(true);
	};

	const showLess = () => {
		setDescriptionCollapse(false);
	};

	return (
		<div className="single-doctor p-7">

			{!doctor.image ? (
				<img className="doctor-image" src={img} alt="doctor" />
			) : (
				<img style={{ height: '200px' }} src={`data:image/png;base64,${doctor.image.img}`} alt="doctor" />
			)}
			
			<div className="doctor-description">
				<p className="doctor-category">{category}</p>
				<h4 className="doctor-name">{name}</h4>

				<span className="doctor-education">{descriptionCollapse ?  education.slice(0, 80) : education  }</span>

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
				<div className="text-center">
					<Link to="/appointment">
						<button className="btn btn-primary text-white font-bold text-1xl button-style mt-5">
							{/* <FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book Appointment */}
                            appoinment Now
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Doctor;