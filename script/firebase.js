import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZXx1KNSgIagV1t8PDooa5RLQGA4qzQKs",
  authDomain: "uxnet-6743d.firebaseapp.com",
  projectId: "uxnet-6743d",
  storageBucket: "uxnet-6743d.appspot.com",
  messagingSenderId: "301959608864",
  appId: "1:301959608864:web:0a50c27ee5434e79939a45",
  measurementId: "G-CY5LCV8WS5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase = app