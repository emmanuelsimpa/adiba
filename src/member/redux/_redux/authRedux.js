import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { put, takeLatest } from "redux-saga/effects";
import { getUserByToken } from "./authCrud";

export const actionTypes = {
  Login: "[Login] Action",
  Logout: "[Logout] Action",
  Register: "[Register] Action",
  UserRequested: "[Request User] Action",
  UserLoaded: "[Load User] Auth API",
  OrgLoaded: "REQUEST ORG",
  Error: "Set Error",
  RESET_TOKEN: "[RESET] TOKEN",
};

const initialAuthState = {
  user: undefined,
  organization: undefined,
  authToken: undefined,
  error: null,
};

function forwardTo(location) {
  history.push(location);
}

export const reducer = persistReducer(
  {
    storage,
    key: "v706-demo3-auth",
    whitelist: ["user", "authToken", "organization"],
  },
  (state = initialAuthState, action) => {
    switch (action.type) {
      case actionTypes.Login: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }

      case actionTypes.Register: {
        const { authToken } = action.payload;

        return { authToken, user: undefined };
      }

      case actionTypes.Logout: {
        // TODO: Change this code. Actions in reducer aren't allowed.
        return initialAuthState;
      }
      case actionTypes.RESET_TOKEN: {
        const { authToken } = action.payload;

        return { ...state, authToken };
      }
      case actionTypes.UserLoaded: {
        const { user } = action.payload;
        return { ...state, user };
      }

      case actionTypes.OrgLoaded: {
        const { organization } = action.payload;
        return { ...state, organization };
      }

      case actionTypes.Error: {
        const { error } = action.payload;
        return { ...state, error };
      }

      default:
        return state;
    }
  }
);

export const actions = {
  // login: (authToken) => ({ type: actionTypes.Login, payload: { authToken } }),
  login: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
  register: (data) => ({
    type: actionTypes.Register,
    payload: { data },
  }),
  logout: () => ({ type: actionTypes.Logout }),
  requestUser: (user) => ({
    type: actionTypes.UserRequested,
    payload: { user },
  }),
  fulfillUser: (user) => ({ type: actionTypes.UserLoaded, payload: { user } }),
  fulfillOrg: (data) => ({
    type: actionTypes.OrgLoaded,
    payload: { organization: data },
  }),
  fulfillToken: (authToken) => ({
    type: actionTypes.RESET_TOKEN,
    payload: { authToken: authToken },
  }),
};

export function* saga() {
  yield takeLatest(actionTypes.Login, function* loginSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.Register, function* registerSaga() {
    yield put(actions.requestUser());
  });

  yield takeLatest(actionTypes.UserRequested, function* userRequested() {
    const { data } = yield getUserByToken();

    if (data.data.type === "administrator") {
      yield put(actions.fulfillUser(data.data));
    }
  });
}
