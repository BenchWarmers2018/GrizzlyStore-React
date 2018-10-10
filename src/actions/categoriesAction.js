import axios from 'axios';
import { FETCH_ITEM_CATEGORY, FETCH_ITEM_CATEGORY_FULFILLED, FETCH_ITEM_CATEGORY_REJECTED, FETCH_CATEGORIES, FETCH_CATEGORIES_FULFILLED, FETCH_CATEGORIES_REJECTED, FETCH_CATEGORY_ITEMS, FETCH_CATEGORY_ITEMS_FULFILLED, FETCH_CATEGORY_ITEMS_REJECTED, URL_ITEM } from '../CONSTANTS'

export function fetchCategories() {
    return function (dispatch) {

        dispatch({type: FETCH_CATEGORIES});

        axios.get(URL_ITEM+"/category/allwithoutitems")
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
        axios.post(URL_ITEM+"/category/add", category)
            .then(result => {
                console.log(result);
                console.log(result.data);
                dispatch({type: "ADD_CATEGORY_SUCCESSFUL", payload: result.data.entities})
            })
            .catch((error) => {
                console.log(error);
                if (error.message === "Network Error")
                    dispatch({
                        type: "SERVER_NOT_FOUND",
                        payload: 'The server is currently offline. Please try again later.'
                    })
                else
                    dispatch({type: "ADD_CATEGORY_REJECTED", payload: error.response.data.errors})
            })
    }
}

export function fetchCategoriesforItem(id) {
    return function (dispatch) {

        dispatch({type: FETCH_ITEM_CATEGORY});

        axios.get(URL_ITEM+"/category/itemid?itemid="+id)
            .then((response)=> {
                dispatch({type: FETCH_ITEM_CATEGORY_FULFILLED, payload: response.data.entities});
            })
            .catch((err)=> {
                dispatch({type: FETCH_ITEM_CATEGORY_REJECTED, payload: err})
            })
    }

}
