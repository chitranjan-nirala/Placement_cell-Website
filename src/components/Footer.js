import React from "react";
import { Link } from "react-router-dom";
import brochurePdf from "../assets/Placement_brochure.pdf";
import sc from "../assets/team22/sc.jpg";
import kg from "../assets/team22/kg.jpeg";

const footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-outer-wrapper">
          <div className="footer-inner-wrapper">
            <div className="footer-col">
              <h2>Contact Us</h2>
              <p>
                Techno india university
                <br />
                2nd Floor EM-4, Sector-V, Salt Lake
                <br />
                Kolkata - 700091
              </p>
              <p>
                <a href="mailto:placement@technoindiaeducation.com">
                placement@technoindiaeducation.com
                </a>
              </p>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/kushal-reddy-3101231b5/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
                <img src={sc} alt={"sudeep"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Dr. Sudeep Chowdhury</p>
                <p className="footer-contact-position">Training & Placement Officer</p>
                <p>
                  <a href="tel:+91-8094123615">+91 90461 76072</a>
                </p>
                <p> 
                  <a href="mailto:placement@technoindiaeducation.com">
                  placement@technoindiaeducation.com
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col-parent">
              <a href="https://www.linkedin.com/in/anu-kumari-401464197/" target="_blank" rel="noopener noreferrer">
              <img src={kg} alt={"kunal"} className="footer-img"/>
              </a>
              <div className="footer-col">
                <p className="footer-contact-name">Kunal Ger</p>
                <p className="footer-contact-position"> Overall Training & Placement Coordinator</p>
                <p>
                  <a href="tel:+91-8094123615">+91 83350 61324</a>
                </p>
                <p> 
                  <a href="mailto:placement@technoindiaeducation.com">
                  placement@technoindiaeducation.com
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-col">
              <h2>Links</h2>

              <p>
                <a
                  href="http://tiutel.org/studentscorner/Login"
                  target="blank"
                >
                  Student Login
                </a>
              </p>
              <p>
                <a
                  href="https://www.technoindiauniversity.ac.in/index3.php?id=69"
                  target="blank"
                >
                  Semester Results
                </a>
              </p>
              <p>
                <a href={brochurePdf} target="blank">
                  Brochure
                </a>
              </p>
              {/* <p>
                <a href={jnf} target="blank">
                  Job Notification form
                </a>
              </p> */}
              <p>
                <Link to="/courses">Academics</Link>
              </p>
              <p>
                <Link to="/facilities">Facilities</Link>
              </p>
              <p>
                <Link to="/alumni-speaks">Alumni Speaks</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          ALL RIGHTS RESERVED © 2023. <strong>Techno India University, West Bengal.</strong> (Developed
          & Managed By -{" "}
            <a href="https://www.linkedin.com/in/chitranjan-kumar-nirala/" target="none">
            Chitranjan 
          </a>
          , {" "}
           <a
            href="https://www.linkedin.com/in/sameer-singh27/"
            target="none"
          >
            Sameer 
          </a>, {" "}
           <a
            href="https://www.linkedin.com/in/shruti-kumari-a44814202/"
            target="none"
          >
            Shruti
          </a>
          ,{"  "}
          <a href="https://www.linkedin.com/in/rishav-kumar-6az/" target="none">
            Rishav
          </a>
          , {" "}
          <a href="https://www.linkedin.com/" target="none">
            Rounak 
          </a>
          )
        </p>
      </div>
    </footer>
  );
};

export default footer;
