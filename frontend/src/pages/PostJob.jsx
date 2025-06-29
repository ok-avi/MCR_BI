import { useEffect, useState } from "react";
import useFetch from "../useFetch";
import { ToastContainer, toast } from 'react-toastify';

const PostJob = () => {
  const [jobForm, setJobForm] = useState({
    job: undefined,
    company: undefined,
    location: undefined,
    salary: undefined,
    jobType: undefined,
    description: undefined,
    qualification: [],
  });

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const fetchData = (jobForm) => {
    console.log("fetch data")
    const url = "https://mcr-bi.vercel.app/api/v1/jobs";
    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        job:jobForm.job,
        company:jobForm.company,
        location:jobForm.location,
        salary:jobForm.salary,
        jobType:jobForm.jobType,
        description:jobForm.description,
        qualifications:jobForm.qualification
      })
    };
    setLoading(true);
    fetch(url, option)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        toast("Job posted successfully")
      })
      .catch((error) => setError(error));
  };
  
  
  function formHandler(e) {
    e.preventDefault();
    const {
      job,
      company,
      location,
      salary,
      jobType,
      description,
      qualification,
    } = jobForm;
    if (
      job &&
      company &&
      location &&
      salary &&
      jobType &&
      description &&
      qualification
    ) {
      console.log( jobForm,"job form");
      fetchData(jobForm);
    }
    // console.log(data, loading, error);
  }
  // console.log(loading);
  return (
    <div className="container-fluid py-2">
      <ToastContainer />
      <h2>Post a Job  </h2>
      <form onSubmit={formHandler} className="py-3">
        <div className="row mb-3">
          <div className="col ">
            <label className="form-label fw-medium " htmlFor="title">
              Job Title:
            </label>
            <input
              id="title"
              type="text"
              onChange={(e) =>
                setJobForm((prev) => ({ ...prev, job: e.target.value }))
              }
              className=" form-control"
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col ">
            <label className="form-label fw-medium" htmlFor="company">
              Company Name:
            </label>
            <input
              id="company"
              type="text"
              className=" form-control"
              onChange={(e) =>
                setJobForm((prev) => ({ ...prev, company: e.target.value }))
              }
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col ">
            <label className="form-label fw-medium" htmlFor="location">
              Location:
            </label>
            <input
              id="location"
              type="text"
              className=" form-control"
              onChange={(e) =>
                setJobForm((prev) => ({ ...prev, location: e.target.value }))
              }
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col ">
            <label className="form-label fw-medium" htmlFor="salary">
              Salary:
            </label>
            <input
              id="salary"
              type="number"
              className=" form-control"
              min={0}
              onChange={(e) =>
                setJobForm((prev) => ({
                  ...prev,
                  salary: Number(e.target.value),
                }))
              }
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col ">
            <label className="form-label fw-medium" htmlFor="jobType">
              Job Type:
            </label>
            <select
              id="jobType"
              className="form-control"
              onChange={(e) =>
                setJobForm((prev) => ({ ...prev, jobType: e.target.value }))
              }
              required
            >
              <option value="" hidden></option>
              <option value="Full-time (On-site)">Full-time (On-site)</option>
              <option value="Part-time (On-site)">Part-time (On-site)</option>
              <option value="Full-time (Remote)">Full-time (Remote)</option>
              <option value="Part-time (Remote)">Part-time (Remote)</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col ">
            <label className="form-label fw-medium" htmlFor="description">
              Job Description:
            </label>
            <textarea
              id="description"
              type="text"
              className=" form-control"
              onChange={(e) =>
                setJobForm((prev) => ({ ...prev, description: e.target.value }))
              }
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col ">
            <label className="form-label fw-medium" htmlFor="qualification">
              Job Qualification:
            </label>
            <textarea
              id="qualification"
              type="text"
              className=" form-control"
              onChange={(e) =>
                setJobForm((prev) => ({
                  ...prev,
                  qualification: e.target.value.split("."),
                }))
              }
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;
