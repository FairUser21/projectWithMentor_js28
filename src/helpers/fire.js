import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCzyVROKSHyBFFDwHcIXY4HnSIqBxor9H4",
    authDomain: "testproject-87ef6.firebaseapp.com",
    projectId: "testproject-87ef6",
    storageBucket: "testproject-87ef6.appspot.com",
    messagingSenderId: "323012244774",
    appId: "1:323012244774:web:7c9673669ddff1c3473de7",
    measurementId: "G-VJ8CRD939Z",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
