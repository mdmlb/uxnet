import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();
var userInfo;
const headerWithResults = document.querySelector('.headerWithResults');
const headerNoResults = document.querySelector('.headerNoResults');
const userName2 = document.querySelector('.profile__usernameB1');
const authSignout = document.querySelector('.SignOutButton2');

onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log(user);

        const uid = user.uid;
        // Trae información de la colección de usuarios de la base de datos
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const data = docSnap.data();
            userInfo = data;
            userInfo.uid = user.uid;
            console.log(userInfo);

            // Trae información de la colección de uxSkills de la base de datos
            const docRef2 = doc(db, "uxSkills", uid);
            const docSnap2 = await getDoc(docRef2);

            if (docSnap2.exists() /*&& se cumplieron los 3 meses*/) {
                headerWithResults.classList.add('headerWithResults--show');
                if (userName2) {
                    userName2.innerText = '¡Hola, ' + userInfo.name + '!';
                }
                

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
            } else {
                headerNoResults.classList.add('headerNoResults--show');
            }

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    } else {
        // User is signed out
    }
});