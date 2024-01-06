// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA8OIDDLLdlOV7pfbq4qR_ORYMtIU_xt0c',
  authDomain: 'e-commerce-application-19838.firebaseapp.com',
  projectId: 'e-commerce-application-19838',
  storageBucket: 'e-commerce-application-19838.appspot.com',
  messagingSenderId: '129452312514',
  appId: '1:129452312514:web:ce7263cb835ebcaf50385b',
  measurementId: 'G-W9EWWM3WR9',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };
