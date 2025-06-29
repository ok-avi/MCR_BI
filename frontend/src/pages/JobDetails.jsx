import { useParams } from "react-router-dom"
import jobs from "../../data.json"
import useFetch from "../useFetch"
const JobDetails = () => {
  const {id} = useParams()
  
    const { data, loading, error } = useFetch(
      "https://mcr-bi.vercel.app/api/v1/jobs"
    );
  const matchJob = data?.find(job=>job._id===id)
  // console.log(useParams())
  return (
    <div className="container-fluid py-3">
      
      {error && <p className="fs-5 text-danger fw-medium">Error while fetching job</p>}
      {loading && <p className="fs-5 text-primary fw-medium">Loading...</p>}
      {data&& (<>
      <h2>{matchJob.job}</h2>
      <div className="card">
        <div className="card-body">
          <p><strong >Company Name: </strong>{matchJob.company}</p>
          <p><strong >Location: </strong>{matchJob.location}</p>
          <p><strong >Salary: </strong>{matchJob.salary}</p>
          <p><strong >Job Type: </strong>{matchJob.jobType}</p>
          <p><strong >Description: </strong>{matchJob.description}</p>
          <p><strong >Qualifications: </strong>
          <ol>

          {matchJob.qualifications.map(qualification=><li>{qualification}</li>)}
          </ol>
          </p>
        </div>
      </div>
      
      </>)}
    </div>
  )
}

export default JobDetails