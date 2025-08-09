import mongoose from "mongoose";


const listingschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
         address:{
            type:String,
            required:true,
        },
        regularprice:{
            type:Number,
            required:true,
        },
        disconutedprice:{
            type:Number,
            required:true,
        },
         bathroom:{
            type:Number,
            required:true,
        },
         bedroom:{
            type:Number,
            required:true,
        },
        furnished:{
            type:Boolean,
            required:true,
        },
         parking:{
            type:Boolean,
            required:true,
        },
         type:{
            type:String,
            required:true,
        },
         offer:{
            type:Boolean,
            required:true,
        },
        Imageurls:{
            type:Array,
            required:true,
        },
        userref:{
            type:String,
            required:true


    }   
 },{ timestamps:true }
)

const Listing =mongoose.model("Listing",listingschema)

export default Listing;