import { firebase } from "../script/firebase.js";
import {
    getFirestore, doc, setDoc, getDoc,
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
//import { submitFile } from "./storage.js";

const firestore = getFirestore(firebase)
export const db = firestore

// User functions
export const createUser = async function (uid, name, lastname, email) {
    const userRef = doc(firestore, 'users', uid);
    const newUser = {
        id: uid,
        name: name,
        lastname: lastname,
        email: email,
    }
    await setDoc(userRef, newUser).then(() => {
        localStorage.setItem('currentuser', JSON.stringify(newUser))
        window.location = 'index.html'
    }).catch((error) => {
        console.log(error)
    });
}

export const getUserFromDb = async function (uid) {
    const userRef = doc(firestore, "users", uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) {
        const user = docSnap.data()
        localStorage.setItem('currentuser', JSON.stringify(user))
        window.location = 'index.html'
        console.log("Document data: " + user.name + ", " + user.role);
    } else {
        console.log("No existe este usuario");
    }
}