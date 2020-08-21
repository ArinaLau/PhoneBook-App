export const ACTIONS = {
    ADD_CONTACT: 'ADD_CONTACT',
    DELETE_CONTACT: 'DELETE_CONTACT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_ERROR: 'FETCH_ERROR'
}

export default (state, action) => {
    switch(action.type){
        case ACTIONS.ADD_CONTACT: 
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            }
        case ACTIONS.DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(
                    item => item.id !== action.payload   
                )
            }
        
        case ACTIONS.FETCH_SUCCESS: 
            return {
                loading: false,
                contacts: action.payload,
                error: ""
            }
        case ACTIONS.FETCH_ERROR:
            return {
                loading: false,
                contacts: [],
                error: "Something went wrong!"
            }

        default:
            return state
    }
}