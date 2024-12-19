import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";

function AssessmentPolicy() {
  return (
    <>
    
    <Navbar/>
    <div className="content-section bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Assessment & Promotion Policies</h2>
        <p style={{textAlign:"justify"}}>
          At International Delhi Public School, we uphold a culture of
          unwavering commitment and academic integrity, driven by robust
          attendance and assessment standards. Our policies are designed to
          foster excellence, requiring 100% attendance for all assessments to
          ensure fairness and accountability. Exceptions are only granted for
          valid medical reasons, strictly verified by the Principal on the exam
          day. Additionally, students must achieve a minimum 90% attendance
          rate each term, reinforcing consistent engagement and dedication to
          their educational journey.
        </p>
        <p style={{textAlign:"justify"}}>
          We prioritize fairness by cultivating essential values of punctuality
          and responsibility. These standards are aligned with the National
          Education Policy (NEP) and Central Board of Secondary Education
          (CBSE) guidelines, reflecting our dedication to academic integrity at
          every level.
        </p>
        <p style={{textAlign:"justify"}}>
          We take a holistic approach to education, where each student’s
          performance is evaluated with fairness, and meaningful support is
          offered to those facing challenges. By fostering open channels of
          communication and offering prompt feedback, we encourage students to
          take ownership of their learning journey. Together, we embark on a
          path of exploration, growth, and academic distinction, preparing our
          students to thrive with a balanced foundation of knowledge, curiosity,
          and resilience for a successful future.
        </p>
        <p  style={{textAlign:"justify"}}>
          At International Delhi Public School, we believe that education is a
          partnership built on trust, responsibility, and mutual respect
          between students, educators, and families. Our rigorous standards and
          structured policies are crafted not only to uphold academic
          excellence but also to instill life skills that prepare students for
          a dynamic future. We are dedicated to fostering a learning
          environment that promotes critical thinking, integrity, and
          self-discipline, empowering students to reach their highest
          potential.
        </p>
        <p  style={{textAlign:"justify"}}>
          Our educational philosophy goes beyond the classroom, encouraging
          students to be active contributors to their communities and to
          embrace continuous personal growth. Through collaborative efforts, we
          are committed to nurturing well-rounded individuals equipped to
          navigate the challenges and opportunities of tomorrow’s world.
        </p>
      </div>
    </div>

    <Footer/>
    </>
  );
}

export default AssessmentPolicy;
