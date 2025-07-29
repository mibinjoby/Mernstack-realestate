
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess,signInFailure } from'../Redux/user/userslice.js';


function Signin() {
  const [formdata, SetFormdata] =useState({})
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const  handleChange = (e) =>{
    SetFormdata({
      ...formdata,
      [e.target.id]:e.target.value,
    })
  }

  const handlesubmit = async (e) =>{
    e.preventDefault ();
    try {
       dispatch(signInStart());
    const res = await fetch ('/api/auth/signin',
     {
      method:'POST',
      headers:{
      'Content-Type':'application/json'
      },
       body:JSON.stringify(formdata),
   
    })
    const data = await res.json();
      
      if(data.success === false){
        dispatch(signInFailure (data.message))
        return; 
      }
     dispatch(signInSuccess(data))
      navigate('/Home')
      
    } catch (error) {
     dispatch(signInFailure(error.message))
    }
   
  }
  return (
    <div className='p-3  max-w-lg mx-auto'>
      
     <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>

     <form  onSubmit= {handlesubmit} className='flex flex-col gap-4'>


      <input className='border p-3 rounded-lg' type="text" placeholder='Email'  id='email'onChange={handleChange} />
      
     <input className='border p-3 rounded-lg' type="password" placeholder='Password'  id='password'onChange={handleChange} />

     <button  disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg  uppercase hover:opacity-95 disabled:opacity-80' > {loading ? 'Loading...': 'Sign in'}</button>
     </form>
     <div className='flex gap-2 mt-5'>
      <p>Don't Have an account?</p>
      <Link to={"/signup"}> <span className='text-blue-600'>Sign up</span></Link>
     </div>
    {error && <p className='text-red-500 mt-5'>{error}</p>}

    </div>
  )
}

export default Signin