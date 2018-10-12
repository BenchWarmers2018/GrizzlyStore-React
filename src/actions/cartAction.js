import axios from "axios";
import {FETCH_CART, FETCH_CART_FULFILLED, FETCH_CART_REJECTED, URL_ORDER} from "../CONSTANTS";

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