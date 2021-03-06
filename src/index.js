import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store, persistor} from './store';
import registerServiceWorker from './registerServiceWorker';
import firebase from "firebase";
import Spinner from "./components/microComponents/Spinner";


firebase.initializeApp({
    apiKey: "AIzaSyAj2rJNz3nFOC8hJS8b0mCzAkyqumwlMYY",
    authDomain: "grizzly-store-bw.firebaseapp.com",
    databaseURL: "https://grizzly-store-bw.firebaseio.com",
    projectId: "grizzly-store-bw",
    storageBucket: "grizzly-store-bw.appspot.com",
    messagingSenderId: "925784889995"
})


export const API_BASE_URL = 'http://localhost:5000';
export const ACCESS_TOKEN = "accessToken";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Spinner/>} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
