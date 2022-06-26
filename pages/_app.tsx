/* eslint-disable no-underscore-dangle */
import { store, persistor } from "@/core/redux/store";
import "@/styles/global.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Component {...pageProps} />
    </PersistGate>
  </Provider>
);

export default MyApp;
