import React from "react";
import Card from "./Card";
import kg from "../assets/team22/kg.jpeg";
import sc from "../assets/team22/sc.jpg";
import poorva from "../assets/team22/poorva.jpg";
import dd from "../assets/team22/dd.jpeg";
import dk from "../assets/team22/dk.jpg";
import am from "../assets/team22/am.jpg";
import skt from "../assets/team21/skt.jpg";
import shruu from "../assets/team21/shruu.jpg";
import rk from "../assets/team21/rk.jpg";
import ck from "../assets/team21/ck.JPG";
import Rounak from "../assets/team21/rounak.jpg";
const contactUs = () => {
  return (
    <React.Fragment>
      <div className="contact-outer" style={{ backgroundColor: "white" }}>
        <div className="placement-team">
          <h1 className="placement-team-heading">The Placements Team</h1>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
              <Card
                src={sc}
                alt="sudeep Chaudhary "
                name="sudeep Chaudhary "
                isTeacher={false}
                position="Training and Placements Officer"
                email="placement@technoindiaeducation.com"
                phone="+91 98360 75844"
                linkedin="https://www.linkedin.com/"
                islinkedin={true}
                isPhone={false}
                isEmail={true}
              />

              <Card
                src={kg}
                alt="Kunal Ger"
                name="Kunal Ger"
                isTeacher={false}
                position="Training and Placements Officer"
                email="placement@technoindiaeducation.com"
                phone="+91 83350 61324"
                linkedin="https://www.linkedin.com/in/kunal-ger-66659915/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={poorva}
                alt="Purba Bhattacharya"
                name="Purba Bhattacharya"
                isTeacher={false}
                position="Training and Placements Head"
                email="placement@technoindiaeducation.com "
                phone="+91 83350 61282"
                linkedin="https://www.linkedin.com/in/purba-bhattacharya-2390a41a/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={am}
                alt="Abhishek Majumdar"
                name="Abhishek Majumdar"
                isTeacher={false}
                position="HOD (CSE-AI)"
                phone="+91 70056 40195"
                email="hod.aiml@technoindiaeducation.com"
                linkedin="https://www.linkedin.com/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={dd}
                alt="Debashis Das"
                name="Debashis Das"
                isTeacher={false}
                position="Associate Professor"
                phone="+91 85849 17446"
                email="hod.cse@technoindiaeducation.com"
                linkedin="https://www.linkedin.com/in/debashis-das-13465a1b9/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
          <div className="placement-coordinators">
            <div className="placement-coordinators-wrapper">
            <h1 className="placement-team-heading">Project Mentor & Members</h1>
              <Card
                src={dk}
                alt="Subhasis Koley"
                name="Subhasis Koley"
                isTeacher={false}
                position=" Project Mentor"
                phone="+91 90072 18145"
                email="subhasis.k@technoindiaeducation.com"
                linkedin="https://www.linkedin.com/in/debashis-das-13465a1b9/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
              <Card
                src={skt}
                alt="Sameer Kumar Singh"
                name="Sameer Kumar Singh"
                isTeacher={false}
                position=" Team Leader"
                phone="+91 75492 00915"
                email="sameerapr94@gmail.com"
                linkedin="https://www.linkedin.com/in/sameer-singh27/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
               <Card
                src={shruu}
                alt="Shruti"
                name="Shruti"
                isTeacher={false}
                position=" Team Member"
                phone="+91 77828 56336"
                email="shrutikri24@gmail.com"
                linkedin="https://www.linkedin.com/in/shruti-kumari-a44814202/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
                <Card
                src={rk}
                alt="Rishav Kumar"
                name="Rishav Kumar"
                isTeacher={false}
                position=" Team Member"
                phone="+91 6206 747 991"
                email="krishav310@gmail.con"
                linkedin="https://www.linkedin.com/in/rishav-kumar-6az/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
               <Card
                src={ck}
                alt="Chitranjan Kumar Nirala"
                name="Chitranjan Kumar Nirala"
                isTeacher={false}
                position=" Developer"
                phone="+91 82528 00085"
                email="chitranjan993483@gmail.com"
                linkedin="https://www.linkedin.com/in/chitranjan-kumar-nirala/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
               <Card
                src={Rounak}
                alt="Rounak Dawn"
                name="Rounak Dawn"
                isTeacher={false}
                position=" Team Member"
                phone="+91 861738 2872"
                email="rounak.dawncg98@gmail.com"
                linkedin="https://www.linkedin.com/in/rounak-dawn-53b355254/"
                islinkedin={true}
                isPhone={true}
                isEmail={true}
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default contactUs;
