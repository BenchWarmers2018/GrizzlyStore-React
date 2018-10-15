import {
    ADD_TO_CART,
    FETCH_CART, FETCH_CART_FULFILLED, FETCH_CART_REJECTED
} from "../CONSTANTS";

const InitialState = {
    cart: [],
    fetching : false,
    fetched : false,
    errors : [],
};

export default function reducer(state=InitialState, action) {

    switch (action.type) {
        case (FETCH_CART):
            return{...state, fetching: true};

        case (FETCH_CART_REJECTED):
            return{
                ...state, errors: action.payload, fetching: false, fetched: false,
            };
        case (FETCH_CART_FULFILLED):
            return{
                ...state, cart: action.payload, fetching: false, fetched: true,
            };

        default:
            return state;
    }
}
