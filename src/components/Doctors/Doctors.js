import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Doctor from '../Doctor/Doctor';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './Doctors.css';



// function start here //
const Doctors = () => {

    const doctors = [
        {
            id: '01',
            img: 'https://i.imgur.com/Al8YdLM.jpg',
            category: 'Medicine, Diabetes, Thyroid & Hormone',
            name: 'Dr. Md. Firoj Hossain',
            education: 'MBBS, FCPS (Medicine), DEM (BIRDEM), MD (Endocrinology), MACE (USA), MACP (USA) ',
            designation: 'Assistant Professor',
            department: 'Department of Endocrinology',
            hospital: 'Mugda Medical College & Hospital'
        },
        {
            id: '02',
            img: 'https://i.imgur.com/eURUI0b.jpg',
            category: 'Diet & Nutrition Consultant',
            name: 'Ms. Jayoti Mukherjee',
            education: 'B.Sc & M.Sc in Nutrition Science (DU), Trained in BIRDEM, 10+ Years Experience in Weight Management',
            designation: 'Senior Nutrition Consultant',
            department: 'Surecell Medical BD',
            hospital: 'Ex- VLCC Healthcare & VIBES Healthcare'
        },
        {
            id: '03',
            img: 'https://i.imgur.com/RlfZMBR.jpg',
            category: 'Medicine & Chest Specialist (Pulmonologist)',
            name: 'Dr. Rajib Kumar Saha',
            education: 'MBBS(Dhaka), MRCP(UK), MCPS(Medicine), MD(Chest), MACP (USA)',
            designation: 'Consultant',
            department: 'Department of Respiratory Medicine',
            hospital: 'ASGAR ALI HOSPITAL'
        },
        {
            id: '04',
            img: 'https://i.imgur.com/n0yum0a.jpg',
            category: 'Neonate & Child Specialist',
            name: 'Dr. Salahuddin Mahmud',
            education: 'Fellow in Pediatric Nutrition, Boston University (USA), MBBS (Dhaka), MD (Pediatrics), Fellow in Pediatric Nutrition, Boston University (USA), MBBS (Dhaka), MD (Pediatrics) & Sanjay Gandhi Postgraduate Institute, Lucknow (India)',
            designation: 'Associate Professor',
            department: 'Department of Pediatric  Gastroenterology ',
            hospital: 'Dhaka Shishu (Children) Hospital'
        },
        {
            id: '05',
            img: 'https://i.imgur.com/VP1xMDg.jpg',
            category: 'Dermatologist (Skin, Allergy, Hair, Sex)',
            name: 'Dr. Humaira Afreen',
            education: 'MBBS (DMC), BCS (Health), FCPS (Dermatology and Venereology)',
            designation: 'Assistant Professor',
            department: 'Skin & VD Department',
            hospital: 'SSMC Mitford Hospital, Dhaka'
        },
        {
            id: '06',
            img: 'https://i.imgur.com/E7VjZxG.jpg',
            category: 'Ears, Nose and Throat (ENT) Specialist',
            name: 'Dr. Rashedul Hasan',
            education: 'MBBS, MSc (London), Specialty: Vertigo, Tinnitus, Hearing loss & ENT disease',
            designation: 'Consultant',
            department: 'Department of Ears, Nose and Throat',
            hospital: 'Prescription Point, Banani '
        },
        {
            id: '07',
            img: 'https://i.imgur.com/KX5Csjv.jpg',
            category: 'Gynaecologist',
            name: 'Dr. Riffat Rahim',
            education: 'MBBS (Dhaka), BCS (Health), DGO, FCPS (Gynae & Obs), MMED (BSMMU), Special Training of Laparoscopic Surgery (Chennai, India)',
            designation: 'Assistant Professor',
            department: 'Department of Gynae & Obs',
            hospital: 'Mugda Medical College, Dhaka'
        },
        {
            id: '08',
            img: 'https://i.imgur.com/a9HMk43.jpg',
            category: 'Neurologist',
            name: 'PROF. DR. Mohd. Mozibor',
            education: 'MBBS, FCPS(Medicine), FRCP(UK), FACP(USA) Advance Training in Neurophysiology (TURKEY)',
            designation: 'Consultant',
            department: 'Neurology Department',
            hospital: 'United Hospital Ltd., Gulshan 2'
        },
        {
            id: '09',
            img: 'https://i.imgur.com/B63wRTP.png',
            category: 'Dentist',
            name: 'Dr. Shahana Dastagir',
            education: 'BDS (Dhaka Dental College), PGT (Netherlands), MPH (USA), MPhil',
            designation: 'Associate Professor',
            department: 'Department of Dentistry',
            hospital: 'BIRDEM Hospital & Ibrahim Medical College'
        },
        {
            id: '10',
            img: 'https://i.imgur.com/X9ehOrA.jpg',
            category: 'Orthopaedic Surgeon',
            name: 'Dr. Asadullah Ripon',
            education: 'MBBS, D. Ortho in Orthopaedic Surgery, Specialised Training in Hand Surgery (India, UK)',
            designation: 'Associate Professor',
            department: 'Department of Orthopedics',
            hospital: 'Enam Medical College and Hospital'
        },
        {
            id: '11',
            img: 'https://i.imgur.com/n8SzXfM.jpg',
            category: 'Nephrologist',
            name: 'Dr. Shudhanshu Kumar',
            education: 'MBBS, MD (Nephrology), Advance Training in Neurophysiology (India)',
            designation: 'Registrar',
            department: 'Department of Nephrology & Dialysis',
            hospital: 'BIRDEM Hospital & Ibrahim Medical College'
        },
        {
            id: '12',
            img: 'https://i.imgur.com/ZJt3sxW.jpg',
            category: 'General and Colorectal Surgeon',
            name: 'Dr. Nazmul Hoque Masum',
            education: 'MBBS (DMC), FCPS (Surgery) FICS, FACS (USA) Fellow, International Society of University Colon and Rectal Surgeons (FISUCRS) Member, American Society of Colon and Rectal Surgeons(ASCRS) Fellow, Minimal Access Surgery (FMAS), India',
            designation: 'Associate Professor',
            department: 'Department of Surgery',
            hospital: 'Dhaka Medical College & Hospital'
        }
    ];



    return (

        <div className='mt-10' >

           
           <div>
           <h1 className='text-4xl font-bold text-primary text-center mt-20'> Our Dedicated <br/> 
           <div className=' w-[160px] h-1 bg-primary first hidden lg:block '>  </div> 
           <span className="text-secondary docotrtag mx-[37px]"> Doctors 
           <div className="seccond w-[122px] h-1 bg-primary hidden lg:block " > </div> </span> </h1>
           </div>
          
            


            {/* className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-10 rounded-xl mt-16' */}

            <div className='p-10' >

                <Swiper
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
                    spaceBetween={20}
                    slidesPerView={3}
                    centeredslide="true"
                    navigation
                    key={doctors.length}
                    autoplay={true}
                >

                    {
                        doctors.map((doctor, index) => (
                            <SwiperSlide key={index} >
                                <Doctor key={doctor.id} doctor={doctor} ></Doctor>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>





                {/* {
                    doctors.map((doctor, index) => (
                        <Doctor key={doctor.id} doctor={doctor} ></Doctor>
                    ))
                } */}


            </div>
        </div>
    );
};

export default Doctors;