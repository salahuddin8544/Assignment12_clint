import React, { useContext,useState } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hook/useToken/useToken';
const SignUp = () => {
  const [errror, setEerror] = useState('')
  const navigate = useNavigate();
  const [createdUserEmail,setCreatedUserEmail] = useState('')
    const [token] = useToken(createdUserEmail)

    if(token){
        navigate('/')
    }
    const {createUser,updateUser} = useContext(AuthContext)
    const handleSignUp = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
       const email = form.email.value;
        const role = form.role.value;
        const password = form.password.value;
      const users ={
        name,
        email,
        role

      }

        createUser(email,password)
        .then(result=>{
          setCreatedUserEmail(result)
          const user = result.user;
          console.log(user);
          const userInfo={
            displayName: form.name.value
        }
        console.log(userInfo);
        updateUser(userInfo)
        .then(()=>{
          
        
          
        })
        .catch(err=>console.log(err))


        fetch('https://assignment12-server-beta.vercel.app/users', {
        method:'POST',
        headers:{
          'content-type': 'application/json'
        },
        body:JSON.stringify(users)
      })
      .then(data=>{
          console.log(data)
             setCreatedUserEmail(email)
          if(data.acknowledged){
         
           
        }
          
      })
        
   })
        .catch(err=>{
          console.log(err);
          setEerror(err.message)
        })
    }
    return (
        <div className="hero w-full my-4">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form  onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold">SignUp</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name='name' placeholder="Your name" className="input input-bordered" />
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
              <div className="form-control">
              <label > Select account type buyer or seller </label>
              <select   className="mt-3 select select-primary w-full max-w-xs" name='role' >
              <option value="buyer">Buyer</option>
              <option value="seller">Seller</option>
              
            </select>{
              
            }
            {
              <p>{errror}</p>
            }
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