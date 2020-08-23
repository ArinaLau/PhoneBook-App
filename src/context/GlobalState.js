import React, { createContext, useReducer, useEffect} from 'react';
import AppReducer, { ACTIONS } from './AppReducer';
import axios from 'axios';

const initialState = {
    loading: true,
    error: "",
    contacts: []
}
  
const endpoint = "http://localhost:3001";

export const GlobalContext = createContext(initialState)

export const GlobalContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(AppReducer, initialState)

    const addNewContact = item => {
        axios
        .post(endpoint + '/contacts/', item)
        .then(() => {
            dispatch({
                type: ACTIONS.ADD_CONTACT,
                payload: item
            })
            // console.log(response.data)
        })
        .catch(error => {
           console.log(error)
        })
        
    }

    const deleteContact = id => {
        axios
        .delete(endpoint + `/contacts/${id}`, id)
        .then(() => {
            dispatch({
                type: ACTIONS.DELETE_CONTACT,
                payload: id
            })
            // console.log(response.data)
        })
        .catch(error => {
            console.log(error)
        })
        
    }

    const updateContact = (id, item) => {
        axios
        .put(endpoint + `/contacts/${id}`, item)
        .then(() => {
            dispatch({
                type: ACTIONS.UPDATE_CONTACT,
                payload: {
                    id, 
                    name: item.name,
                    phoneNumber: item.phoneNumber
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        axios
        .get(endpoint + "/contacts")
        .then(response => {
            dispatch({
                type: ACTIONS.FETCH_SUCCESS,
                payload: response.data
            })
        })
        .catch(error => {
            dispatch({
                type: ACTIONS.FETCH_ERROR
            })
        })
    }, [])

    return(
        <GlobalContext.Provider value={{
            loading: state.loading,
            error: state.error,
            contacts: state.contacts,
            addNewContact,
            deleteContact,
            updateContact
        }}>
            {children}
        </GlobalContext.Provider>
    )
}