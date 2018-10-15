import {
    ADD_TO_CART, ADD_TO_CART_FULFILLED, ADD_TO_CART_REJECTED,
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
        case (ADD_TO_CART):
            return{...state, fetching: true};

        case (ADD_TO_CART_REJECTED):
            return{
                ...state, errors: action.payload, fetching: false, fetched: false,
            };
        case (ADD_TO_CART_FULFILLED):
            return{
                ...state, cart: action.payload, fetching: false, fetched: true,
            };

        default:
            return state;
    }
}
