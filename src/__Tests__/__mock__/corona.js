import React from 'react';
import { Navigate } from 'react-router-dom';

const Corona = () => (
  <div>
    <div className="imagess">
      <img
        src="https://www.afge.org/link/c5634a73b41b4dd8a3f48e6768a6422d.aspx"
        alt=""
      />
    </div>
    <div className="container">
      <div
        style={{ width: '18rem' }}
        className="mb-2"
        onClick={() => Navigate('/Details/')}
      >
        <h2>&#10148;</h2>
        <div className="body">
          <div className="card-t">
            <h3> </h3>
            <p>Population:</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Corona;
