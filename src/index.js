import React from 'react';
import ReactDOM from 'react-dom';
import './styles/css/style.css';
import App from './App';
import HomePt from "./componentsPt/Home/Home";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN } from './constants';
import ServiceEN from './components/Services/Service'
import ServicePT from './componentsPt/Services/Service'

import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';





const httpLink = createHttpLink({
  uri: 'http://localhost:4001'
});


const authLink = setContext((_, { headers }) => {
  const token = true;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});



ReactDOM.render(
  <BrowserRouter>

             <ApolloProvider client={client}>
             <Switch>
               
                 <Route exact path='/' component={App} />
                 <Route exact path='/service/:id' component={ServiceEN} />
                 <Route exact path='/pt' component={HomePt} />
                 <Route exact path='/pt/service/:id' component={ServicePT} />
             </Switch>
              </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 
