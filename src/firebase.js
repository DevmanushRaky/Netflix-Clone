import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArfw1PYX3nKAn7bl2jDXmlOJXIJd09b3U",
  authDomain: "netflix-clone-42ea9.firebaseapp.com",
  projectId: "netflix-clone-42ea9",
  storageBucket: "netflix-clone-42ea9.appspot.com",
  messagingSenderId: "150562866455",
  appId: "1:150562866455:web:cc8d5e2ff9fdbcbcdee352",
  measurementId: "G-LV9G09LBL0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };