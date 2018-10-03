const initialState = {
    categories: [],
    adding: false,
    added: false,
    error: null,
}


export default function reducer(state=initialState, action) {
  switch (action.type) {
      case "ADD_CATEGORY": {
          return {...state, adding: true}
      }
      case "ADD_CATEGORY_REJECTED": {
          return {...state, adding: false, error: action.payload}
      }
      case "ADD_CATEGORY_SUCCESSFUL": {
          return {
              ...state,
              adding: false,
              added: true,
              categories: action.payload,
          }
      }
      default:
          return state;
    }

    return state;
  }
