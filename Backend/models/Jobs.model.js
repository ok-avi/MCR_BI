const mongoose = require("mongoose")

const jobSchema =  mongoose.Schema({
    job:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:0,
        required:true
    },
    jobType:{
        type:String,
        enum:["Full-time (On-site)","Part-time (On-site)","Full-time (Remote)","Part-time (Remote)"],
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    qualifications:{
        type:[String],
        required:true
    }
})


const Job = new mongoose.model("Job",jobSchema)

module.exports=Job