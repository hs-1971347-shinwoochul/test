import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import axios from 'axios';

const GET_USER_DATA = 'GET_USER_DATA';
const GET_CHARAACTER_DATA = 'GET_CHARAACTER_DATA';

const setUserData = (data) => ({
  type: GET_USER_DATA,
  payload: data,
});

const setCharacterData = (data) => ({
  type: GET_CHARAACTER_DATA,
  payload: data,
});

export const fetchUserData = () => async (dispatch) => {
//'http://localhost:3001/get-data',
  try {
    const address = '/default/metakids_lambda_get_google_sheet?sheetID=1soQzBZjn1Kzbo_RxhHEzmb30C4ednvDwvKLu2Qhn6dM&tabName=avatar';
    const data = [];
    const response = await axios.get(address);
    const resData = await response.data;
    data.push(resData);
    dispatch(setUserData(resData));

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchCharacterData = () => async (dispatch) => {
  try {
    const address2 = 'http://localhost:3001/get-data';
    const response2 = await fetch(address2);
    const resData2 = await response2.json();
    console.log(resData2);
    dispatch(setCharacterData(resData2));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const reducer = (state = { userData: [] }, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, userData: action.payload };
    case GET_CHARAACTER_DATA:
      return {...state, characterData: action.payload};
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));