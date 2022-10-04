import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
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
    <div className="container">
      {coronaArray.map((item) => (
        <Card
          key={uuid()}
          style={{ width: '18rem' }}
          className="mb-2"
          onClick={() => navigate(`/Details/${item.country}`)}
        >
          <Card.Header>{'>'}</Card.Header>
          <Card.Body className="body">
            <div className="card-t">
              <Card.Title>
                {item.country}
                {' '}
              </Card.Title>
              <Card.Text>
                {item.population}
              </Card.Text>
            </div>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Corona;
