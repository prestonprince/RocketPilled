import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from './context/Modal';
import { SideBarModalProvider } from './context/SideBarModal';
import { AcceptMatchModalProvider } from './context/AcceptMatchModal';
import NotificationProvider from './context/Notification'

import * as teamActions from "./store/teams";
import * as matchActions from './store/matches'
import MatchIdProvider from './context/Match';

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  window.store = store; //expose store to window in development
  window.teamActions = teamActions;
  window.matchActions = matchActions;
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <SideBarModalProvider>
          <AcceptMatchModalProvider>
            <NotificationProvider>
              <MatchIdProvider>
                <App /> 
              </MatchIdProvider>
            </NotificationProvider>
          </AcceptMatchModalProvider>
        </SideBarModalProvider>
      </ModalProvider>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
