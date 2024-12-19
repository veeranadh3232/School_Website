import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";


function Academic() {
  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src="" alt="Placeholder Image" className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h2>MESSAGE FROM ACADEMIC DIRECTOR</h2>
          <h4>Welcome to International Delhi Public School, Cherukupalli</h4>
          <p  style={{textAlign:"justify"}}>
            "Greetings to all the aspiring students and families embarking on
            the educational journey at International Delhi Public School -
            Cherukupalli. As the Academic Director, I am privileged to guide
            and nurture the academic pursuits of our distinguished institution.
            At IDPS, we are committed to fostering a nurturing environment that
            cultivates intellectual curiosity, critical thinking, and a passion
            for lifelong learning.
            <br />
            Our academic philosophy is grounded in the belief that each student
            possesses unique talents and potential. We are dedicated to
            providing a comprehensive educational experience that not only
            meets global standards but also caters to the individual needs of
            our students. Our curriculum is designed to challenge and inspire,
            ensuring that our students are well-prepared for the complexities
            of the modern world.
            <br />
            We are proud to have a team of highly qualified and passionate
            educators who are dedicated to delivering an exceptional learning
            experience. They are the backbone of our institution, constantly
            innovating and adapting to ensure that our students receive the best
            possible education.
            <br />
            In conclusion, I invite you to join us in this enriching
            educational journey at IDPS, where we strive to empower each student
            to achieve academic excellence and become responsible, global
            citizens. Together, we will unlock the limitless potential of our
            students, guiding them towards a bright and successful future."
            <br />
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Academic;
