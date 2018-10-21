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
    AUTHENTICATE_USER_REJECTED, RESET_USER_ACCOUNT,
    GET_ALL_USERS,
    GET_ALL_USERS_REJECTED,
    GET_ALL_USERS_SUCCESSFUL,
    TOGGLE_USER_ADMIN,
    TOGGLE_USER_ADMIN_REJECTED,
    TOGGLE_USER_ADMIN_SUCCESSFUL

} from "../CONSTANTS";

const initialState = {
    accounts: [],
    userAccounts: [],
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
    togglingAdminStatus: false,
    toggledAdminStatus: false,
    toggleStatusError: [],
    toggleStatusMessage: []
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
        case GET_ALL_USERS: {
          return {...state, fetching: true}
        }
        case GET_ALL_USERS_REJECTED: {
          return {...state, fetching: false, error: action.payload}
        }
        case GET_ALL_USERS_SUCCESSFUL: {
          return {
            ...state,
            fetching: false,
            fetched: true,
            userAccounts: action.payload
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
        case TOGGLE_USER_ADMIN: {
          return {...state, togglingAdminStatus: true}
        }
        case TOGGLE_USER_ADMIN_REJECTED: {
          return {...state, toggledAdminStatus: false, toggleStatusError: action.payload}
        }
        case TOGGLE_USER_ADMIN_SUCCESSFUL: {
          const { idAccount, accountEmailAddress, accountIsAdmin, lastModified } = action.payload
          const newAccounts = [...state.userAccounts]
          const accountToUpdate = newAccounts.findIndex(account => account.accountEmailAddress === accountEmailAddress)
          newAccounts[accountToUpdate] = action.payload;

          return {
              ...state,
              togglingAdminStatus: false,
              toggledAdminStatus: true,
              toggleStatusMessage: "Account status updated successfully!",
              userAccounts: newAccounts,
          }
        }
        default:
            return state;
    }
    return state
}
