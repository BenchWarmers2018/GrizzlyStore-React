import {
    ADD_TO_CART, ADD_TO_CART_FULFILLED, ADD_TO_CART_REJECTED,
    FETCH_CART, FETCH_CART_FULFILLED, FETCH_CART_REJECTED, FETCH_SINGLE_CART_ITEM,
    FETCH_SINGLE_CART_ITEM_FULFILLED, FETCH_SINGLE_CART_ITEM_REJECTED, REMOVE_FETCHED_ITEMS_FOR_CART
} from "../CONSTANTS";

const InitialState = {
    cart: [],
    fetching : false,
    fetched : false,
    errors : [],
    cartItems: [],
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
        //FETCH items for cart
        case FETCH_SINGLE_CART_ITEM:
            return {...state, fetching: true}

        case FETCH_SINGLE_CART_ITEM_REJECTED: {
            return {...state, fetching: false, error: action.payload}
        }
        case FETCH_SINGLE_CART_ITEM_FULFILLED:{
            console.log(action.payload);
            return{
                ...state,
                fetching: false,
                fetched: true,
                cartItems: action.payload,
            }
        }
        case REMOVE_FETCHED_ITEMS_FOR_CART:{
            return {
                ...state,
                cartItems: [],
            }
        }

        default:
            return state;
    }
}
