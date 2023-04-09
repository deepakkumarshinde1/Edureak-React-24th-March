import React from "react"; // node_modules
import ReactDOM from "react-dom/client"; // node_modules
import "./index.css"; // custom file
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("edureka-react")); // react v18
root.render(
  <React.Fragment>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.Fragment>
);
// render ==> inject our code to Browser DOM
// VDOM => react :: logical virtual tree created for react app
// ReactDOM ==> VDOM environment

// React.StrictMode => development want , waring , error , suggestion
// <React.Fragment> => error
// <> ==> JSX Fragment
