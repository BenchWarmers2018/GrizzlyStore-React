import {
    FETCH_PROFILE,
    FETCH_PROFILE_FULFILLED, FETCH_PROFILE_FULFILLED_AT_STARTUP,
    FETCH_PROFILE_REJECTED, FETCH_PROFILE_REJECTED_AT_STARTUP,
    RESET_PROFILE_ERRORS, RESET_USER_PROFILE,
    UPDATE_PROFILE_ADDRESS,
    UPDATE_PROFILE_ADDRESS_FULFILLED,
    UPDATE_PROFILE_ADDRESS_REJECTED,
    UPDATE_PROFILE_DETAILS,
    UPDATE_PROFILE_DETAILS_FULFILLED,
    UPDATE_PROFILE_DETAILS_REJECTED,
    UPDATE_PROFILE_PASSWORD,
    UPDATE_PROFILE_PASSWORD_FULFILLED,
    UPDATE_PROFILE_PASSWORD_REJECTED
} from "../CONSTANTS";

const initialState = {
    loggedInAccount : [],
    errors: [],
    fetching: false,
    fetched: false,
    submitting: false,
    submitted:false,
    error: null,
    status:"",
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROFILE: {
            return {...state, fetching: true}
        }
        case FETCH_PROFILE_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                loggedInAccount: action.payload.entities,
            }
        }
        case FETCH_PROFILE_REJECTED: {
            return {
                ...state,
                fetching: false,
                error: action.payload.errors,
                status: action.payload.status,
            }
        }
        case FETCH_PROFILE_FULFILLED_AT_STARTUP: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                loggedInAccount: action.payload.entities,
            }
        }
        case FETCH_PROFILE_REJECTED_AT_STARTUP: {
            return {
                ...state,
                fetching: false,
            }
        }


        case UPDATE_PROFILE_PASSWORD: {
            return {...state, submitting: true}
        }
        case UPDATE_PROFILE_PASSWORD_FULFILLED: {
            return {
                ...state,
                submitting: false,
                submitted: true,
                loggedInAccount: action.payload.entities,
                status: action.payload.status,
            }
        }
        case UPDATE_PROFILE_PASSWORD_REJECTED: {
            return {...state,
                submitting: false,
                submitted: false,
                errors: action.payload.errors,
                status: action.payload.status,
            }
        }

        case UPDATE_PROFILE_DETAILS: {
            return {...state, submitting: true}
        }
        case UPDATE_PROFILE_DETAILS_FULFILLED: {
            return {
                ...state,
                submitting: false,
                submitted: true,
                loggedInAccount: action.payload.entities,
                status: action.payload.status,
            }
        }
        case UPDATE_PROFILE_DETAILS_REJECTED: {
            return {...state,
                submitting: false,
                submitted: false,
                errors: action.payload.errors,
                status: action.payload.status,
            }
        }

        case UPDATE_PROFILE_ADDRESS: {
            return {...state, submitting: true}
        }
        case UPDATE_PROFILE_ADDRESS_FULFILLED: {
            return {
                ...state,
                submitting: false,
                submitted: true,
                loggedInAccount: action.payload.entities,
            }
        }
        case UPDATE_PROFILE_ADDRESS_REJECTED: {
            return {
                ...state,
                submitting: false,
                submitted: false,
                errors: action.payload.errors,
                status: action.payload.status,
            }
        }

        case RESET_PROFILE_ERRORS: {
            return{
                ...state,
                errors:[],
                status:"",
            }
        }
        case RESET_USER_PROFILE: {
            return{
                ...state,
                loggedInAccount : [],
                errors: [],
                fetching: false,
                fetched: false,
                submitting: false,
                submitted:false,
                error: null,
                status:"",
            }
        }

        default:
            return state;
    }
}
