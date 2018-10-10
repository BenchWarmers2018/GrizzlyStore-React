import { applyMiddleware, createStore, compose } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers/reducersCombined"



const middleware = applyMiddleware(promise(), thunk, createLogger())

export default createStore(reducer, compose(middleware,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));