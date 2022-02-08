import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCYYrDUBsDP57pT38Kwty5mygnCXqlc9vY",
  authDomain: "react-app-cursos-5d57e.firebaseapp.com",
  projectId: "react-app-cursos-5d57e",
  storageBucket: "react-app-cursos-5d57e.appspot.com",
  messagingSenderId: "403604794244",
  appId: "1:403604794244:web:5c84d7664a4f6ad629cbd1"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}
