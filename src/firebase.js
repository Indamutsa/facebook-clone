import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXwwAL1bfZVf4gW78UfTLnjOyvz0SblDo",
  authDomain: "facebook-clone-38153.firebaseapp.com",
  projectId: "facebook-clone-38153",
  storageBucket: "facebook-clone-38153.appspot.com",
  messagingSenderId: "731563724444",
  appId: "1:731563724444:web:8532d5e3630c1bd6522759",
  measurementId: "G-ENW5SHDRTB",
};

// Connecting to the backend -- | Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
