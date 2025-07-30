import User from "../Models/User.model.js"
import bcryptjs from "bcryptjs"
import { errorHandler } from "../utils/Error.js"
import jwt  from "jsonwebtoken";


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


  export const signin = async (req, res, next) =>{

    const {email, password} = req.body;

    try {
      const validUser = await User.findOne({email})

      if(!validUser)return next(errorHandler(404,'❌ USER NOT FOUND'))  

        const validpassword = bcryptjs.compareSync(password,validUser.password)

      if (!validpassword) return next (errorHandler(401,'wrong credentials ❌ '))

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const {password: pass, ... rest} = validUser._doc
        res.cookie('access_token',token,{httpOnly: true }).status(200).json(validUser)
      
    } catch (error) {
      next(error)
      
    }
  }

  export const google = async (req,res,next)=>{

    try {
      const user = await User.findOne ({email: req.body.email})
        if (user){
          const token =jwt.sign({id: user._id},process.env.JWT_SECRET
         )
       const {password: pass, ...rest} =user._doc
             res
             .cookie('access_token',token, {httpOnly:true} )
             .status(200)
             .json(rest);


        }else {

          const genratePassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)

          const hashedpassword =bcryptjs.hashSync(genratePassword,10);

          const newUser = new user({username: req.body.name.split(" ").join("").toLowerCase() + 
            Math.random().toString(36).slice(-4), email:req.body.email, password:hashedpassword, avatar:req.body.photo})

            await newUser.save()

             const token =jwt.sign({id: user._id},process.env.JWT_SECRET);

             const {password: pass, ...rest} =newUser._doc;
             
              res
             .cookie('access_token',token, {httpOnly:true} )
             .status(200)
             .json(rest);

 
        }
      
      
    } catch (error) {
      next(error)
    }
  }
  
