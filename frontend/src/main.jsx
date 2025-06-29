import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import JobPosting from "./pages/JobPostings.jsx"
import Postjob from "./pages/Postjob.jsx"
import JobDetails from "./pages/JobDetails.jsx"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import {createBrowserRouter,RouterProvider} from "react-router-dom"


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"",
        element: <JobPosting />
      },
      {
        path:"post-job",
        element: <Postjob />
      },
      {
        path:"job/:id",
        element:<JobDetails />
      },
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
