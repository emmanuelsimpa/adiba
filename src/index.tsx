import * as React from "react";
import { createRoot } from "react-dom/client";
import { createInstance, Piral, createStandardApi } from "piral";

import { setupShell } from "./_app/app";
import { createPageLayoutsApi } from "piral-page-layouts";
import { errors, layout } from "./_app/shared/components/layouts/default";
import Landing from "./landing";
import { Provider } from "react-redux";
// import { store } from "./reduxsss/store";
import store, { persistor } from "./redux/store";
import * as _redux from "./redux";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";

// change to your feed URL here (either using feed.piral.cloud or your own service)
// const feedUrl = "https://feed.piral.cloud/api/v1/pilet/empty";
const feedUrl = "https://feed.piral.cloud/api/v1/pilet/adiba_enterprise_portal";

export const instance = createInstance({
  state: {
    components: layout,
    errorComponents: errors,
    // routes: {
    //   "/": Landing,
    // },
  },
  plugins: [...createStandardApi(), createPageLayoutsApi()],
  requestPilets() {
    return fetch(feedUrl)
      .then((res) => res.json())
      .then((res) => res.items);
  },
});

setupShell(instance.root);

// _redux.mockAxios(axios, store);
_redux.setupAxios(axios, store);

const root = createRoot(document.querySelector("#app"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Piral instance={instance} />
    </PersistGate>
  </Provider>
);
