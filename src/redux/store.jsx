import { applyMiddleware, createStore } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
