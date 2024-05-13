import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyAipI3DmFavlA_86yx4advqMmesgtL2STg",
    authDomain: "notification-app-fcb68.firebaseapp.com",
    projectId: "notification-app-fcb68",
    storageBucket: "notification-app-fcb68.appspot.com",
    messagingSenderId: "820622399152",
    appId: "1:820622399152:web:0e8d4037d2fd1f9faa8d75",
    measurementId: "G-P9YG91B2YG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

// Setup emulators for local development
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' ) {
    auth.useEmulator("http://127.0.0.1:9099");
    db.useEmulator('127.0.0.1', 8080);
}

export { db, auth};