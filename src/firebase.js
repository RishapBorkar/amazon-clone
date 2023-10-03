// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDKx96g2j41ngdbP_oVZphphKNtJrSBrSI",
  authDomain: "clone-961b0.firebaseapp.com",
  projectId: "clone-961b0",
  storageBucket: "clone-961b0.appspot.com",
  messagingSenderId: "882118681010",
  appId: "1:882118681010:web:7e4e4d8995e13637d844ab",
  measurementId: "G-9SDTNHPKY4",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth, firebaseApp };
