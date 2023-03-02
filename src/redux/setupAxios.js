// import { refresh_token } from "../app/modules/Auth/_redux/authCrud";
// import * as auth_actions from "../app/modules/Auth/_redux/authRedux";
import { refresh_token } from "../member/redux/_redux/authCrud";
import * as auth_actions from "../member/redux/_redux/authRedux";

// import { AxiosAuthRefreshRequestConfig } from "axios-auth-refresh";
import createAuthRefreshInterceptor from "axios-auth-refresh";

// Function that will be called to refresh authorization

export default function setupAxios(axios, store) {
  const refreshAuthLogic = (failedRequest) =>
    refresh_token()
      .then((response) => {
        var data = response.data;
        if (data.status === "Success") {
          store.dispatch(
            auth_actions.actions.fulfillToken(data.data.access_token)
          );
          failedRequest.response.config.headers["Authorization"] =
            "Bearer " + data.data.access_token;
          return Promise.resolve();
        }
        return Promise.resolve();
      })
      .catch((error) => {
        console.log("Refresh token error", error);
        store.dispatch(auth_actions.actions.logout());
        return Promise.reject(error);
      });

  axios.interceptors.request.use(
    (config) => {
      const {
        auth: { authToken },
      } = store.getState();

      console.log("Auth token", authToken);

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (err) => Promise.reject(err)
  );

  createAuthRefreshInterceptor(axios, refreshAuthLogic);
}
