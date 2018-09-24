const initialState = {
    account: [],
    fetching: false,
    fetched: false,
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_ACCOUNT":
            return {
                ...state,
                fetching: true
            };
        case "FETCH_ACCOUNT_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true,
                account: action.payload,
            };
        default:
            return state;
    }

    return state

}
