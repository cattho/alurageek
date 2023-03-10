import { dataTypes } from '../types/types'


export const dataReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case dataTypes.FETCH_DATA_SUCCES:
      return {
        ...state,
        products: payload
      }
    case dataTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }

};