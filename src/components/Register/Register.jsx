import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { IoEyeOutline } from 'react-icons/io5';
import { FiEyeOff } from 'react-icons/fi';

const Register = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const handleform = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cheackBox = e.target.terms.checked
        console.log(email, password)

        // const passwordPattern = /^.{6,}$/;
        // const casePattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;



        // if (!passwordPattern.test(password)) {
        //     console.log("password did not match")
        //     setError('password must be 6 charecters or longer')
        //     return;
        // }
        // else if (!casePattern.test(password)) {
        //     setError("password must have at least one uppercase and one lower case");
        //     return;
        // }
        const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/;
        if (!passPattern.test(password)) {
            setError('Password must have at least 6 characters, one uppercase, one lowercase, and one special character (!@#$%^&*).')
            return;
        }
        if (!cheackBox) {
            setError("Plase accept our terns and conditions")
            return;
        }

        setError('');
        setSuccess(false);


        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log('after create a user', result.user)
                setSuccess(true);
                e.target.reset();

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)

            })

    }
    const handleShowPassword = e => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleform}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <div className=' relative '>
                                    <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                    <button onClick={handleShowPassword} className="btn btn-xs absolute top-2 right-5">{showPassword ? <FiEyeOff /> : <IoEyeOutline />}</button>
                                </div>
                                <div>
                                    <label className="label">
                                        <input name='terms' type="checkbox" className="checkbox" />
                                        Accept terms and conditions
                                    </label>
                                </div>
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register now</button>
                            </fieldset>
                            {
                                success && <p className='text-green-500'>Account create successfully</p>
                            }
                            {
                                error && <p className='text-red-500'>{error}</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;