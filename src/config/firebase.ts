import { initializeApp } from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD2Du7vnSF9Y7Ajxx3JUnySc433ibOeZN0',
  authDomain: 'app-proposta-de-vendas.firebaseapp.com',
  projectId: 'app-proposta-de-vendas',
  storageBucket: 'app-proposta-de-vendas.appspot.com',
  messagingSenderId: '975544486776',
  appId: '1:975544486776:web:79ac15d107ff987ac6568d',
};

// Initialize Firebase
const database = initializeApp(firebaseConfig);

export default database;
