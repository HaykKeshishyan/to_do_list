import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/State';
import { BrowserRouter } from 'react-router-dom';


let render = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
        dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

render(store.getState())

store.subscribe(render)