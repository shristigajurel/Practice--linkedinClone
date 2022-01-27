import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaC85248YJXyWg5v6QRdc1fq0N_inM6lQ",
  authDomain: "linkedin-clone-15041.firebaseapp.com",
  projectId: "linkedin-clone-15041",
  storageBucket: "linkedin-clone-15041.appspot.com",
  messagingSenderId: "30102633004",
  appId: "1:30102633004:web:9ba48eea2ac00957d4af89",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
