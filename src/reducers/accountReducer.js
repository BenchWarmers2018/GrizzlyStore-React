const initialState = {
    accounts: [],
    account: null,
    fetching: false,
    fetched: false,
    authenticating: false,
    authenticated: false,
    error: [],
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
                account: action.payload,
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
            userAccount: action.payload,
          }
        }
        case "SERVER_NOT_FOUND": {
          return {
            ...state,
            error: action.payload
          }
        }
        default:
            state;
    }
    return state
}
