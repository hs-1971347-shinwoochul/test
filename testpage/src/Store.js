import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import axios from 'axios';

const GET_USER_DATA = 'GET_USER_DATA';

const setUserData = (data) => ({
  type: GET_USER_DATA,
  payload: data,
});

export const fetchUserData = () => async (dispatch) => {
//'http://localhost:3001/get-data',
//,'https://ilxy0qkf91.execute-api.ap-northeast-2.amazonaws.com/default/metakids_lambda_get_google_sheet?sheetID=1soQzBZjn1Kzbo_RxhHEzmb30C4ednvDwvKLu2Qhn6dM&tabName=avatar'
  try {
    const address = '/default/metakids_lambda_get_google_sheet?sheetID=1soQzBZjn1Kzbo_RxhHEzmb30C4ednvDwvKLu2Qhn6dM&tabName=avatar';
    const data = [];
    const response = await axios.get(address);
    const resData = await response.data;
    data.push(resData);

    // const response2 = await axios.get('/default/metakids_get_avatar',{
    //   params: {
    //     userID: 'ddcone1212@gmail.com'
    //   }
    // });
    // const resData2 = await response2.data;

    // data.push(resData2);
    
    
    for(const b of data){
      dispatch(setUserData(b));
      //console.log(b);
    }

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
