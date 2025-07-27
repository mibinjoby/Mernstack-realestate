import User from "../Models/User.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/Error.js"

export const signup = async (req, res , next) =>{
    
   const {username,email,password} =req.body

   const hashedpassword = bcryptjs.hashSync(password,10 )
   const newUser = new User ({username,email,password:hashedpassword})
   try {
     await newUser.save()
     res.status(201).json ('✅ USER CREATED SUCCESSFULLY' )  
    
   } catch (error) {
    next (error)
    
   }
  };
  
