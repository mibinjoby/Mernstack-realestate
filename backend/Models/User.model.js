    import mongoose from 'mongoose'

    const userSchema = new mongoose.Schema ({
     username:{
            type: String,
            required: true,
            unique: true,
        },
         email:{
            type:String,
            required: true,
            unique: true,
        },
         password:{
            type: String,
            required: true,
            
        },
        avatar:{
            type:String,
            default:"data:https://i.pinimg.com/474x/07/c4/72/07c4720d19a9e9edad9d0e939eca304a.jpg" }
    } ,
    {timestaps: true}
)

    const User = mongoose.model('User', userSchema);
   
export default User;