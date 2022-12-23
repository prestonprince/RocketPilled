import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import { SideBarModalProvider } from './context/SideBarModal';

import * as teamActions from "./store/teams";

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store; //expose store to window in development
  window.teamActions = teamActions;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <SideBarModalProvider>
          <App /> 
        </SideBarModalProvider>
      </ModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
