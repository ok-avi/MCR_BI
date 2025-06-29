import { Link } from "react-router-dom";
import jobs from "../../data.json";
import { useState } from "react";
import useFetch from "../useFetch";
import { ToastContainer, toast } from 'react-toastify';

const JobPostings = () => {
  const [jobSearch, setJobSearch] = useState();
  const [jobs,setJobs] = useState([])
  const { data, loading, error } = useFetch(
    "https://mcr-bi.vercel.app/api/v1/jobs"
  );
  // const filterJob = jobSearch
  //   ? data.filter((job) =>
  //       job.job.toLocaleLowerCase().includes(jobSearch.toLocaleLowerCase())
  //     )
  //   : data;

  function deleteJob(id) {
    const url = `https://mcr-bi.vercel.app/v1/job/${id}`
    const option = {
      method:"DELETE"
    }
    fetch(url,option)
    .then(res=>res.json())
    .then(currentData=>{
      const jobsAfterDelete = data.filter(job=>job._id!==id)
      // console.log(jobsAfterDelete,data)
      setJobs(jobsAfterDelete)
      toast("Job Deleted Successfully")
    })
    .catch(err=>console.log(err))
    // console.log(id, "click");
  }
  console.log(data&&data)
  return (
    <div className="container-fluid">
      <div className="row">
        {/* {jobs.length>0&&"length"} */}
        {data&& Array.isArray(data)&&(

        <div className="col col-md-6">
          <input
            type="text"
            placeholder="Search by job title..."
            className="my-3  form-control"
            onChange={(e) => {
              setJobSearch(e.target.value)
              setJobs(data.filter(job=>job.job.toLocaleLowerCase().includes(jobSearch.toLocaleLowerCase())))
            }}
          />
        </div>
        )}
      </div>
      
      {error && <p className="fs-5 text-danger fw-medium">Error while fetching jobs</p>}
      {loading && <p className="fs-5 text-primary fw-medium">Loading...</p>}
      {data && Array.isArray(data) ? (data.length>0 && (
        <>
          <ToastContainer />
          <h2>All Jobs</h2> 
          <div className="row">
            {data &&
              jobSearch===""?(data.map(job=>(

                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <div className="card">
                    <div className="card-body ">
                      <div className="px-3 py-4">
                        <h4>{job.job}</h4>
                        <p>
                          <strong>Company name:</strong> {job.company}
                        </p>
                        <p>
                          <strong>Location:</strong> {job.location}
                        </p>
                        <p>
                          <strong>Job Type:</strong> {job.jobType}
                        </p>
                        <div className="row gx-2">
                          <div className="mb-2 col-md-6 col-sm-12">
                            <Link
                              to={`/job/${job._id}`}
                              className="w-100  btn btn-primary"
                            >
                              See Details
                            </Link>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <button
                              onClick={(e) => deleteJob(job._id)}
                              className="w-100  btn btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))):
              (jobs.length>0?jobs:data).map((job) => (
                <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                  <div className="card">
                    <div className="card-body ">
                      <div className="px-3 py-4">
                        <h4>{job.job}</h4>
                        <p>
                          <strong>Company name:</strong> {job.company}
                        </p>
                        <p>
                          <strong>Location:</strong> {job.location}
                        </p>
                        <p>
                          <strong>Job Type:</strong> {job.jobType}
                        </p>
                        <div className="row gx-2">
                          <div className="mb-2 col-md-6 col-sm-12">
                            <Link
                              to={`/job/${job._id}`}
                              className="w-100  btn btn-primary"
                            >
                              See Details
                            </Link>
                          </div>
                          <div className="col-md-6 col-sm-12">
                            <button
                              onClick={(e) => deleteJob(job._id)}
                              className="w-100  btn btn-danger"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </>
      )):( data&& typeof data ==="object"&&
        <p className="fs-5 text-danger fw-medium">{data.error}</p>
      )}
    </div>
  );
};

export default JobPostings;
