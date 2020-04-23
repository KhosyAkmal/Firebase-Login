import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDl8iWHHl-Y1YyRTF4xkOUxiK8JRsEYZPY",
    authDomain: "fir-login-27e06.firebaseapp.com",
    databaseURL: "https://fir-login-27e06.firebaseio.com",
    projectId: "fir-login-27e06",
    storageBucket: "fir-login-27e06.appspot.com",
    messagingSenderId: "579967989351",
    appId: "1:579967989351:web:c5f071843f15ec51dd46c2",
    measurementId: "G-58MFY2R8Z2"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDB = myFirebase.firestore();
export const db = baseDB;
