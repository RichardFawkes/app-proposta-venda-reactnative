import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import {
  getFirestore,
  collection,
  onSnapshot,
  query,
  where,
  doc,
  deleteField,
  deleteDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD2Du7vnSF9Y7Ajxx3JUnySc433ibOeZN0',
  authDomain: 'app-proposta-de-vendas.firebaseapp.com',
  projectId: 'app-proposta-de-vendas',
  storageBucket: 'app-proposta-de-vendas.appspot.com',
  messagingSenderId: '975544486776',
  appId: '1:975544486776:web:79ac15d107ff987ac6568d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {
  app,
  db,
  getFirestore,
  collection,
  onSnapshot,
  doc,
  query,
  where,
  deleteField,
  deleteDoc,
  setDoc,
  updateDoc,
};
