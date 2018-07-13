import React from 'react'
import ReactDom from 'react-dom'
import './style.css'
import Routing from './router';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDom.render(
  <Router>
    <Route path="/" component={Routing} />
  </Router>,
  document.getElementById('root')
);
