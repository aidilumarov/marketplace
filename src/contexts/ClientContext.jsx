import axios from 'axios';
import React from 'react';
import { useReducer } from 'react';
import { AUTH_API, JSON_API } from '../helpers/constants';

export const clientContext = React.createContext()

const INIT_STATE = {
    products: null,
    
}

const reducer = (state = INIT_STATE, action) => {
    switch(action.type){
        case "GET_PRODUCTS":
            return {...state, products: action.payload}
        
        default:
            return state
    }
}


const ClientContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const createProduct = async (newProduct) => {
        await axios.post(JSON_API, newProduct)
        getProducts()
    }

    const getProducts = async() => {
        const {data} = await axios(JSON_API)
        // console.log(data);
        dispatch({
            type: "GET_PRODUCTS",
            payload: data
        })
    }

    const registerUser = async (newUser) => {
        try{
            const res = await axios.post(`${AUTH_API}/api/auth/register`, newUser)
            console.log(res)
        }
        catch{
            alert('Nepravilnaya pochta ili parol')
        }
    }


    return (
        <clientContext.Provider value = {{
            products: state.products,         
            getProducts,
            registerUser
            
        }}>
            {children}
        </clientContext.Provider>
    );
};

export default ClientContextProvider;