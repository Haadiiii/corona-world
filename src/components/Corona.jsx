import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';
import { BiSearch } from 'react-icons/bi';
import { getCorona } from '../Redux/Corona/Corona';
import '../Styles/corona.css';

const Corona = () => {
  const { coronaArray } = useSelector((state) => state.corona);
  const [search, setSearch] = useState('');
  const [select, setSelect] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (coronaArray.length === 0) {
      dispatch(getCorona());
    }
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };
  return (
    <div>
      <div className="search-Bar">
        <div className="field">
          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={handleSearch}
          />
          {' '}
          <BiSearch className="icon" />
        </div>
        <select value={select} onChange={handleSelect}>
          <option value="">Country</option>
          {coronaArray.map((item) => (
            <option key={uuid()} value={item.country}>
              {item.country}
            </option>
          ))}
        </select>
      </div>
      <div className="imagess">
        <img
          src="https://www.afge.org/link/c5634a73b41b4dd8a3f48e6768a6422d.aspx"
          alt=""
        />
      </div>
      <div className="stats">
        <p>Stats By country </p>
      </div>
      <div className="container">
        {coronaArray
          .filter((corona) => {
            if (search === '' && select === '') {
              return corona;
            } if (
              corona.country.toLowerCase().includes(search.toLowerCase())
              && corona.country.toLowerCase().includes(select.toLowerCase())
            ) {
              return corona;
            }
            return null;
          })
          .map((item) => (
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
                    Cases:
                    {item.confirmed}
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
