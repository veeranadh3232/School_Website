import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function BeyondAcademics() {
  return (
    <>
    <Navbar/>
    <div className="content-section bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Key Features</h2>
        <div className="row justify-content-center">

          {/* Card 1 */}
          <div className="col-md-3 mx-2 mb-4 d-flex">
            <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Nurturing True Intellectual and Personal Growth</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  At IDPS Cherukupalli, we believe that genuine learning extends far beyond textbooks. True development
                  of the mind happens when students are encouraged to explore, question, and experience. By blending
                  rigorous academics with rich co-curricular activities, we foster an environment where curiosity and
                  creativity are celebrated as essential aspects of learning.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-3 mx-2 mb-4 d-flex">
            <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Experiential Learning for Deeper Understanding</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Learning is most powerful when students can connect theoretical knowledge with real-life experiences.
                  While mastering Physics or Biology concepts, our students also observe and experiment: watching how a
                  ball spins in motion, how a Frisbee changes course, or witnessing the miracle of a seed’s germination.
                  These hands-on experiences make complex ideas tangible and spark a lifelong love for science and
                  discovery.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-3 mx-2 mb-4 d-flex">
            <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Building Resilience and Character</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Every time a student rises after a fall—whether in sports, performing arts, or academics—they gain not
                  only strength but also a deeper sense of courage and resilience. At IDPS Cherukupalli, challenges are
                  seen as stepping stones that build confidence and grit, equipping our students to navigate life's
                  hurdles with determination.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-3 mx-2 mb-4 d-flex">
            <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Fostering Imagination and Creativity</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  When students sketch their school building, illustrate their surroundings, or pen their thoughts, they
                  unlock a world of creativity and imagination. Our programs support self-expression through art, music,
                  theater, and writing, nurturing each child’s unique creative flair.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-3 mx-2 mb-4 d-flex">
            <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">An Inclusive Environment for Exploration and Play</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  At IDPS Cherukupalli, inquisitiveness, playfulness, and originality are embraced as integral to
                  education. Our supportive environment encourages students to question the world around them, try new
                  things, and learn joyfully. Here, every child finds the freedom to dream, explore, and grow.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-3 mx-2 mb-4 d-flex">
            <div className="card text-center shadow-sm flex-grow-1 d-flex flex-column">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Expert Faculty</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Qualified and experienced teachers committed to nurturing students’ potential and growth.
                </p>
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

export default BeyondAcademics;
