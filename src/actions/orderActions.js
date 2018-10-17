import axios from 'axios';
import {URL_USER, PROCESSING_ORDER_SUCCESSFUL, PROCESSING_ORDER, PROCESS_ORDER_UNSUCCESSFUL} from "../CONSTANTS";

export function processOrder(cart) {
    return function (dispatch) {
        dispatch({type: PROCESSING_ORDER});

        axios.post(URL_USER + "/process/order", cart)
            .then((res) => {
                dispatch({type: PROCESSING_ORDER_SUCCESSFUL, payload: res.data});
            })
            .catch((error) => {
                dispatch({type: PROCESS_ORDER_UNSUCCESSFUL, payload: error})
            })
    }
}