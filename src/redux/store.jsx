import { applyMiddleware, createStore } from "redux";
import {persistStore} from 'redux-persist'
import rootReducer from "./root.reducer";
import logger from 'redux-logger'


const middlewares = [logger]
 
export const store = createStore(rootReducer,applyMiddleware(...middlewares))

export const persistor = persistStore(store)

