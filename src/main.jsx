
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './custom.scss'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import mainstore from './reducers/store';
import 'bootstrap/dist/js/bootstrap.bundle'
import "bootstrap-icons/font/bootstrap-icons.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Provider store={mainstore}>
  
  
  <App />
  </Provider>
  </BrowserRouter>
    
  
);


