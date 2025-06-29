const mongoose = require("mongoose")
require("dotenv").config()

const mongoURI = process.env.MONGODB
const PORT = process.env.PORT

const dbInitialization = ()=>{
    mongoose.connect(mongoURI)
    .then(()=>console.log(`Database connected successfully`))
    .catch(()=>console.log(`Error while connecting with the database`))
}

module.exports=dbInitialization