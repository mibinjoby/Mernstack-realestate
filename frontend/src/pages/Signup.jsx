
import { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'


function Signup() {
  const [formdata, SetFormdata] =useState({})
  const [error,setError] =useState(null)
   const [loading,setLoading] =useState(false)
   const navigate = useNavigate()
  const  handleChange = (e) =>{
    SetFormdata({
      ...formdata,
      [e.target.id]:e.target.value,
    })
  }

  const handlesubmit = async (e) =>{
    e.preventDefault ();
    try {
       setLoading(true)
    const res = await fetch ('/api/auth/signup',
     {
      method:'POST',
      headers:{
      'Content-Type':'application/json'
      },
       body:JSON.stringify(formdata),
   
    })
    const data = await res.json();
      
      if(data.success === false){
        setError(data.message)
        setLoading(false)
        return; 
      }
      setLoading(false)
      setError(null)
      navigate('/Signin')
      
    } catch (error) {
      setLoading(false)
      setError(error.message)      
    }
   
  }
  return (
    <div className='p-3  max-w-lg mx-auto'>
      
     <h1 className='text-3xl text-center font-semibold my-7'>Sign up</h1>

     <form  onSubmit= {handlesubmit} className='flex flex-col gap-4'>
      <input className='border p-3 rounded-lg' type="text" placeholder='Name'  id='username'onChange={handleChange} />

      <input className='border p-3 rounded-lg' type="text" placeholder='Email'  id='email'onChange={handleChange} />
      
     <input className='border p-3 rounded-lg' type="password" placeholder='Password'  id='password'onChange={handleChange} />

     <button  disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg  uppercase hover:opacity-95 disabled:opacity-80' > {loading ? 'Loading...': 'Sign up'}</button>
     </form>
     <div className='flex gap-2 mt-5'>
      <p>Have an account?</p>
      <Link to={"/signin"}> <span className='text-blue-600'>Sign in</span></Link>
     </div>
    {error && <p className='text-red-500 mt-5'>{error}</p>}

    </div>
  )
}

export default Signup