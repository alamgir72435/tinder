import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCqlR6KQxzeIi0BsbPV3OKxZ1oRTg5p2qQ",
  authDomain: "tinder-clone-by-saif.firebaseapp.com",
  projectId: "tinder-clone-by-saif",
  storageBucket: "tinder-clone-by-saif.appspot.com",
  messagingSenderId: "986528384806",
  appId: "1:986528384806:web:36d3221032c8d2ad2763e7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
