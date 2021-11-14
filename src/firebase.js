// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBISom3TWAOCA2bGvw7NUUIpKf75YGS9x4",
  authDomain: "messenger-clone-29ccb.firebaseapp.com",
  projectId: "messenger-clone-29ccb",
  storageBucket: "messenger-clone-29ccb.appspot.com",
  messagingSenderId: "57016123761",
  appId: "1:57016123761:web:3f88b3c52a29865aaf36d0",
  measurementId: "G-SJ823KE5JY"
  })

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();


export {db,provider, auth, storage}