import * as firebase from 'firebase';

const fireBaseConfig = {
  apiKey: "AIzaSyBCZfHHgEd0iYkGpXwFnPJLHrYHDOKmovQ",
  authDomain: "doctor-doctor-e69b6.firebaseapp.com",
  databaseURL: "https://doctor-doctor-e69b6.firebaseio.com",
  projectId: "doctor-doctor-e69b6",
  storageBucket: "doctor-doctor-e69b6.appspot.com",
  // messagingSenderId: "345689833495",
  appId: "1:345689833495:web:afdc743b5d1a5af8a51c52"
};

const firebaseApp = firebase.initializeApp(fireBaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.googleAuthProvider()

export {db, auth, googleAuthProvider};