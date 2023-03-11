import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/Topnavbar.css";

const Topnavbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary-800 navbar-light  ">
        <div className="container-fluid">
          <a href="/" className="navbar-brand" >
            <img 
              src="https://www.hyperlogs.com/wp-content/uploads/2017/11/logo-light.png"
              width="93"
              height="22"
              alt="HyperLogs"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav ">
              <li className="nav-item " >
                <a href="/" className="nav-link" >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link to="/projects" className="nav-link" >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/customers" className="nav-link" >
                  Customers
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Topnavbar;