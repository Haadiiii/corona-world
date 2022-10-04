import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { getCoronaByName } from '../Redux/Corona/Corona';
import '../Styles/detail.css';

const Details = () => {
  const { coronaById } = useSelector((state) => state.corona);
  const { country } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (coronaById.length === 0) {
      dispatch(getCoronaByName(country));
    }
    dispatch(getCoronaByName(country));
  }, []);

  console.log(coronaById);

  return (
    <div>
      <NavLink to="/">
        {' '}
        <div>{'<'}</div>
        {' '}
      </NavLink>
      <img src="https://www.efsa.europa.eu/sites/default/files/styles/lg_col_12_16x9_fallback/public/news/coronavirus.jpg.jpeg?itok=gp1EWvJD" alt="" />
      <h1 className="head">{coronaById.All.country}</h1>
      {/* <div className="table">
        <div className="table-list">
          <h3> Confirmed </h3>
          <div>{coronaById.All.confirmed}</div>
        </div>
        <div className="table-list">
          <h3> Deaths </h3>
          <div>{coronaById.All.deaths}</div>
        </div>
        <div className="table-list">
          <h3> Recovered </h3>
          <div>{coronaById.All.recovered}</div>
        </div>
        <div className="table-list">
          <h3> Area </h3>
          <div>{coronaById.All.sq_km_area}</div>
        </div>
        <div className="table-list">
          <h3> Continent </h3>
          <div>{coronaById.All.continent}</div>
        </div>
        <div className="table-list">
          <h3> Abbreviation </h3>
          <div>{coronaById.All.abbreviation}</div>
        </div>
        <div className="table-list">
          <h3> Location </h3>
          <div>{coronaById.All.location}</div>
        </div>
        <div className="table-list">
          <h3> Latitude </h3>
          <div>{coronaById.All.lat}</div>
        </div>
        <div className="table-list">
          <h3> Longitude </h3>
          <div>{coronaById.All.long}</div>
        </div>
        <div className="table-list">
          <h3> Updated Date </h3>
          <div>{coronaById.All.updated}</div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Details;
