import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const AgeCriteria = () => {
  return (
    <>
    <Navbar/>
    <div className="container mt-5">
      {/* Nursery & Preparatory Table */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Age Criteria For The Year 2024-25</h2>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead style={{ backgroundColor: 'green', color: 'white' }}>
                <tr>
                  <th scope="col">Nursery & Preparatory</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Nursery</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Preparatory</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Primary (Class I - Class V) Table */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead style={{ backgroundColor: 'green', color: 'white' }}>
                <tr>
                  <th scope="col">Primary (Class I - Class V)</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Class I</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Class II</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Class III</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Class IV</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Class V</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Secondary (Class VI - Class X) Table */}
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead style={{ backgroundColor: 'green', color: 'white' }}>
                <tr>
                  <th scope="col">Secondary (Class VI - Class X)</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Class VI</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Class VII</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Class VIII</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Class IX</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default AgeCriteria;
