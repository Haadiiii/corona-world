import { createAsyncThunk } from '@reduxjs/toolkit';

const CORONA_SUCCESS = 'CORONA_SUCCESS';
const CORONA_BY_COUNTRY_SUCCESS = 'CORONA_BY_COUNTRY_SUCCESS';

const url = 'https://covid-api.mmediagroup.fr/v1/cases/';
const initialState = {
  coronaArray: [],
  coronaById: {},
};

export const getCorona = createAsyncThunk(
  CORONA_SUCCESS,
  async (args, { dispatch }) => {
    const response = await fetch(url);
    const data = await response.json();
    const coronas = Object.keys(data)
      .map((key) => {
        const virus = data[key].All;
        return {
          country: key,
          ...virus,
        };
      });
    dispatch({ type: CORONA_SUCCESS, payload: coronas });
    return coronas;
  },
);

const urlMain = 'https://covid-api.mmediagroup.fr/v1/cases?country=';

export const getCoronaByName = (country) => async (dispatch) => {
  const response = await fetch(
    `${urlMain}${country}`,
  );
  const data = await response.json();
  dispatch({ type: CORONA_BY_COUNTRY_SUCCESS, payload: data.All });
};

const coronaReducer = (state = initialState, action) => {
  switch (action.type) {
    case CORONA_SUCCESS:
      return {
        ...state,
        coronaArray: action.payload,
      };
    case CORONA_BY_COUNTRY_SUCCESS:
      return {
        ...state,
        coronaById: action.payload,
      };
    default:
      return state;
  }
};

export default coronaReducer;
