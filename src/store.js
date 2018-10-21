import { applyMiddleware, createStore, compose } from "redux"

import { createLogger } from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reducer from "./reducers/reducersCombined"

const persistConfig = {
    key: 'root',
    storage,
}
const middleware = applyMiddleware(promise(), thunk, createLogger())
//Persistor for data persistence.
const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, middleware);
export const persistor = persistStore(store)

