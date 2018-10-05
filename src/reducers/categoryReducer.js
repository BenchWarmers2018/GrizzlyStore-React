import { FETCH_CATEGORIES, FETCH_CATEGORIES_REJECTED, FETCH_CATEGORIES_FULFILLED } from "../CONSTANTS";

const InitialState = {
    categories : [],
    categoryItems : [],
    fetching : false,
    fetched : false,
    errors : [],
}

export default function reducer(state=InitialState, action) {

    switch (action.type) {
        case (FETCH_CATEGORIES):
            return{...state, fetching: true}

        case (FETCH_CATEGORIES_REJECTED):
            return{
                ...state, errors: action.payload,
            }
        case (FETCH_CATEGORIES_FULFILLED):
            return{
                ...state, categories: action.payload,
            }
        default:
            return state;

    }
    return state;

}