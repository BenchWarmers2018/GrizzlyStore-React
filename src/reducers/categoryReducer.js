import { FETCH_CATEGORIES, FETCH_CATEGORIES_REJECTED, FETCH_CATEGORIES_FULFILLED, FETCH_ITEM_CATEGORY_REJECTED, FETCH_ITEM_CATEGORY_FULFILLED, FETCH_ITEM_CATEGORY } from "../CONSTANTS";

const InitialState = {
    categories : [],
    itemCategory : [],
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
                ...state, errors: action.payload, fetching: false, fetched: false,
            }
        case (FETCH_CATEGORIES_FULFILLED):
            return{
                ...state, categories: action.payload, fetching: false, fetched: true,
            }
        case (FETCH_ITEM_CATEGORY):
            return{...state, fetching: true}

        case (FETCH_ITEM_CATEGORY_REJECTED):
            return{
                ...state, errors: action.payload, fetching: false, fetched: false,
            }
        case (FETCH_ITEM_CATEGORY_FULFILLED):
            return{
                ...state, itemCategory: action.payload, fetching: false, fetched: true,
            }
        default:
            return state;

    }
    return state;

}