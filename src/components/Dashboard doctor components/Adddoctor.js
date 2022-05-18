import { async } from '@firebase/util';
import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';



const Adddoctor = () => {

    //    rect form
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    // bbimgagebbbbb key
    const imagekey = '3362cfddeacc2a6837eed7c9e23636a9'

    // on submit handel
    const onSubmit = async data => {
        console.log(data, "aaa");
        const img = data.image[0]
        const doctorsdetails = {
            name: data.name,
            education: data.education,
            designation: data.designation,
            department: data.department,
            hospital: data.hospital,
            categorey: data.categorey,
            img: ""
        }
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imagekey}`
        fetch(url, {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    const img = data.data.url;
                    doctorsdetails.img = img
                    console.log(doctorsdetails.name, doctorsdetails, 'doctors detilas');
                    fetch("http://localhost:8000/doctors", {
                        method: 'POST', // or 'PUT'
                        headers: {                    
                            'Content-Type': 'application/json' ,
                            'authorization' : `Bearer ${localStorage.getItem("accesstoken")}`              
                        },
                        body: JSON.stringify(doctorsdetails),
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                toast.success('successfully adedded')
                                reset();
                            }
                            else {
                                toast.error("sorry doctors add failed")
                            }
                            console.log(data, "get from here")
                        })
                }

            })

    };



    return (
        <div className='w-[100%]' >
            <div className='flex mx-16 align-center mt-20'>
                <div className="card  bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-center mb-4 text-primary font-bold text-2xl">Doctor's form</h2>

                        {/* doctor add with  form */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* image taking */}
                            <span className='mb-4 mt-3'>Upload your Image</span>
                            <div className='mt-2 mx-auto'>
                                <input
                                    placeholder='upload you image'
                                    type="file"
                                    className="input-info "
                                    {...register("image", {
                                        required: {
                                            value: true,
                                            message: "image required"
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.image?.type === 'required' && <span className="label-text-alt text-[red] "> {errors.image.message} </span>}
                                </label>
                            </div>
                            {/* daysi ui */}
                            <div className='flex flex-col gap-4 lg:flex-row'>
                                {/* start name input here */}
                                <div className="form-control w-full max-w-xs">
                                    <span className="label-text mb-2">name</span>
                                    <input
                                        type="text"
                                        placeholder="Type your name"
                                        className="input input-bordered w-full max-w-xs input-info "
                                        {...register("name", {
                                            required: {
                                                value: true,
                                                message: "Name required"
                                            },

                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-[red] "> {errors.name.message} </span>}
                                    </label>
                                </div>
                                {/* name input end here */}
                                {/* categorey start here */}
                                <div className="form-control w-full max-w-xs">
                                    <span className="label-text mb-2">categorey</span>
                                    <input
                                        type="text"
                                        placeholder="Type your categorey"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        {...register("categorey", {
                                            required: {
                                                value: true,
                                                message: "categorey required"
                                            },

                                        })}
                                    />
                                    <label className="label">
                                        {errors.categorey?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.categorey.message} </span>}
                                    </label>
                                </div>
                                {/* name categorey end here */}
                            </div>

                            {/*  */}

                            {/*  education start*/}

                            <div className="form-control ">
                                <span className="label-text mb-2">education</span>
                                <textarea
                                    cols="80" rows="20"
                                    type="text"
                                    placeholder="Type your education"
                                    className="input input-bordered "
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: "education required"
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.education.message} </span>}
                                </label>
                            </div>

                            {/* eduction end here */}
                            {/* depertment */}

                            <div className="form-control">
                                <span className="label-text mb-2">department</span>
                                <input
                                    type="text"
                                    placeholder="Type your department"
                                    className="input input-bordered input-primary  "
                                    {...register("department", {
                                        required: {
                                            value: true,
                                            message: "department required"
                                        },

                                    })}
                                />
                                <label className="label">
                                    {errors.department?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.department.message} </span>}
                                </label>
                            </div>
                            {/* end here */}

                            <div className='flex flex-col gap-4  lg:flex-row'>
                                {/* designation start */}
                                <div className="form-control w-full max-w-xs">
                                    <span className="label-text mb-2">designation</span>
                                    <input
                                        type="text"
                                        placeholder="Type your designation"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        {...register("designation", {
                                            required: {
                                                value: true,
                                                message: "designation required"
                                            },

                                        })}
                                    />
                                    <label className="label">
                                        {errors.designation?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.designation.message} </span>}
                                    </label>
                                </div>
                                {/* end here */}
                                {/* hospital start here */}
                                <div className="form-control w-full max-w-xs">
                                    <span className="label-text mb-2">hospital</span>
                                    <input
                                        type="text"
                                        placeholder="Type your hospital"
                                        className="input input-bordered input-primary w-full max-w-xs"
                                        {...register("hospital", {
                                            required: {
                                                value: true,
                                                message: "hospitalrequired"
                                            },

                                        })}
                                    />
                                    <label className="label">
                                        {errors.hospital?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.hospital.message} </span>}
                                    </label>
                                </div>
                            </div>

                            {/* daysiui end here */}

                            <input className='bg-accent text-white font-bold w-full p-3 rounded-lg shadow-lg mt-3' type="submit" value="Submit" />

                        </form>

                        {/*form end here */}

                        {/* sign in navigate */}



                        {/* <div className='text-secondary fon-bold'>
                           <p onClick={()=> forget ( {...register("email")})}> Foreget password?</p>
                       </div> */}


                        {/* sign in with google */}
                        {/* <div className="card-actions justify-end">
                            <button  onClick={() => signInWithGoogle()} className="btn btn-accent text-white font-bold w-full"> Create with Google </button>
                        </div> */}
                        {/* sign with google end here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adddoctor;