import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css"; // Optional: Include custom styles if needed.

const Home = () => {


  return (
    <>
    <Navbar/>
    <div>
      {/* Carousel Section */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>

        {/* Carousel Images */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              style={{ height: "600px", objectFit: "cover" }}
              className="d-block w-100"
              src="https://www.towerpinkster.com/wp-content/uploads/Project-Images-Half-Width-2-2.png"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "600px", objectFit: "cover" }}
              className="d-block w-100"
              src="https://via.placeholder.com/1200x600"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              style={{ height: "600px", objectFit: "cover" }}
              className="d-block w-100"
              src="https://via.placeholder.com/1200x600"
              alt="Third slide"
            />
          </div>
        </div>

        {/* Controls */}
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </a>
      </div>

      {/* Why Section */}
      <div className="container my-5">
        <div className="row g-4">
          {/* Why Text */}
          <div className="col-md-4">
            <div className="p-4 shadow-sm bg-light rounded">
              <h2 className="text-success mb-3">Why International Delhi Public School?</h2>
              <p>
                Ethics and Values can only be modeled and can’t be taught from textbooks or syllabus. 
                We believe that Ethics & Values can be passed on to students only through disciplined 
                and committed staff.
              </p>
              <button className="btn btn-success btn-lg mt-2">Meet Our Faculty</button>
            </div>
          </div>

          {/* Info Cards */}
          <div className="col-md-8">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">📄</div>
                    <h4 className="card-title">Wholesome Education</h4>
                    <p className="card-text">
                      Our certified teachers strictly adhere to the prescribed CBSE curriculum while 
                      focusing on strong foundational knowledge.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">💡</div>
                    <h4 className="card-title">IQ Plus EQ</h4>
                    <p className="card-text">
                      Personality development, creativity, and thinking outside the box for a balanced 
                      Intelligence and Emotional Quotient.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm text-center">
                  <div className="card-body">
                    <div className="display-4 mb-3">🖥️</div>
                    <h4 className="card-title">Education Meets Technology</h4>
                    <p className="card-text">
                      Smart classrooms with modern technological enhancements ensure fast and effective 
                      learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Section */}
      <div
        className="text-white py-5"
        style={{
          background: "url('https://via.placeholder.com/1200x600') no-repeat center center/cover",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        ></div>
        <div className="container position-relative text-center">
          <div className="row g-4 justify-content-center">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="p-3 bg-dark rounded shadow">
                <div className="display-5 mb-2">🏰</div>
                <h5>World Class Infrastructure</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="p-3 bg-dark rounded shadow">
                <div className="display-5 mb-2">📊</div>
                <h5>Spacious Classrooms</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="p-3 bg-dark rounded shadow">
                <div className="display-5 mb-2">🧪</div>
                <h5>Science Labs</h5>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3">
              <div className="p-3 bg-dark rounded shadow">
                <div className="display-5 mb-2">📚</div>
                <h5>Library</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section - Image */}
          <div className="col-md-6 mb-4 mb-md-0">
            <div className="image-wrapper">
              <img
                src="https://via.placeholder.com/500x300" // Replace with your image URL
                alt="Teacher and Child"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="col-md-6">
            <h2 className="section-title mb-4">About </h2>
            <p className="section-text" style={{textAlign:'justify'}}>
            Situated in the verdant landscape of Cherukupalli, known for its rich cultural heritage and storied past, our school emerges as a beacon of modern education deeply rooted in timeless values. Inaugurated in 2022 under the visionary guidance of Mr. PYK Reddy, our institution represents a harmonious blend of rural charm and global academic standards, emblematic of a new era in education.

Our sprawling IDPS - Cherukupalli campus, spread over five acres of lush greenery, stands as a silent testament to the beauty of the Coromandel Coast. It offers a tranquil oasis, far from the distractions of urban life, where students can immerse themselves in learning and self-discovery. This serene environment complements our state-of-the-art facilities, including well-equipped classrooms, advanced laboratories, and extensive sports complexes, ensuring a well rounded educational experience.
            </p>
           
            <button className="btn btn-warning btn-lg shadow-sm mt-3">Read More</button>
          </div>
        </div>
      </div>
    </div>
<Footer/>
    </>
  );
};

export default Home;
