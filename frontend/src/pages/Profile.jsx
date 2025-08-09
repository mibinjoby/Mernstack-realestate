import { useSelector } from "react-redux"
import { useRef, useState } from "react"
import { updateUserStart  , updateUserSuccess , updateUserFailure ,deleteUserFailure,   deleteUserSuccess ,deleteUserStart } from '../Redux/user/userslice.js'
import { useDispatch } from "react-redux"
import { deleteUser } from "../../../backend/Controllers/User.controller.js"



function Profile() {  
  const fileRef =useRef(null)
  const {currentUser , loading , error} = useSelector((state) => state.user)
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const [updateSuccess , setUpdateSuccess] = useState(false)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data.message));
        return;
      }

      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart())

      const res =await fetch (`/api/user/delete/${currentUser._id}`,{
        method: 'DELETE',
      })
      const data = await res.json()
      if (data.success === false){
        dispatch(deleteUserFailure(data.message))
        return;
      }
      dispatch(deleteUserSuccess(data))
    } catch (error) {
      dispatch(deleteUserFailure(error.message))
    }
  }

  
  return (
    <div className="p-3 max-w-lg mx-auto">


     <h1  className=' text-3xl font-semibold text-center y-7 '>profile</h1>


      <form onSubmit={handleSubmit}   className=" flex flex-col gap-4 " >
        <input type="file" ref={fileRef} hidden accept="image/* "/>

        <img  onClick = {() => fileRef.current.click()} className="rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2"
        src={FormData?.avatar || currentUser.avatar}
        alt="profile"/>
     
         <input type="text" id="username" placeholder='Name' onChange={handleChange}   defaultValue={currentUser.username}  className="border p-3 rounded-lg"/>
         <input type="email" id="email" placeholder='email' onChange={handleChange} defaultValue={currentUser.email} className="border p-3 rounded-lg"/>
         <input type="password" id="password" placeholder='password' onChange={handleChange} defaultValue={currentUser.password} className="border p-3 rounded-lg"/>



        <button disabled={loading}  className="bg-slate-700 text-white rounded-lg p-3 uppercase  hover:opacity-95 disabled:opacity-95">{loading ? 'Loadng..' :'update'}</button>
      </form>


      <div className="flex justify-between mt-5 ">
        <span onClick={handleDeleteUser} className="text-red-600 font-bold">
          Delete account
        </span>
         <span className="text-red-600 font-bold">
          Sign out
        </span>
      </div>
      <p className="text-red-700">{error ? error : ''} </p>
      <p className="text-green-700 mt-5"> {updateSuccess ? '✅ User is updated successfully!' : ''}  </p>
 
    </div>
  )
}

export default Profile 
