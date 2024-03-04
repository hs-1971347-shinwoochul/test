import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

const GET_USER_DATA = 'GET_USER_DATA';

const setUserData = (data) => ({
  type: GET_USER_DATA,
  payload: data,
});

// export const fetchUserData = () => async (dispatch) => {
//   try {
//     const response = await fetch('C:\\Users\\shin\\Desktop\\testpage\\src\\data.json');
//     const data = await response.json();
//     dispatch(setUserData(data));
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };
export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3001/get-data');
    const data = await response.json();
    console.log("store-data:");
    console.log(data);
    dispatch(setUserData(data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const reducer = (state = { userData: [] }, action) => {
  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export const store = createStore(reducer, applyMiddleware(thunk));
