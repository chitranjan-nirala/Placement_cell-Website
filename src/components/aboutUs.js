import React from "react";
import { Link } from "react-router-dom";
const About = (props) => {
  return(
  // <div style={{ backgroundColor: "white" }}>
    <div className="aboutUs-o-container">
      <div className="aboutUs-container">
        <h1 className="aboutUs-h1">Welcome To Techno India University,Kolkata</h1>
        <h3 className="aboutUs-h3">(Asia's No1 University)</h3>
            <p>
              Techno India University, West Bengal was conceptualized under the
              support of the Techno India Group and was established by virtue of
              the WB State Legislature Act in the year 2012. It has been one of
              the dream projects of the Chief Minister of West Bengal, Smt
              Mamata Banerjee for enhancing the education system of West Bengal.
              Standing tall as the first private university of
              West Bengal, Techno India University is an institute
              of world-wide repute in the field of education, research and
              technology. Ever since its inception, Techno India University,
              undergraduate, postgraduate and doctoral candidates
              have shown remarkable performances in their respective fields on
              account of the high quality education imparted by our
              distinguished professors and mentors. History bears testimony to
              the fact that Techno India University, West Bengal has earned its
              well-deserved respect and recognition in the world of education,
              research and technology primarily due to its strong emphasis on
              the holistic grooming and development of the students.
            </p>
            <p>
              Techno India University, West Bengal aspires to be an
              internationally renowned centre of quality education and
              innovation towards building a sustainable knowledge-society. It
              also wishes to be the most sought-after institute for value-based
              intellectual development and skill enhancement. Through
              translational innovation and collaboration with industry and
              academia, it aims to create citizens who can solve challenging
              global problems.
            </p>

            <h1 className="aboutUs-h1">Why Techno India University, West Bengal</h1>
        <p>
          At <strong>Techno India University, West Bengal</strong>, our motto is to craft an advanced institution of professional learning
           of international standard where pursuit of knowledge and excellence shall be of paramount importance, transcending 
           the barriers of nationality, language, cultural plurality and religion. Holistic development of students to enable 
           them to achieve success not just in professional field, but all-round success in all aspects of life, is the keystone
            of Techno India University, West Bengal.
        </p>
        <p>
          The institute also encourages the students to showcase their research
          in national conferences and workshops. The students work as Teaching
          Assistants, guiding and aiding the students in the batches that are
          junior to them.
        </p>
        <h2>The Academic Program</h2>
        <p>The campus offers B.Tech and M.Tech programs.</p>
        <p>
          The Courses are finely refined and fabricated to meet the needs of the
          versatile industry and latest research areas. The highly qualified,
          intellectual and technically proficient faculty at IIIT-Lucknow fuel
          the learning process in turn igniting the minds.
        </p>
        <p>
          Click <Link to="/courses">here</Link> to see the course structure.
        </p>
        <h2>Admission Criteria</h2>
        <p>
        Admission to the B.Tech program at Techno India University is based on the JEE Mains score and WB-JEE exam.
       Our students, selected through the esteemed JEE Mains and WB-jEE.
       it ensuring a cohort cultivated from the forefront of knowledge and critical thinking. 
       This rigorous selection process ensures that our students possess
      both qualitative and quantitative skills, making them the best in class.
.{" "}
        </p>
        <p>
          Admissions to M.Tech program is made throuh Graduate Aptitude Test
          Engineering (GATE) and Centralized Couselling for M.Tech (CCMT).
        </p>
        <p>
          These students are enriched with both qualitative and quantitative
          skills, thus they make up for the best in class.
        </p>
        <h2>Our Placements and Internships</h2>
        <p>
          The campus has opened doors for various internships which include
          2-months summer internships and 6 months internships for pre-final and
          final year students respectively.
        </p>
        <h2>Faculty</h2>
        <p>
        Faculty members at Techno India University are likely to hold relevant 
        academic qualifications, typically including Ph.D. degrees in their respective fields.
        Faculty members are expected to possess strong teaching skills to effectively convey academic content to students.
        </p>
        <p>
        Many faculty members are likely to have made contributions to research in their respective fields.
         This may include publications in national and international journals, participation in conferences,
          and involvement in research projects.
        </p>
        <p>
          Our focus on recruiting world-class faculty and strong research
          programs bodes well for the future of the institute, which is fast
          emerging as one of the best in the country and also making its
          presence felt.
        </p>
        <h2>Projects</h2>
        <p>
          Projects are an integral part of the education program. Students are
          required to do group projects/research in many courses that they are
          taught. Students are also provided with an option of the independent
          study which enables them to do research in the field of their
          interest.
        </p>
        <h2>Coders At Work</h2>
        <p>
          Our students take part in many renowned programming competitions like{" "}
          <strong>ACM-ICPC</strong> and <strong>Capture the Flag(CTF)</strong>.
        </p>
        <p>
          And our students are honing their skills on websites like Topcoder,
          SPOJ, CodeChef etc. in various languages.
        </p> 

          
          </div>
        </div>
    );
};
export default About;


// //////////////////////////////////////////////////////////////////////////////

