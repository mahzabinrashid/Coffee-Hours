import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyC4tfW019zJHqfm7o6TwY8Hkhnppd0_PRM",
  authDomain: "coffee-hours-b75db.firebaseapp.com",
  projectId: "coffee-hours-b75db",
  storageBucket: "coffee-hours-b75db.appspot.com",
  messagingSenderId: "58961334782",
  appId: "1:58961334782:web:6c2f98ad737a1ea72170af"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
