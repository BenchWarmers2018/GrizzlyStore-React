import axios from 'axios';
import { FETCH_CATEGORIES, FETCH_CATEGORIES_FULFILLED, FETCH_CATEGORIES_REJECTED, FETCH_CATEGORY_ITEMS, FETCH_CATEGORY_ITEMS_FULFILLED, FETCH_CATEGORY_ITEMS_REJECTED, URL } from '../CONSTANTS'

export function fetchCategories() {
    return function (dispatch) {

        dispatch({type: FETCH_CATEGORIES});

        axios.get(URL+"/category/allwithoutitems")
            .then((response)=> {
                dispatch({type: FETCH_CATEGORIES_FULFILLED, payload: response.data.entities});
            })
            .catch((err)=> {
                dispatch({type: FETCH_CATEGORIES_REJECTED, payload: err})
            })
    }
}

export function addCategory(category) {
  return function (dispatch) {
    dispatch({type: "ADD_CATEGORY"});

    axios.post("http://localhost:10005/category/add", category)
      .then(result => {
        console.log(result);
        console.log(result.data);
        dispatch({type: "ADD_CATEGORY_SUCCESSFUL", payload: result.data.entities})
      })
      .catch((error) => {
        console.log(error);
        if (error.message === "Network Error" )
          dispatch({type: "SERVER_NOT_FOUND", payload: 'The server is currently offline. Please try again later.'})
        else
          dispatch({type: "ADD_CATEGORY_REJECTED", payload: error.response.data.errors})
      })
  }
}
