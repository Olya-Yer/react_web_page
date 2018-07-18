import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';


ReactDom.render(<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>,
  document.getElementById('root')
);
