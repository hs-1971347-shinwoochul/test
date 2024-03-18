import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import axios from 'axios';

const GET_USER_DATA = 'GET_USER_DATA';
const GET_CHARACTER_DATA = 'GET_CHARACTER_DATA';
const GET_PERSONAL_DATA = 'GET_PERSONAL_DATA';

const setUserData = (data) => ({
  type: GET_USER_DATA,
  payload: data,
});

const setCharacterData = (data) => ({
  type: GET_CHARACTER_DATA,
  payload: data,
});

const setPersonalData = (data) => ({
  type: GET_PERSONAL_DATA,
  payload: data,
});

export const fetchUserData = () => async (dispatch) => {
  try {
    const address = '/default/api1/metakids_lambda_get_google_sheet?sheetID=1soQzBZjn1Kzbo_RxhHEzmb30C4ednvDwvKLu2Qhn6dM&tabName=avatar';
    const response = await axios.get(address);
    const resData = await response.data;
    dispatch(setUserData(resData));

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
export const fetchPersonalData = (userId) => async (dispatch) => {
  try {
    const address = '/default/api2/metakids_get_avatar';
    const response = await axios.get(address,{
      params: {
        userID : userId
      }
    });
    console.log(userId);
    console.log(address);
    console.log(response);
    const resData = await response.data;
    console.log(resData);
    dispatch(setPersonalData(resData));

  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export const fetchCharacterData = () => async (dispatch) => {
  try {
    const address = 'default/api3/metakids_avatars_info';
    const response = await axios.get(address);
    const resData = await response.data;
    dispatch(setCharacterData(resData));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

const reducer = (state = { userData: [] }, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, userData: action.payload };
    case GET_CHARACTER_DATA:
      return {...state, characterData: action.payload};
    case GET_PERSONAL_DATA:
      return {...state, personalData: action.payload};
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));