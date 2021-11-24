import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBbHscHmBLhzz7bZCErho8d2GG1SH_ATm0",
  authDomain: "nextfire-7b1b6.firebaseapp.com",
  projectId: "nextfire-7b1b6",
  storageBucket: "nextfire-7b1b6.appspot.com",
  messagingSenderId: "880034081703",
  appId: "1:880034081703:web:1d00236e144cd3fe16a482",
  measurementId: "G-MLP6Y4BF9L",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
