import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
    getDoc,
    updateDoc,
    arrayUnion,
    setDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import {
    getAuth,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();
var userInfo;



//BEFORE FINISH
//PORTAFOLIO
const btn = document.querySelector('.btncompletang');
let formportafolio = document.querySelector('.formportafolio');

//console.log(formportafolio+"dioclick")

btn.addEventListener('click', function (event) {
    event.preventDefault()

    const linkportafolio = formportafolio.linkportafolio.value

    console.log("no sirve")
    /* */
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
                console.log(userInfo);

                if (userInfo) {
                    await updateDoc(doc(db, "users", uid), {
                        link: linkportafolio,
                    })

                        .then(function () {
                            //window.location.href = './html/home.html';
                            if (dark.classList.contains("dark--active") && modal.classList.contains("modal")) {
                                dark.classList.remove("dark--active");
                                modal.classList.remove("modal-content")
                            }
                        });
                }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        } else {
            // User is signed out
            // ...
            console.log("nonas")
        }
    });

});


//TIMELINE
const btntimeline = document.querySelector('.btncompletang2');
let formtimeline = document.querySelector('.formtimeline');
let timeline = [];

btntimeline.addEventListener('click', function (event) {
    event.preventDefault()

    const year = formtimeline.year.value
    const title = formtimeline.title.value
    const description = formtimeline.description.value

    const job = {
        year: year,
        title: title,
        description: description,
    }
    
    timeline.push(job);

    console.log("no sirve")
    /* */
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
                console.log(userInfo);

                if (userInfo) {
                    await updateDoc(doc(db, "timeline", uid), {
                        experience: timeline,
                    })

                        .then(function () {
                            //window.location.href = './html/home.html';
                            if (dark.classList.contains("dark--active") && modal2.classList.contains("modal2")) {
                                dark.classList.remove("dark--active");
                                modal2.classList.remove("modal2-content")
                            }
                        });
                }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        } else {
            // User is signed out
            // ...
        }
    })

});