import React, { createContext, useReducer, useEffect } from 'react';
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

    const fetchContact = () => {
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
    }

    useEffect(() => {
        fetchContact()
    }, [])

    const addNewContact = item => {
        axios
        .post(endpoint + '/contacts/', item)
        .then(() => {
            dispatch({
                type: ACTIONS.ADD_CONTACT,
                payload: item
            })
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
        })
        .catch(error => {
            console.log(error + " " + id)
        })
        
    }

    const updateContact = (id, item) => {
        axios
        .put(endpoint + `/contacts/${id}`, item)
        .then(() => {
            dispatch({
                type: ACTIONS.UPDATE_CONTACT,
                payload: item
            })
            fetchContact()
        })
        .catch(error => {
            console.log(error + " " + item.id + " " + item)
        })
    }

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