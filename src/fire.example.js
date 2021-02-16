import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const fire = firebase.initializeApp(firebaseConfig);

export const auth = fire.auth();
export const db = fire.firestore();
export default fire;
