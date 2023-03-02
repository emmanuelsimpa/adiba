import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

// import * as auth from "../app/modules/Auth/_redux/authRedux";
import * as auth from "../member/redux/_redux/authRedux";

export const rootReducer = combineReducers({
  auth: auth.reducer,
});

export function* rootSaga() {
  yield all([auth.saga()]);
}
