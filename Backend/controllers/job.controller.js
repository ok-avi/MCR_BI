const Job = require("../models/Jobs.model.js");

async function readJobs(req, res) {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.json(500).json({ error: "Failed to get the jobs" });
  }
}

async function postJob(req, res) {
  try {
    const job =  new Job(req.body);
    const savedJob = await job.save()
    if (job) {
      res.status(201).json({ message: "Job Created",job:savedJob });
    }
  } catch (error) {
    res.json(500).json({ error: "Failed to post the jobs" });
  }
}

async function deleteJob(req, res) {
  try {
    const deleteJob = await Job.findByIdAndDelete(req.params.id, {
      new: true,
    });
    if (!deleteJob) {
      return res
        .status(400)
        .json({ error: `Job with ID '${req.params.id}' not found.` });
    }
    res.status(200).json({ message: "Job deleted successfully." });
  } catch (error) {
    res.json(500).json({ error: "Error while deleting post" });
  }
}

module.exports = { readJobs, postJob, deleteJob };
