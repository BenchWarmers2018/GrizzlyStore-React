import { combineReducers } from "redux"

import items from "./itemsReducer"
import category from "./categoryReducer"
import sortAndFilter from "./filtersReducer"

export default combineReducers({
    items,
    category,
    sortAndFilter,
})