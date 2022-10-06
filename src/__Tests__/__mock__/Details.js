import React from 'react';

const Details = () => (
  <div>
    <div to="/">
      {' '}
      <div className="back"><img src="https://img.icons8.com/ios-filled/50/FD7E14/reply-arrow.png" alt="" /></div>
      {' '}
    </div>
    <div className="center">
      <img
        src="https://www.efsa.europa.eu/sites/default/files/styles/lg_col_12_16x9_fallback/public/news/coronavirus.jpg.jpeg?itok=gp1EWvJD"
        alt=""
      />
    </div>
    <h1 className="head">country</h1>
    <div className="table">
      <div className="table-list">
        <h3> Confirmed </h3>
        <div>confirmed</div>
      </div>
      <div className="table-list">
        <h3> Deaths </h3>
        <div>death</div>
      </div>
      <div className="table-list">
        <h3> Recovered </h3>
        <div>recovered</div>
      </div>
      <div className="table-list">
        <h3> Area </h3>
        <div>
          sq_km_area
          {' '}
          km/sq
        </div>
      </div>
      <div className="table-list">
        <h3> Continent </h3>
        <div>continent</div>
      </div>
      <div className="table-list">
        <h3> Abbreviation </h3>
        <div>abbreviation</div>
      </div>
      <div className="table-list">
        <h3> Location </h3>
        <div>location</div>
      </div>
      <div className="table-list">
        <h3> Capital city </h3>
        <div>capital_city</div>
      </div>
      <div className="table-list">
        <h3> life_expectancy </h3>
        <div>
          life_expectancy
          %
        </div>
      </div>
      <div className="table-list">
        <h3> Updated Date </h3>
        <div>updated</div>
      </div>
    </div>
  </div>
);

export default Details;
