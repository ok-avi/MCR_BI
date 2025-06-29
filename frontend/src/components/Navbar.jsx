import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm bg-primary " data-bs-theme="dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Intern House
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Job Postings
            </Link>
            <Link className="nav-link" to="/post-job">
              Post a Job
            </Link>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
