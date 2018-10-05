import {ACCESS_TOKEN} from "../index";

const initialState = {
    accounts: [],
    token : {},
    userAccount: null,
    fetching: false,
    fetched: false,
    authenticating: false,
    authenticated: false,
    error: [],
    tokenError: [],
    summaryAccount: {},
}

export default function reducer(state=initialState, action){

    switch (action.type) {
        case "CREATE_ACCOUNT": {
            return {...state, fetching: true}
        }
        case "CREATE_ACCOUNT_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "CREATE_ACCOUNT_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                accounts: action.payload,
            }
        }

        case "GET_CURRENT_USER_REJECTED":
        {
            return {
                ...state,
                tokenError: action.payload,
            }
        }
        case "GET_CURRENT_USER_FULFILLED": {
            return {
                ...state,
                summaryAccount: action.payload,
            }
        }

        case "AUTHENTICATE_USER": {
          return {...state, authenticating: true}
        }
        case "AUTHENTICATE_USER_REJECTED": {
          return {...state, authenticating: false, error: action.payload}
        }
        case "AUTHENTICATING_USER_SUCCESSFUL": {
          return {
            ...state,
            authenticating: false,
            authenticated: true,
            token: action.payload,
          }
        }
        case "SERVER_NOT_FOUND": {
          return {
            ...state,
            error: action.payload
          }
        }
        default:
            return state;
    }
    return state
}
