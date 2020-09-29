import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyBbBhMlDp8ZWwInw6K4jrN91XhAJthoTbo",
  authDomain: "paramo45-fd869.firebaseapp.com",
  databaseURL: "https://paramo45-fd869.firebaseio.com",
  projectId: "paramo45-fd869",
  storageBucket: "paramo45-fd869.appspot.com",
}


const fire = firebase.initializeApp(config);

export default fire;