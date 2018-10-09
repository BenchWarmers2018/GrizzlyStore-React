import { FETCH_CATEGORIES, FETCH_CATEGORIES_REJECTED, FETCH_CATEGORIES_FULFILLED, ADD_CATEGORY, ADD_CATEGORY_REJECTED, ADD_CATEGORY_SUCCESSFUL, SERVER_NOT_FOUND, EDIT_CATEGORY, EDIT_CATEGORY_REJECTED, EDIT_CATEGORY_SUCCESSFUL } from "../CONSTANTS";

const InitialState = {
    categories : [],
    categoryItems : [],
    fetching : false,
    fetched : false,
    errors : [],
    messages: [],
    adding : false,
    added : false,
    updating: false,
    updated: false
}

export default function reducer(state=InitialState, action) {

    switch (action.type) {
        case (FETCH_CATEGORIES):
            return{...state, fetching: true}

        case (FETCH_CATEGORIES_REJECTED):
          return {
            ...state, errors: action.payload,
          }
        case (FETCH_CATEGORIES_FULFILLED):
          return{
            ...state, categories: action.payload,
          }
        case (ADD_CATEGORY):
          return {...state, adding: true}
        case (ADD_CATEGORY_REJECTED):
            return {...state, added: false, adding: false, messages: action.payload}
        case (SERVER_NOT_FOUND):
                return {...state, adding: false, messages: action.payload}
        case (ADD_CATEGORY_SUCCESSFUL):
            return {
                ...state,
                adding: false,
                added: true,
                categories: action.payload,
                messages: "Category added successfully!",
            }
        case (EDIT_CATEGORY):
          return {...state, updating: true }
        case (EDIT_CATEGORY_REJECTED):
              return {...state, updated: false, updating: false, messages: action.payload}
        case (EDIT_CATEGORY_SUCCESSFUL):
              return {
                ...state,
                updating: false,
                updated: true,
                categories: action.payload,
                messages: "Category updated successfully!",
             }
        default:
            return state;
    }
    return state;

}
