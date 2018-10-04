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


