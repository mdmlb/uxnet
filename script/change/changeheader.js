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
const loader = document.querySelector('.loader');


//DISEÑADOR
const headerNoResults = document.querySelector('.headerNoResults');

//RECLUTADOR
const headerReclutador = document.querySelector('.headerReclutador');

loader.classList.add('loader--show');

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
            console.log(userInfo.usertype + " BUENAS");

            //DISEÑADOR APARECE EL LANDING CORRESPONDIENTE
            if (userInfo.usertype === "diseñador") {
                headerNoResults.classList.add('headerNoResults--show');
                loader.classList.remove('loader--show');
            }

            //RECLUTADOR APARECE EL LANDING CORRESPONDIENTE
            if (userInfo.usertype === "reclutador") {
                headerReclutador.classList.add('headerReclutador--show');
                loader.classList.remove('loader--show');

            }


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    } else {
        // User is signed out
    }
});

  
const authSignout = document.querySelector('.SignOutButton2');
  
if (authSignout) {
  authSignout.addEventListener('click', function (event) {
    event.preventDefault();
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.href = '../../../login.html';
    }).catch((error) => {
      // An error happened.
    });
  });
}