import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyAMxJroD1i6OF8p1G9WraZr0bUYGTQ1-GI",
  authDomain: "coffee-hours-technova.firebaseapp.com",
  projectId: "coffee-hours-technova",
  storageBucket: "coffee-hours-technova.appspot.com",
  messagingSenderId: "808103017841",
  appId: "1:808103017841:web:4b836a74a65ae9c84c4ad0",
  measurementId: "G-GK2SDTEBBP"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
