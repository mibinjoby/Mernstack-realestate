    import mongoose from 'mongoose'

    const userSchema = new mongoose.Schema ({
     username:{
            type: string,
            required: true,
            unique: true,
        },
         email:{
            type: string,
            required: true,
            unique: true,
        },
         password:{
            type: string,
            required: true,
            
        },
    }) ({timetaps: true});

    const user = mongoose.model ('User'.userSchema)
   
export default user;