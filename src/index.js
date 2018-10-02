import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase";


firebase.initializeApp({
    apiKey: "AIzaSyAj2rJNz3nFOC8hJS8b0mCzAkyqumwlMYY",
    authDomain: "grizzly-store-bw.firebaseapp.com",
    databaseURL: "https://grizzly-store-bw.firebaseio.com",
    projectId: "grizzly-store-bw",
    storageBucket: "grizzly-store-bw.appspot.com",
    messagingSenderId: "925784889995"
})


ReactDOM.render(
    <Provider store={store}><BrowserRouter>
        <App />
    </BrowserRouter></Provider>
    , document.getElementById('root'));
registerServiceWorker();



