import firebase from 'firebase';

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

export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()