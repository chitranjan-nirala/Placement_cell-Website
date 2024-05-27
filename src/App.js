import React, { Component, Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css"; 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import OurRecruiters from "./components/OurRecruiters";
import PlacementStats2020 from "./components/PlacementStats2020";
import PlacementStats2021 from "./components/PlacementStats2021";
import Procedure from "./components/Procedure";
import Jobnotification from "./components/Jobnotification"
import ContactUs from "./components/ContactUs";
import DirectorMessage from "./components/DirectorMessage";
import TpoMessage from "./components/TpoMessage";
import AboutUs from "./components/aboutUs";
import Courses from "./components/courses";
import Facilities from "./components/Facilities";
import Demographics from "./components/demographics";
import Page404 from "./components/404";
import AlumniSpeaks from "./components/AlumniSpeaks";
import Placement2019 from './components/PlacementStats2019';
import PlacementStats2022 from './components/PlacementStats2022';
import StudentLogin from './components/StudentLogin'; // Add this
import StudentRegister from './components/StudentRegister'; // Add this
import StudentDashboard from './components/StudentDashboard';
import TpoDashboard from './components/TpoDashboard';
import TpoLogin from './components/TpoLogin';
import TpoRegistration from './components/TpoRegistration';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="main-page">
          <Routes>
            <Route path="/alumni-speaks" element={<AlumniSpeaks />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/" element={<Home />} />
            <Route path="/our-recruiters" element={<OurRecruiters />} />
            <Route path="/placement-stats-2022" element={<PlacementStats2022 />} />
            <Route path="/placement-stats-2021" element={<PlacementStats2021 />} />
            <Route path="/placement-stats-2020" element={<PlacementStats2020 />} />
            <Route path="/placement-stats-2019" element={<Placement2019 />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/procedure-and-policies" element={<Procedure />} />
            <Route path="/Jobnotification" element={<Jobnotification />} />
            <Route path="/message/director" element={<DirectorMessage />} />
            <Route path="/message/tpo" element={<TpoMessage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/demographics" element={<Demographics />} />
            <Route path="/student-login" element={<StudentLogin />} /> {/* Add this */}
            <Route path="/student-register" element={<StudentRegister />} /> {/* Add this */}
            <Route path="/tpo-login" element={<TpoLogin />} /> {/* Add this */}
            <Route path="*" element={<Page404 />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/tpo-dashboard" element={<TpoDashboard />} />
            <Route path="/tpo-register" element={<TpoRegistration />} />
          </Routes>
        </div>
        <div className="footer-outer-wrapper">
          <Footer />
        </div>
      </Fragment>
    );
  }
}

export default App;
