import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {persist, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate loading={null} persistor={persist}>
              <HashRouter>
                  <App />
              </HashRouter>
          </PersistGate>
      </Provider>

  </React.StrictMode>
);