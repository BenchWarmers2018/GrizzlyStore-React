const initialState = {
    accounts: [],
    fetching: false,
    fetched: false,
    error: null,
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

        default:
            state;
    }
    return state
}