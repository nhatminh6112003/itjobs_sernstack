import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { store, persistor } from "~/redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Modal from 'react-modal';
import {
  QueryClient,
  QueryClientProvider,  
} from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
const queryClient = new QueryClient();
Modal.setAppElement('#root');
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </QueryClientProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
