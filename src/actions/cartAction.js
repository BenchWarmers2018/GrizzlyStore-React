import axios from "axios";
import {
    ADD_TO_CART,
    ADD_TO_CART_FULFILLED, ADD_TO_CART_REJECTED,
    FETCH_CART,
    FETCH_CART_FULFILLED,
    FETCH_CART_REJECTED,
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