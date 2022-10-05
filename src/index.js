import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {Toaster} from 'react-hot-toast';
import {store} from "./redux-toolkit/store";
import {ApolloProvider} from "@apollo/client";
import {client} from "./data/client";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ApolloProvider client={client}>
        <Provider store={store}>
           <Toaster/>
           <App />
        </Provider>
     </ApolloProvider>
  </React.StrictMode>
);
