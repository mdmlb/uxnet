/*import { firebase } from "./firebase.js";

import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
import { createUser, getUserFromDb } from "./firestore.js";

const auth = getAuth()

export const login = function ( email, password, name, lastname) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            createUser(user.uid, name, lastname, email)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode + ": " + errorMessage)
            switch (errorCode) {
                case "auth/email-already-in-use":
                    alert("Parece que el correo ya está registrado")
                    break;

                default:
                    alert("Ha ocurrido un error, intenta de nuevo más tarde")
                    break;
            }
        });
}

export const signIn = function (email, password) {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        getUserFromDb(user.uid)
        console.log(user.uid + " ha iniciado sesion")
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        switch (errorCode) {
            case "auth/user-not-found":
                alert("Parece que no hay un usuario registrado con este correo")
                break;

            case "auth/wrong-password":
                alert("La contraseña es incorrecta")
                break;

            default:
                break;
        }
    });
}

/*
export const logOut = function () {
    signOut(auth).then(() => {
        localStorage.clear()
        window.location = 'login.html'
    }).catch((error) => {
        // An error happened.
        console.log("No salio")
    });
}*/

/*export const getCurrentSignedInUser = function () {
    return auth.currentUser
}  */

import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc
  } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
  
  import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
  
  const auth = getAuth();
  const db = getFirestore();
  const userName = document.querySelector('.profile__usernameB');
  const birth = document.querySelector('.profile__birth');
  const email = document.querySelector('.profile__email');
  const portafolio = document.querySelector('.profile__portafolio');
  var userInfo;
  
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log(user);
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();
          userInfo = data;
          userInfo.uid = user.uid;
  
          if (userName) {
            userName.innerText = '¡Hola, ' + data.name + '!';
            email.innerHTML = data.email;
            portafolio.innerHTML = data.link;
          }
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      
    } else {
      // User is signed out
      // ...
    }
  });
  
  const authSignout = document.querySelector('.SignOutButton');
  
  if (authSignout) {
    authSignout.addEventListener('click', function (event) {
      event.preventDefault();
      signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = './login.html';
      }).catch((error) => {
        // An error happened.
      });
    });
  }
  