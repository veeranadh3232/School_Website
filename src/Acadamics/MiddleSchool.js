import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Footer";
import Navbar from "../Navbar";

function MiddleSchool() {
  return (
 <>
 <Navbar/>
 <div>
      
      <div className="content-section bg-light">
        <div className="container">
          <h2 className="text-center mb-5">Middle School Curriculum at IDPS</h2>
          <div className="row justify-content-center">

            {/* Card 1 */}
            <div className="col-md-3 mx-2 mb-4 d-flex">
              <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Fostering Intellectual Curiosity and Holistic Development</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    The IDPS Middle School curriculum is designed to ignite intellectual curiosity and inspire a genuine
                    passion for learning, moving away from rote memorization to meaningful, inquiry-based knowledge
                    acquisition. Our curriculum aligns with the National Education Policy (NEP) and CBSE board standards,
                    preparing students for future academic challenges while nurturing well-rounded growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-3 mx-2 mb-4 d-flex">
              <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Rigorous Academic Foundation</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Our comprehensive curriculum spans core subjects like advanced mathematics, sciences, humanities, and
                    languages. By fostering critical thinking and analytical skills, we aim to equip students with the
                    foundation needed to confidently navigate future academic pursuits.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-3 mx-2 mb-4 d-flex">
              <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Targeted Learning Programs</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    We offer a blend of group-based and individualized programs that cater to the unique talents and
                    interests of each student, encouraging excellence in scientific inquiry, creativity, and linguistic
                    development.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="col-md-3 mx-2 mb-4 d-flex">
              <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Enriching Co-Curricular Experiences</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Our extensive co-curricular programs focus on essential skills like public speaking, communication,
                    and leadership. These opportunities are designed to build self-confidence and empower students to
                    express themselves effectively in diverse settings.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="col-md-3 mx-2 mb-4 d-flex">
              <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Diverse Extra-Curricular Opportunities</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    The extra-curricular offerings at IDPS are expansive, aimed at uncovering each student’s innate
                    abilities. Students explore their interests in arts, sports, drama, theater, music, and dance through
                    clubs, concerts, and competitions. This holistic approach allows every child to find their passion and
                    flourish in creative and athletic pursuits.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="col-md-3 mx-2 mb-4 d-flex">
              <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Personal, Social, Health, and Education (PSHE)</h5>
                  <p className="card-text" style={{ textAlign: "justify" }}>
                    Through our PSHE curriculum, we engage students in hands-on activities that cultivate values like
                    integrity, compassion, and empathy. These foundational qualities inspire lifelong ethical behaviour
                    and socially responsible citizenship. Aligned with the latest educational standards, IDPS’s Middle
                    School program delivers an enriching and balanced educational experience. Here, students discover
                    their strengths, develop critical life skills, and emerge as resilient, curious, and compassionate
                    individuals.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
    <Footer/>
    </>

);
}

export default MiddleSchool;
