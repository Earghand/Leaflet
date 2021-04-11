import firebase from 'firebase';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAJo3FBmvPypRYefYW65G3ZyZIlIxoJpXY",
  authDomain: "leaflet-d7978.firebaseapp.com",
  projectId: "leaflet-d7978",
  storageBucket: "leaflet-d7978.appspot.com",
  messagingSenderId: "377199180805",
  appId: "1:377199180805:web:1f50c19ef202e595d0706c"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;