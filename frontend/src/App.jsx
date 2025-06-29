import { Outlet } from "react-router-dom"
import job from "../data.json"
import Navbar from "./components/Navbar"

const App = () => {
  // console.log(job)
  return (
    <>
      <nav className="bg-primary px-lg-5">

      <Navbar />
      </nav>
      <main className="px-lg-5 ">
      <Outlet />

      </main>
    </>
  )
}

export default App