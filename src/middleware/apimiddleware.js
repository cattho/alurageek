import axios from 'axios';
import { fetchDataFailure, fetchDataRequest, fetchDataSuccess } from '../actions/dataAction';
import { dataTypes } from '../types/types';

const fetchData= () =>{
  return (dispatch) =>{
    dispatch(fetchDataRequest())
    const url='https://alura-geek-89d87-default-rtdb.firebaseio.com/products.json'
    axios.get(url)
    .then(res =>{
      dispatch(fetchDataSuccess(res.data))
      console.log(res);
    })
    .catch(err =>{
      dispatch(fetchDataFailure(err.message))
    })
  }
}

const apiMiddleware = ({dispatch}) => next =>  action => {
  if(action.type === dataTypes.FETCH_DATA_REQUEST){
    axios.get(action.payload)
    .then(res =>{
      dispatch(fetchDataSuccess(res.data))
    })
    .catch(error=>{
      dispatch(fetchDataFailure(error.message))
    })
  }
  return next(action)
};

export default apiMiddleware;

