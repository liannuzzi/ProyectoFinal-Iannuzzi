import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA-rrksxhG1FNYs5cwSEOCHRHfVFTrmDSU",
  authDomain: "cornicione-9dd35.firebaseapp.com",
  projectId: "cornicione-9dd35",
  storageBucket: "cornicione-9dd35.appspot.com",
  messagingSenderId: "528179674705",
  appId: "1:528179674705:web:a32bfa80eb520805dec270"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

