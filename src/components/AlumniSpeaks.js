import React from "react";

import subhamSaha from "../assets/alumni/subhamSaha.jpeg";
import priyakedia from "../assets/alumni/priya kedia.jpeg";
import Diyasini from "../assets/alumni/Diyasini.jpeg";
import Hanzala from "../assets/alumni/Hanzala.jpeg";
import Siddhartha from "../assets/alumni/Siddhartha.jpeg";
import Trisha from "../assets/alumni/Trisha.jpeg";
import ABHISHEK from "../assets/alumni/ABHISHEK.jpeg";
import Sangram from "../assets/alumni/Sangram.jpeg";
import Sourav from "../assets/alumni/Sourav.jpeg";
import Rajarsi from "../assets/alumni/Rajarsi.jpeg"
import Akash from "../assets/alumni/Akash.jpeg"

const AlumniCard = (props) => {
  return (
    <React.Fragment>
      <figure className="snip1559">
        <div className="profile-image">
          <img src={props.img} alt={props.alt} />
        </div>
        <figcaption>
          <h3>{props.name}</h3>
          <p style={{ margin: "0 5px" }}>"{props.message}"</p>
          <p className="contact-detail">
            <strong>Placed At:</strong> {props.company}
          </p>
        </figcaption>
      </figure>
    </React.Fragment>
  );
};

const card = (props) => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">Alumni Speaks</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={subhamSaha}
                alt="Subham Saha"
                name="Subham Saha"
                message="It was a great time, spent in TIU. It has very wonderful faculty and they are very cooperative. The relation between faculty and student is very cordial, which gave me an opportunity to excel further."
                company="Google"
              />
              <AlumniCard
                img={priyakedia}
                alt="PRIYA KEDIA"
                name="PRIYA KEDIA"
                message="TIU has provided me a wonderful environment and opportunity to learn and grow myself academically as well as to secure a place in the corporate with its best placement services."
                company="Microsoft"
              />
              <AlumniCard
                img={Diyasini}
                alt="Diyasini Bandyopadhyay "
                name="Diyasini Bandyopadhyay"
                message="It gives me great pleasure in sharing my success after joining TIU. It has successfully accomplished its promises and objectives in providing quality education and overall development of all its students."
                company="Google"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={Hanzala}
                alt="Hanzala Rahman"
                name="Hanzala Rahman"
                message="It was a great time, spent in TIU. It has very wonderful faculty and they are very cooperative. The relation between faculty and student is very cordial, which gave me an opportunity to excel further."
                company="Google"
              />
              <AlumniCard
                img={Siddhartha}
                alt="Siddhartha Bhattacharjee"
                name="Siddhartha Bhattacharjee"
                message="TIU has provided me a wonderful environment and opportunity to learn and grow myself academically as well as to secure a place in the corporate with its best placement services."
                company="Wipro"
              />
              <AlumniCard
                img={Trisha}
                alt="Trisha Sinha"
                name="Trisha Sinha"
                message="Life in TIU was nothing less than a roller coaster ride, full of ups and downs one can imagine. But throughout the journey I have learned a lot. It have provided me with some great opportunities."
                company="Salesforce"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={Sourav}
                alt="Sourav Mondal"
                name="Sourav Mondal"
                message="It’s been fortunate to be a part of the TIU where I got the platform to enrich my skills and henceforth a bright light towards my life, with the support and endeavor of my faculty members all the way with my family."
                company="Cognizant"
              />
              <AlumniCard
                img={Sangram}
                alt="Sangram Kumar Das "
                name="Sangram Kumar Das"
                message="I really feel proud on saying that I have completed my graduation from TIU. The thing i admire the most is the support from everyone at every step."
                company="Amazon"
              />
              <AlumniCard
                img={ABHISHEK}
                alt="KUMAR ABHISHEK"
                name="KUMAR ABHISHEK"
                message="Entering TIU is one of the best things to happen in my life, both on personal and professional front. It has inculcated a lot of intra and interpersonal skills which is one of my key learning by being part of the TIU family."
                company="Accenture"
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <AlumniCard
                img={Rajarsi}
                alt="Rajarsi Roy"
                name="Rajarsi Roy"
                message="TIU is such an institution that not only inspire you but also teaches what your end goal is."
                company="Amazon"
              />
              <AlumniCard
                img={Akash}
                alt="Akash Shaw"
                name="Akash Shaw"
                message="To be a part of TIU, in itself is no less than an achievement. Day 1 to the last day of my college I have found a consistent growth in myself."
                company="Paytm"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default card;
