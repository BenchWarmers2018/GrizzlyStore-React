const initialState = {
    profile: {},
    updates: '',
    fetching: false,
    submitting: false,
    fetched: false,
    submitted: false,
    error: null,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "FETCH_PROFILE": {
            return {...state, fetching: true}
        }
        case "FETCH_PROFILE_FULFILLED": {
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
        case "SUBMIT_PROFILE": {
            return {...state, submitting: true}
        }
        case "SUBMIT_PROFILE_ACCEPTED": {
            return {
                ...state,
                submitted: true,
                submitting: false,
                profile: action.payload.entities,
                updates: action.payload.message
            }
        }
        case "SUBMIT_PROFILE_REJECTED": {
            return {...state, submitting: false, updates: action.payload}
        }

        default:
            return state;
    }
}
