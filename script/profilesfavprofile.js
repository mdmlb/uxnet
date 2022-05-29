import {
    getFirestore,
    doc,
    documentId,
    collection,
    query,
    where,
    addDoc,
    getDocs,
    onSnapshot,
    updateDoc,
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

const savedProfiles = document.querySelector('.profilesfavprofile');
const theProjectName = document.querySelector('.projectName');

const loader = document.querySelector('.loader');

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

            const docRef2 = doc(db, "savedFutureProfiles", uid);
            const docSnap2 = await getDoc(docRef2);

            let savedProfilesList = [];
            savedProfilesList.push(docSnap2.data().savedFutureProfiles);

            console.log("esto que" + savedProfilesList[0]);

            //let items = savedProfilesList.slice(0, 3);

            renderResult(savedProfilesList[0], uid);

            loader.classList.remove('loader--show');

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    } else {
        // User is signed out
    }
});

function renderResult(list, theID) {
    savedProfiles.innerHTML = "";
    //let copy = [...list].splice(0, list.length);
    list.forEach(function (elem, index) {
        const url = `./html/recruiter/projects/compareProfile.html?${elem.userID}-${elem.name}`;
        const newPerson = document.createElement('div');
        newPerson.classList.add('fav__container','d-flex', 'justify-content-center', 'align-items-center', 'flex-column', 'm-2', 'p-4');

        newPerson.innerHTML = `
            <small class="proyectName" style="font-size: 100%; padding: 0 15px;">${elem.name}</small>

            <div style="height: 3vh;"></div>

            <a href="${url}" type="submit" class="btn btn-primary">Ver más</a>
        `;
        savedProfiles.appendChild(newPerson);

    })
}