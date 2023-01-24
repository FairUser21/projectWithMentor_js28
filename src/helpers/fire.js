import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDk08M8mbMT3X77lmGqD8bv_oQZ59H1bfk",
  authDomain: "js28project.firebaseapp.com",
  projectId: "js28project",
  storageBucket: "js28project.appspot.com",
  messagingSenderId: "222578495156",
  appId: "1:222578495156:web:49797bd94706e3176511e1",
  measurementId: "G-KR2BHS9ERZ",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
