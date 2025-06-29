const express = require("express")
const router = express.Router()
const {readJobs,postJob,deleteJob} = require("../controllers/job.controller.js")

router.get("/v1/jobs",readJobs)
router.post("/v1/jobs",postJob)
router.delete("/v1/job/:id",deleteJob)

module.exports=router