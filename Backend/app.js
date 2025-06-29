const express = require("express")
const cors = require("cors")
const app = express()
const router = require("./routes/job.routes.js")

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("working")
})

app.use("/api",router)

module.exports=app