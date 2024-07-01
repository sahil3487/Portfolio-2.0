
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfnZLQaPfc_cXrGcndwDt6jpyWwqh-PsM",
  authDomain: "portfolio2o.firebaseapp.com",
  projectId: "portfolio2o",
  storageBucket: "portfolio2o.appspot.com",
  messagingSenderId: "962502305448",
  appId: "1:962502305448:web:97909e3928af37d1a5849d",
  measurementId: "G-YJE399WZPW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);





// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export { firebase };

