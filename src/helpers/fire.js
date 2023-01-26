import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyCM290GqkdO2w7Fc3e5IPKWqFQF2wNhWOM",
  authDomain: "jsproject28.firebaseapp.com",
  projectId: "jsproject28",
  storageBucket: "jsproject28.appspot.com",
  messagingSenderId: "972469110534",
  appId: "1:972469110534:web:d2b4ac6652205eb7200087",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
