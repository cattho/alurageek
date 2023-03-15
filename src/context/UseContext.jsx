import axios from 'axios';
import React, { useReducer, useState } from 'react'
import { useEffect } from 'react';
import { dataReducer } from '../reducers/dataReducer';
import Context from './Context';


const UseContext = ({ children }) => {
    const initialState = {
        products: [],
        shoppingCar: []
    };
    const [state, dispatch] = useReducer(dataReducer, initialState);
    const url = 'https://alura-geek-89d87-default-rtdb.firebaseio.com/products.json';


    const getData = async () => {
        try {
            const res = await axios.get(url)
            dispatch({ type: 'FETCH_DATA_SUCCES', payload: res.data })
        } catch (e) {
            alert(e);
            dispatch({type:'FETCH_DATA_FAILURE'});
        }

    };

    return (
        <Context.Provider value={{
            products: state.products,
            shopCart: state.shoppingCar,
            getData
        }}>
            {children}
        </Context.Provider>
    )
}

export default UseContext