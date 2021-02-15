import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/style.css';
import App from './App';
import HomePt from "./componentsPt/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/pt" component={HomePt} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
