import React, { useEffect } from 'react';
import Nav from '../../sharedcomponents/Nav bar/Nav';
import { useForm } from "react-hook-form";
import auth from '../../Firebasekey/Firebasekey';
import { useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../components/Loading/Loader';
import Token from '../../components/Token/Token';


const Signin = () => {
    // react form
    const { register, formState: { errors }, handleSubmit } = useForm();


    // sign up with google
    const [signInWithGoogle, googleuser, goleloading, goerror] = useSignInWithGoogle(auth);


    // sing up with email password
    const [
        createUserWithEmailAndPassword,
        suser,
        loading,
        serror,
    ] = useCreateUserWithEmailAndPassword(auth);


    // user Update
    const [updateProfile, userpdating, usererror] = useUpdateProfile(auth);



    // sign  up handel button
    const onSubmit = async (data) => {
        if (data.password !== data.confirmpassword) {
            return alert('password mitchmatched')
        }
        else {
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName: data.name, last: data.lastname })
        }
    }

    // token uses
    const [token] = Token(suser || googleuser)

    // Navigate replace handel
    const navigate = useNavigate()

    if (token) {
        navigate('/');
    }


    // handelerro
    let signuperror;
    if (serror || goerror || usererror) {
        signuperror = <p> {serror?.message || goerror?.message || usererror?.message} </p>
    }








    return (
        <div>

            <Nav></Nav>

            {loading || goleloading ? <Loader> </Loader> :

                <div>
                    <div className='flex justify-center align-center mt-20'>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="text-center text-primary font-bold text-2xl">Sign in</h2>
                                {/* user sigin with email pass name form */}
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* daysi ui start here*/}
                                    {/* sign user Name taking unput */}
                                    <div className="form-control w-full max-w-xs">
                                        <span className="label-text mb-2">Name</span>
                                        <input
                                            type="text"
                                            placeholder="Type your First"
                                            className="input input-bordered w-full max-w-xs input-info"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: "please input your fast name"
                                                },
                                                minLength: {
                                                    value: 2,
                                                    message: 'please input your full name'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.name?.type === 'minLength' && <span className="label-text-alt text-[red] "> {errors.name.message} </span>}
                                            {errors.name?.type === 'required' && <span className="label-text-alt text-[red] "> {errors.name.message} </span>}
                                        </label>
                                    </div>
                                    {/* fitst name taking done */}
                                    {/* last name taking */}
                                    <div className="form-control w-full max-w-xs">
                                        <span className="label-text mb-2">Last Name</span>
                                        <input
                                            type="text"
                                            placeholder="Type your last Name"
                                            className="input input-bordered w-full max-w-xs input-info"
                                            {...register("lastname", {
                                                required: {
                                                    value: true,
                                                    message: "please input your last name"
                                                },
                                                minLength: {
                                                    value: 2,
                                                    message: 'please input your last name'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.lastname?.type === 'minLength' && <span className="label-text-alt text-[red] "> {errors.lastname.message} </span>}
                                            {errors.lastname?.type === 'required' && <span className="label-text-alt text-[red] "> {errors.lastname.message} </span>}
                                        </label>
                                    </div>
                                    {/* name taking end here */}
                                    {/* email sign in input start */}
                                    <div className="form-control w-full max-w-xs">
                                        <span className="label-text mb-2">Email</span>
                                        <input
                                            type="text"
                                            placeholder="Type your Email"
                                            className="input input-bordered w-full max-w-xs input-info"
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: "Email required"
                                                },
                                                pattern: {
                                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                    message: 'invalid Email'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-[red] "> {errors.email.message} </span>}
                                            {errors.email?.type === 'required' && <span className="label-text-alt text-[red] "> {errors.email.message} </span>}
                                        </label>
                                    </div>
                                    {/*--------------- 
                            email signinput end here 
                            ----------------*/}
                                    {/* sign in password start */}
                                    <div className="form-control w-full max-w-xs">
                                        <span className="label-text mb-2">Password</span>
                                        <input
                                            type="password"
                                            placeholder="Type your Password"
                                            className="input input-bordered input-primary w-full max-w-xs"
                                            {...register("categorey", {
                                                required: {
                                                    value: true,
                                                    message: "Passwod required"
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                    message: 'eight characters one uppercase  lowercase letter one number one special character'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.password?.type === 'pattern' && <span className="label-text-alt text-red-600  "> {errors.password.message} </span>}
                                            {errors.password?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.password.message} </span>}
                                        </label>
                                    </div>
                                    {/* password taking end here */}
                                    {/* confirm password strat here */}
                                    <div className="form-control w-full max-w-xs">
                                        <span className="label-text mb-2">confirm Password</span>
                                        <input
                                            type="password"
                                            placeholder="Type your Password"
                                            className="input input-bordered input-primary w-full max-w-xs"
                                            {...register("confirmpassword", {
                                                required: {
                                                    value: true,
                                                    message: "Passwod required"
                                                },
                                                pattern: {
                                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                                                    message: 'eight characters one uppercase  lowercase letter one number one special character'
                                                }
                                            })}
                                        />
                                        <label className="label">
                                            {errors.confirmpassword?.type === 'pattern' && <span className="label-text-alt text-red-600  "> {errors.confirmpassword.message} </span>}
                                            {errors.confirmpassword?.type === 'required' && <span className="label-text-alt text-[#f00] "> {errors.confirmpassword.message} </span>}
                                        </label>
                                    </div>
                                    {/* confirm password end here */}
                                    {/* error */}
                                    <p> {signuperror} </p>
                                    {/* error end here */}
                                    {/* daysiui end here */}
                                    <input className='bg-accent text-white font-bold w-full p-3 rounded-lg shadow-lg mt-3' type="submit" value="signUp" />
                                </form>
                                {/*form end here */}
                                {/* sign in navigate */}
                                <div className='flex'>
                                    <p className='text-accent' >Already have account?</p>
                                    <NavLink className='text-primary font-semibold' to='/login'> Login account </NavLink>
                                </div>
                                <div className="divider">OR</div>

                                {/* sign in with google */}
                                <div className="card-actions justify-end">
                                    <button onClick={() => signInWithGoogle()} className="btn btn-accent text-white font-bold w-full"> Signup with google </button>
                                </div>
                                {/* sign with google end here */}
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Signin;