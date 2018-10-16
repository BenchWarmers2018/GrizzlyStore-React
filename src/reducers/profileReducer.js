import {RESET_PROFILE_ERRORS, UPDATE_PROFILE_ADDRESS, UPDATE_PROFILE_ADDRESS_FULFILLED, UPDATE_PROFILE_ADDRESS_REJECTED} from "../CONSTANTS";

const initialState = {
    loggedInAccount : null,
    profile: {},
    errors: [],
    fetching: false,
    submitting: false,
    fetched: false,
    submitted: false,
    error: null,
    status:"",
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_PROFILE": {
            return {...state, fetching: true}
        }
        case "FETCH_PROFILE_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                loggedInAccount: action.payload[0],
            }
        }
        case "FETCH_PROFILE_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "SUBMIT_PROFILE": {
            return {...state, submitting: true}
        }
        case "SUBMIT_PROFILE_ACCEPTED": {
            return {
                ...state,
                submitted: true,
                submitting: false,
                loggedInAccount: action.payload.entities,
                status: action.payload.status,
            }
        }
        case "SUBMIT_PROFILE_REJECTED": {
            return {...state,
                submitting: false,
                errors: action.payload.errors,
                status: action.payload.status,
            }
        }
        case UPDATE_PROFILE_ADDRESS: {
            return {...state, fetching: true}
        }
        case UPDATE_PROFILE_ADDRESS_REJECTED: {
            return {...state, fetching: false, errors: action.payload.errors}
        }
        case UPDATE_PROFILE_ADDRESS_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                loggedInAccount: action.payload[0],
            }
        }
        case RESET_PROFILE_ERRORS: {
            return{
                ...state,
                errors:[],
                status:"",
            }
        }

        default:
            return state;
    }
}
