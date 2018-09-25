const initialState = {
    profile: {},
    fetching: false,
    fetched: false,
    error: null,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_PROFILE": {
            return {...state, fetching: true}
        }
        case "FETCH_PROFILE_FULFILLED": {
            console.log("HEYA MAN " + action.payload.entities[0].profileFirstName);
            return {
                ...state,
                fetching: false,
                fetched: true,
                profile: action.payload.entities
            }
        }
        case "FETCH_PROFILE_REJECTED": {
            return {...state, fetching: false, error: action.payload}
        }
        default:
            return state;
    }
}
