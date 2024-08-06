import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { App } from "./components/App";
import { reducers } from "./reducers";

/* 
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!); */

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)


ReactDOM.render(<App />, document.querySelector('#root'));

