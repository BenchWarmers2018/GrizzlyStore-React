const initialState = {
    googleaccounts: [],
    fetching: false,
    fetched: false,
    error: null,
}

export default function reducer(state=initialState, action){

    switch (action.type) {
        case "FETCH_GOOGLE_ACCOUNTS": {
            return {...state, fetching: true}
        }
        case "FETCH_GOOGLE_ACCOUNTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_GOOGLE_ACCOUNTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                googleaccounts: action.payload,
            }
        }
        case "ADD_GOOGLE_ACCOUNT": {
            return {
                ...state,
                googleaccounts: [...state.googleaccounts, action.payload],
            }
        }
        default:
            state;
    }
    return state
}