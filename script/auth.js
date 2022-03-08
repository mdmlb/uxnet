import { firebase } from "./firebase.js";

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

export const getCurrentSignedInUser = function () {
    return auth.currentUser
}  