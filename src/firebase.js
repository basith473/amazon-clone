import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCgL-NVyo1LtsILpMcGeRWyeyWa41Puj58",
  authDomain: "fir-4d6bc.firebaseapp.com",
  databaseURL: "https://fir-4d6bc.firebaseio.com",
  projectId: "fir-4d6bc",
  storageBucket: "fir-4d6bc.appspot.com",
  messagingSenderId: "676542500602",
  appId: "1:676542500602:web:32f39c381091e57909c343",
  measurementId: "G-B7S8WKV8NS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
