import {
  FETCH_ITEM_CATEGORY,
  FETCH_ITEM_CATEGORY_FULFILLED,
  FETCH_ITEM_CATEGORY_REJECTED,
  FETCH_CATEGORIES,
  FETCH_CATEGORIES_FULFILLED,
  FETCH_CATEGORIES_REJECTED,
  URL_ITEM,
  ADD_CATEGORY,
  ADD_CATEGORY_REJECTED,
  ADD_CATEGORY_SUCCESSFUL,
  EDIT_CATEGORY,
  EDIT_CATEGORY_REJECTED,
  EDIT_CATEGORY_SUCCESSFUL,
  SERVER_NOT_FOUND,
  DELETE_CATEGORY,
  DELETE_CATEGORY_REJECTED,
  DELETE_CATEGORY_SUCCESSFUL
} from '../CONSTANTS'

const InitialState = {
    categories : [],
    itemCategory : [],
    fetching : false,
    fetched : false,
    errors : [],
    messages: [],
    adding : false,
    added : false,
    updating: false,
    updated: false,
    editMessages: [],
    deleting: false,
    deleted: false,
    deleteSuccessMessage: [],
    deleteErrorMessage: [],
    deletedCategory: null
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
                categories: [...state.categories, action.payload[0]],
                messages: "Category added successfully!",
            }
        case (EDIT_CATEGORY):
          return {...state, updating: true }
        case (EDIT_CATEGORY_REJECTED):
              return {...state, updated: false, updating: false, editMessages: action.payload}
        case (EDIT_CATEGORY_SUCCESSFUL): {
              const { idCategory, categoryName, categoryDescription, last_modified } = action.payload
              const newCategories = [...state.categories]
              const categoryToUpdate = newCategories.findIndex(category => category.idCategory === idCategory)
              newCategories[categoryToUpdate] = action.payload;

              return {
                  ...state,
                  updating: false,
                  updated: true,
                  editMessages: "Category updated successfully!",
                  categories: newCategories,
              }
        }
        case (DELETE_CATEGORY):
              return {...state, deleting: true }
        case (DELETE_CATEGORY_REJECTED):
              return {...state, deleted: false, deleting: false, deleteErrorMessage: action.payload}
        case (DELETE_CATEGORY_SUCCESSFUL): {
              const { idCategory, categoryName, categoryDescription, last_modified } = action.payload
              const newCategories = [...state.categories]
              const categoryToDelete = newCategories.findIndex(category => category.idCategory === idCategory)
              newCategories.splice(categoryToDelete, 1)

              return {
                  ...state,
                  deleting: false,
                  deleted: true,
                  deletedCategory: action.payload,
                  deleteSuccessMessage: "Category deleted successfully!",
                  categories: newCategories,
              }
        }

        default:
            return state;
    }
    return state;

}
