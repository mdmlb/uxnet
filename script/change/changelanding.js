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
const userName2 = document.querySelector('.profile__usernameB1');
const authSignout = document.querySelector('.SignOutButton2');
const loader = document.querySelector('.loader');


//DISEÑADOR
const headerWithResults = document.querySelector('.headerWithResults');
const headerNoResults = document.querySelector('.headerNoResults');
const maindesigner = document.querySelector('.maindesigner');

//RECLUTADOR
const headerReclutador = document.querySelector('.headerReclutador');
const mainReclutador = document.querySelector('.mainreclutador');
const noProyect = document.querySelector('.reclulandproyect__not');
const yesProyect = document.querySelector('.reclulandproyect__got');
const noSavedProfile = document.querySelector('.reclulandprofilesave__not');
const savedProfile = document.querySelector('.reclulandprofilesave__got');

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

            // Trae información de la colección de uxSkills de la base de datos
            const docRef2 = doc(db, "uxSkills", uid);
            const docSnap2 = await getDoc(docRef2);

            //DISEÑADOR APARECE EL LANDING CORRESPONDIENTE
            if (userInfo.usertype === "diseñador") {
                if (docSnap2.exists() /*&& se cumplieron los 3 meses*/) {
                    headerWithResults.classList.add('headerWithResults--show');
                    maindesigner.classList.add('maindesigner--show');
                    loader.classList.remove('loader--show');
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
                    maindesigner.classList.add('maindesigner--show');
                    loader.classList.remove('loader--show');
                }
            }

            // Trae información de la colección de uxDesiredProfiles de la base de datos
            const docRef3 = doc(db, "uxDesiredProfiles", uid);
            const docSnap3 = await getDoc(docRef3);

            // Trae información de la colección de uxDesiredProfiles de la base de datos
            const docRef4 = doc(db, "savedFutureProfiles", uid);
            const docSnap4 = await getDoc(docRef4);

            //RECLUTADOR APARECE EL LANDING CORRESPONDIENTE
            if (userInfo.usertype === "reclutador") {
                if (docSnap3.exists() /*YA TIENE PROCESOS*/) {
                    headerReclutador.classList.add('headerReclutador--show');
                    mainReclutador.classList.add('mainreclutador--show');
                    
                    console.log("pues pues")
                    if (docSnap4.exists()) {
                        yesProyect.classList.add('reclulandproyect__got--show');
                        savedProfile.classList.add('reclulandprofilesave__got--show');
                        loader.classList.remove('loader--show');
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
                        headerReclutador.classList.add('headerReclutador--show');
                        mainReclutador.classList.add('mainreclutador--show');
                        yesProyect.classList.add('reclulandproyect__got--show');
                        noSavedProfile.classList.add('reclulandprofilesave__not--show');
                        loader.classList.remove('loader--show');

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
                    }


                } else {

                    if (docSnap4.exists()) {
                        headerReclutador.classList.add('headerReclutador--show');
                        mainReclutador.classList.add('mainreclutador--show');
                        noProyect.classList.add('reclulandproyect__not--show');
                        savedProfile.classList.add('reclulandprofilesave__got--show');
                        loader.classList.remove('loader--show');

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
                        headerReclutador.classList.add('headerReclutador--show');
                        mainReclutador.classList.add('mainreclutador--show');
                        noProyect.classList.add('reclulandproyect__not--show');
                        noSavedProfile.classList.add('reclulandprofilesave__not--show');
                        loader.classList.remove('loader--show');

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
                    }

                }
            }


        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    } else {
        // User is signed out
    }
});