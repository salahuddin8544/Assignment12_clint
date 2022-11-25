import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link } from 'react-router-dom';
const SignUp = () => {
    const {createUer} = useContext(AuthContext)
    const handleSignUp = event=>{
        event.preventDefault();
        const form = event.target;
      const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        createUer(email,password)
        .then(result=>{
          const user = result.user;
          console.log(user);
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className="hero w-full my-4">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold">Register</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className='btn btn-success' value="Submit" />
              </div>
            </form>
            <p className='text-center py-4'>Already have an account? <Link className='text-orange-700' to={'/login'}>Login</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;