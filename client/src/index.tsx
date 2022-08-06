import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './app/layout/App';
import { store, StoreContext } from './app/mobx/store';
import './index.css';
import 'react-alice-carousel/lib/alice-carousel.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserHistory } from 'history';



const history = createBrowserHistory()


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router history={history}>
    <React.StrictMode>
      <StoreContext.Provider value={store}>
        <App />
      </StoreContext.Provider >
    </React.StrictMode>
  </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
