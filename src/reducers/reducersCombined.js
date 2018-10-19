import { combineReducers } from "redux"

import items from "./itemsReducer"
import category from "./categoryReducer"
import sortAndFilter from "./filtersReducer"
import profiles from "./profileReducer"
import accounts from "./accountReducer"

import orders from "./orderReducer"


import cart from "./cartReducer"

export default combineReducers({
    items,
    category,
    sortAndFilter,
    profiles,
    accounts,
    orders,
    cart,
});
