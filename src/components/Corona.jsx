import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { getCorona } from '../Redux/Corona/Corona';
import '../Styles/corona.css';

const Corona = () => {
  const { coronaArray } = useSelector((state) => state.corona);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (coronaArray.length === 0) {
      dispatch(getCorona());
    }
  }, []);
  console.log(coronaArray);
  return (
    <div>
      <div className="imagess"><img src="https://www.afge.org/link/c5634a73b41b4dd8a3f48e6768a6422d.aspx" alt="" /></div>
      <div className="stats"><p>Stats By country</p></div>
      <div className="container">
        {coronaArray.map((item) => (
          <div
            key={uuid()}
            style={{ width: '18rem' }}
            className="mb-2"
            onClick={() => navigate(`/Details/${item.country}`)}
          >
            <h2>&#10148;</h2>
            <div className="body">
              <div className="card-t">
                <h3>
                  {item.country}
                  {' '}
                </h3>
                <p>
                  Population:
                  {item.population}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Corona;
