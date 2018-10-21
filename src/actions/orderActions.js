import axios from 'axios';
import {
    PROCESSING_ORDER_SUCCESSFUL,
    PROCESSING_ORDER,
    PROCESS_ORDER_UNSUCCESSFUL,
    URL_ORDER, RESET_ORDER
} from "../CONSTANTS";

export function processOrder(cart) {
    return function (dispatch) {
        dispatch({type: PROCESSING_ORDER});


        axios.post(URL_ORDER + "/order/process", cart)
            .then((res) => {
                dispatch({type: PROCESSING_ORDER_SUCCESSFUL, payload: res.data});
            })
            .catch((error) => {
                dispatch({type: PROCESS_ORDER_UNSUCCESSFUL, payload: error})
            })
    }
}

export function resetOrder() {
    return function (dispatch) {
        dispatch({type: RESET_ORDER});
    }
}