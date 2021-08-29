import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyCKJs56nWNo23rpeBZ7QxBFOhOGdAVSopo",
  authDomain: "coffee-hours.firebaseapp.com",
  projectId: "coffee-hours",
  storageBucket: "coffee-hours.appspot.com",
  messagingSenderId: "472548446869",
  appId: "1:472548446869:web:1315e30e04f5d7f187819c"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
