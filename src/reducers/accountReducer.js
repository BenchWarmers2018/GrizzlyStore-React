const initialState = {
    accounts: [],
    fetching: false,
    fetched: false,
    error: null,
}

export default function reducer(state=initialState, action){

    switch (action.type) {
        case "FETCH_ACCOUNTS": {
            return {...state, fetching: true}
        }
        case "FETCH_ACCOUNTS_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        case "FETCH_ACCOUNTS_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                accounts: action.payload,
            }
        }
        case "ADD_ACCOUNT": {
            return {
                ...state,
                accounts: [...state.accounts, action.payload],
            }
        }
        default:
            state;
    }
    return state
}
