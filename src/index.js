import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyC8fvuOyJnHd2QzWSL0SUl6Q82yvtcYsWc",
  authDomain: "cart-web-25087.firebaseapp.com",
  projectId: "cart-web-25087",
  storageBucket: "cart-web-25087.appspot.com",
  messagingSenderId: "240364582731",
  appId: "1:240364582731:web:a6f21399c59ae15ebddace"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

