import { combineReducers } from "redux"

import items from "./itemsReducer"
import category from "./categoryReducer"

export default combineReducers({
    items,
    category,
})