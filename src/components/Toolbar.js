import React from "react";
import { NavLink, Link } from "react-router-dom";
import ToggleButton from "./ToggleButton";
import lg from "../assets/images/techno-indiauniversity-logo-black.png";

const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar_navigation">
      <div>
        <ToggleButton click={props.sideDrawerToggler} />
      </div>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <img src={lg} className="logo" alt="Techno India University Logo"/>
      </Link>
      <div className="spacer" />
      <div className="nav-elements">
        <ul>
          <li>
            <NavLink to="/about-us" exact className="activeclass">
              About Us
            </NavLink>
          </li>
          <li className="dropdownmenu">
            <button className="dropbtn">
              <span>Academics </span>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <NavLink to="/courses" exact className="activeclass">
                Courses
              </NavLink>
              <NavLink to="/demographics" exact className="activeclass">
                Demographics
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/our-recruiters" exact className="activeclass">
              Our Recruiters
            </NavLink>
          </li>
          <li className="dropdownmenu">
            <button className="dropbtn">
              <span>Statistics </span>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <NavLink to="/placement-stats-2022" exact className="activeclass">
                Placement Stats 2022
              </NavLink>
              <NavLink to="/placement-stats-2021" exact className="activeclass">
                Placement Stats 2021
              </NavLink>
              <NavLink to="/placement-stats-2020" exact className="activeclass">
                Placement Stats 2020
              </NavLink>
              <NavLink to="/placement-stats-2019" exact className="activeclass">
                Placement Stats 2019
              </NavLink>
            </div>
          </li>
          <li>
            <NavLink to="/Jobnotification" exact className="activeclass">
              Job Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/procedure-and-policies" exact className="activeclass">
              Procedure
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact-us" exact className="activeclass">
              Contact Us
            </NavLink>
          </li>
          <li className="dropdownmenu">
            <button className="dropbtn">
              <span>Login </span>
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <Link to="/tpo-login" className="activeclass">
                TPO
              </Link>
              <Link to="/student-login" className="activeclass">
                Student
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Toolbar;
