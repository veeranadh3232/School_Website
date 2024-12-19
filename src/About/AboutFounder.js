import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

function AboutFounder() {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", paddingTop: "20px" }}>
        <h4>About Us</h4>
        <p>
          <span>Home</span> <span> </span> Founder Message
        </p>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="" alt="Placeholder Image" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2>MESSAGE FROM FOUNDER & CHAIRPERSON</h2>
            <h4>Welcome to International Delhi Public School, Cherukupalli</h4>
            <p style={{textAlign:"justify"}}>
              Nestled in the heart of a rural landscape, International Delhi
              Public School - Cherukupalli stands as a beacon of world-class
              education. Embracing the serene harmony of nature, our ethos is a
              blend of traditional wisdom and modern educational practices. Our
              state-of-the-art infrastructure, designed to be in sync with its
              natural surroundings, provides an ideal setting for nurturing
              inquisitive and agile minds.
              <br />
              At IDPS - Cherukupalli, we are committed to fostering academic
              excellence and holistic development. We employ pedagogical
              approaches that encourage critical thinking and collaborative
              learning, ensuring our students are well-prepared for the
              challenges of the 21st century. Our curriculum is designed to
              develop global citizens who are deeply rooted in their cultural
              heritage.
              <br />
              We believe education has the power to transform lives and uplift
              communities. Our campus is a cradle of creativity and continuous
              learning, where technology and tradition coalesce to ignite a
              lifelong pursuit of knowledge. We emphasize a well-rounded
              education, integrating sports and co-curricular activities to
              develop essential life skills alongside academic proficiency.
              <br />
              Our dedicated team of educators, who are mentors and lifelong
              learners themselves, guide our students with wisdom and
              unwavering commitment. They are instrumental in shaping
              tomorrow's leaders, thinkers, and innovators.
              <br />
              Choosing IDPS - Cherukupalli means embracing a commitment to
              educational excellence and personal growth. We offer an education
              that is both rigorous in academics and rich in experiential
              learning, nurturing individuals who are capable of shaping both
              their future and that of the world around them.
              <br />
              I warmly invite you to explore IDPS Cherukupalli, a place where
              learning is a joyous and transformative journey. Here, every
              challenge is an opportunity for excellence, and each moment is an
              enriching educational experience.
              <br />
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutFounder;
