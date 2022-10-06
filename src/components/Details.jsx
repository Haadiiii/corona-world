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
    dispatch(getCoronaByName(country));
  }, []);

  return (
    <div>
      <NavLink to="/">
        {' '}
        <div className="back"><img src="https://img.icons8.com/ios-filled/50/FD7E14/reply-arrow.png" alt="" /></div>
        {' '}
      </NavLink>
      <div className="center">
        <img
          src="https://www.efsa.europa.eu/sites/default/files/styles/lg_col_12_16x9_fallback/public/news/coronavirus.jpg.jpeg?itok=gp1EWvJD"
          alt=""
        />
      </div>
      <h1 className="head">{coronaById.country}</h1>
      <div className="table">
        <div className="table-list">
          <h3> Confirmed </h3>
          <div>{coronaById.confirmed}</div>
        </div>
        <div className="table-list">
          <h3> Deaths </h3>
          <div>{coronaById.deaths}</div>
        </div>
        <div className="table-list">
          <h3> Recovered </h3>
          <div>{coronaById.recovered}</div>
        </div>
        <div className="table-list">
          <h3> Area </h3>
          <div>
            {coronaById.sq_km_area}
            {' '}
            km/sq
          </div>
        </div>
        <div className="table-list">
          <h3> Continent </h3>
          <div>{coronaById.continent}</div>
        </div>
        <div className="table-list">
          <h3> Abbreviation </h3>
          <div>{coronaById.abbreviation}</div>
        </div>
        <div className="table-list">
          <h3> Location </h3>
          <div>{coronaById.location}</div>
        </div>
        <div className="table-list">
          <h3> Capital city </h3>
          <div>{coronaById.capital_city}</div>
        </div>
        <div className="table-list">
          <h3> life_expectancy </h3>
          <div>
            {coronaById.life_expectancy}
            %
          </div>
        </div>
        <div className="table-list">
          <h3> Population </h3>
          <div>{coronaById.population}</div>
        </div>
        <div className="table-list">
          <h3> Updated Date </h3>
          <div>{coronaById.updated}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
