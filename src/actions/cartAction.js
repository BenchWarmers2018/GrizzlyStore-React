import axios from "axios";
import {
    ADD_TO_CART,
    ADD_TO_CART_FULFILLED,
    ADD_TO_CART_REJECTED, DELETE_CART,
    DELETE_CART_FULFILLED, DELETE_CART_REJECTED,
    DELETE_ITEM_FROM_CART,
    DELETE_ITEM_FROM_CART_FULFILLED,
    DELETE_ITEM_FROM_CART_REJECTED,
    FETCH_CART,
    FETCH_CART_FULFILLED,
    FETCH_CART_REJECTED,
    FETCH_SINGLE_CART_ITEM,
    FETCH_SINGLE_CART_ITEM_FULFILLED,
    FETCH_SINGLE_CART_ITEM_REJECTED,
    REMOVE_FETCHED_ITEMS_FOR_CART,
    URL_ITEM,
    URL_ORDER
} from "../CONSTANTS";

export function fetchCart(idAccountForeign) {
    return function (dispatch) {
        dispatch({type: FETCH_CART});

        const cart = { idAccountForeign: idAccountForeign };
        axios.post(URL_ORDER + "/cart/items", cart)
            .then(result => {
                console.log(result.data);
                dispatch({type: FETCH_CART_FULFILLED, payload: result.data})
            })
            .catch((error) => {
                console.log(error);
                dispatch({type: FETCH_CART_REJECTED, payload: error})
            })
    }
}

export function addItemToCart(cart) {
    return function (dispatch) {
        dispatch({type: ADD_TO_CART});

        axios.post(URL_ORDER + "/cart/add", cart)
            .then(result => {
                console.log(result.data);
                dispatch({type: ADD_TO_CART_FULFILLED, payload: result.data})
            })
            .catch((error) => {
                console.log(error);
                dispatch({type: ADD_TO_CART_REJECTED, payload: error})
            })
    }
}

export function fetchSingleItemForCart(ids) {
    return function(dispatch) {
        dispatch({type: FETCH_SINGLE_CART_ITEM});
        const arr = { "itemIdList": ids };
        axios.post(URL_ITEM + "/items/multiple/ids", arr)
            .then((response) => {
                dispatch({type: FETCH_SINGLE_CART_ITEM_FULFILLED, payload: response.data.entities})
            })
            .catch((err) => {
                dispatch({type: FETCH_SINGLE_CART_ITEM_REJECTED, payload: err})
            })
    }
}

export function removeFetchedItemsForCart() {
    return function(dispatch) {
        dispatch({type: REMOVE_FETCHED_ITEMS_FOR_CART});
    }
}

export function deleteItemFromCart(cart) {
    return function (dispatch) {
        dispatch({type: DELETE_ITEM_FROM_CART});
        axios.post(URL_ORDER + "/cart/deleteitem", cart)
            .then(result => {
                console.log(result.data);
                dispatch({type: DELETE_ITEM_FROM_CART_FULFILLED, payload: result.data})
            })
            .catch((error) => {
                console.log(error);
                dispatch({type: DELETE_ITEM_FROM_CART_REJECTED, payload: error})
            })
    }
}

export function deleteCart(cart) {
    return function (dispatch) {
        dispatch({type: DELETE_CART});
        axios.post(URL_ORDER + "/cart/deletecart", cart)
            .then(result => {
                console.log(result.data);
                dispatch({type: DELETE_CART_FULFILLED, payload: result.data})
            })
            .catch((error) => {
                console.log(error);
                dispatch({type: DELETE_CART_REJECTED, payload: error})
            })
    }
}
