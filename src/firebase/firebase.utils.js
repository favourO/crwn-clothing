import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'


const config = {
  apiKey: 'AIzaSyBngG9VK985MWLhXQzk_d8Vwo8DxA6G7ls',
  authDomain: 'crwn-db-b86ba.firebaseapp.com',
  databaseURL: 'https://crwn-db-b86ba.firebaseio.com',
  projectId: 'crwn-db-b86ba',
  storageBucket: 'crwn-db-b86ba.appspot.com',
  messagingSenderId: '112399952108',
  appId: '1:112399952108:web:1cab836c27c28d9fbe9dc9',
  measurementId: 'G-L6ZP5BBR7S',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;