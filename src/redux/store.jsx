import { applyMiddleware, createStore } from "redux";
import {persistStore} from 'redux-persist'
import rootReducer from "./root.reducer";
import logger from 'redux-logger'


const middlewares = []

if(process.env.NODE_ENV !== 'production'){
    middlewares.push(logger)
}
 
export const store = createStore(rootReducer,applyMiddleware(...middlewares))

export const persistor = persistStore(store)

