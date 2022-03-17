import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  getDocs,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const auth = getAuth()
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
//console.log(app);

///////////////////////////////////////////////////////////////////////////////

// obtiene la base de daos del proyecto creado
const db = getFirestore();
//const usersRef = db.collection('users');

const btn = document.querySelector('.btnlogin');
const register = document.querySelector('.formSign');

//console.log(register+"dioclick")


register.addEventListener('submit', function (event) {
  event.preventDefault()

  const name = register.name.value
  const lastname = register.lastname.value
  const email = register.email.value
  const password = register.password.value
  const passwordC = register.passwordC.value

  //console.log("no sirve")

  if (password === passwordC) {

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {

        const uid = userCredential.user.uid;

        //console.log(uid)

        await setDoc(doc(db, "users", uid), {
          name: name,
          lastname: lastname,
          email: email,
        }).then(function () {
          window.location.href = '../index.html';
        });
        console.log("Document written with ID: ", docRef.id);
        console.log(docRef)

      }).catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error)
        console.log(errorMessage)
        console.log(errorCode)

        // ..
      });


  } else {
    alert("Passwords don't match");
  }

});

/*

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
  signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  // An error happened.
});
  
  
  */