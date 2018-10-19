import {ACCESS_TOKEN} from "../index";
import {
    FETCH_GOOGLE_ACCOUNTS,
    FETCH_GOOGLE_ACCOUNTS_FULFILLED,
    FETCH_GOOGLE_ACCOUNTS_REJECTED, GET_CURRENT_USER, GET_CURRENT_USER_FULFILLED, GET_CURRENT_USER_REJECTED,
    GOOGLE_USER,
    NORMAL_USER,
    CREATE_ACCOUNT,
    CREATE_ACCOUNT_REJECTED,
    CREATE_ACCOUNT_FULFILLED,
    SERVER_NOT_FOUND,
    AUTHENTICATING_USER_SUCCESSFUL,
    AUTHENTICATE_USER,
    AUTHENTICATE_USER_REJECTED, RESET_USER_ACCOUNT

} from "../CONSTANTS";

const initialState = {
    accounts: [],
    token : {},
    fetching: false,
    fetched: false,
    authenticating: false,
    authenticated: false,
    error: [],
    createAccountError: [],
    tokenError: [],
    loggedInUser: null,
    userType: "",
    continueLogin: false,
}

export default function reducer(state=initialState, action){

    switch (action.type) {
        case CREATE_ACCOUNT: {
            return {...state, fetching: true}
        }
        case CREATE_ACCOUNT_REJECTED: {
            return {...state, fetching: false, createAccountError: action.payload}
        }
        case CREATE_ACCOUNT_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                accounts: action.payload,
            }
        }
        case GET_CURRENT_USER: {
            return {...state}
        }
        case GET_CURRENT_USER_REJECTED:
        {
            return {
                ...state,
                tokenError: action.payload,
            }
        }
        case GET_CURRENT_USER_FULFILLED: {
            return {
                ...state,
                loggedInUser: action.payload,
                userType: NORMAL_USER,
            }
        }

        /* For Google accounts */
        case FETCH_GOOGLE_ACCOUNTS: {
            return {...state, fetching: true}
        }
        case FETCH_GOOGLE_ACCOUNTS_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCH_GOOGLE_ACCOUNTS_FULFILLED: {
            return {
                ...state,
                fetching: false,
                fetched: true,
                loggedInUser: action.payload,
                userType: GOOGLE_USER,
            }
        }

        case AUTHENTICATE_USER: {
          return {...state, fetching: true, authenticating: true}
        }
        case AUTHENTICATE_USER_REJECTED: {
          return {...state, fetching: false, authenticating: false, error: action.payload}
        }
        case AUTHENTICATING_USER_SUCCESSFUL: {
          return {
            ...state,
              fetching: false,
              fetched: true,
            authenticating: false,
            authenticated: true,
            continueLogin: true,
            token: action.payload,
          }
        }
        case SERVER_NOT_FOUND: {
          return {
            ...state,
              fetching: false,
            error: action.payload
          }
        }
        case RESET_USER_ACCOUNT: {
            return{
                ...state,
                accounts: [],
                token : {},
                fetching: false,
                fetched: false,
                authenticating: false,
                authenticated: false,
                error: [],
                createAccountError: [],
                tokenError: [],
                loggedInUser: null,
                userType: "",
                continueLogin: false,
            }
        }
        default:
            return state;
    }
    return state
}
