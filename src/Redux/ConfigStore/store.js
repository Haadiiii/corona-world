import { combineReducers, configureStore } from '@reduxjs/toolkit';
import coronaReducer from '../Corona/Corona';

const rootReducer = combineReducers({
  corona: coronaReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
