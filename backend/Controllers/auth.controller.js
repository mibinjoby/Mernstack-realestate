import User from "../Models/User.model.js"
import bcryptjs from "bcryptjs"

export const signup = async (req, res) =>{
    
   const {username,email,password} =req.body

   const hashedpassword = bcryptjs.hashSync(password,10 )
   const newUser = new User ({username,email,password:hashedpassword})
   try {
     await newUser.save()
     res.status(201).json ('✅ USER CREATED SUCCESSFULLY' )  
    
   } catch (error) {
    res.status(500).json(error.message);
    
   }
  
}