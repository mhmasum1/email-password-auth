import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Register = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('')
    const handleform = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)

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
                                <input type="password" name='password' className="input" placeholder="Password" />
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