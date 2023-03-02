import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { reduxBatch } from "@manaflair/redux-batch";
import { persistStore } from "redux-persist";
import { rootReducer, rootSaga } from "./rootReducer";
import logger from "redux-logger";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: true,
  }),
  sagaMiddleware,
  logger,
];

if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: true,
  enhancers: [reduxBatch],
});

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
