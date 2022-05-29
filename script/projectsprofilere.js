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

const projects = document.querySelector('.projectsprofilere');

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

            const docRef2 = doc(db, "uxDesiredProfiles", uid);
            const docSnap2 = await getDoc(docRef2);

            let allIdealProfiles = [docSnap2.data()];
            //console.log(docSnap2.data().desiredProfiles5112[1].nameRole);
            let objRespuesta = allIdealProfiles[0];
            let misllaves = Object.keys(objRespuesta);
            console.log("keys", misllaves,allIdealProfiles[0]);

            console.log("MIS LLAVES" + misllaves);

            console.log("que es esto "+objRespuesta[misllaves[0]]);

            misllaves.forEach(function (elem, index) {
                console.log(objRespuesta[misllaves[index]][0]);
            });

            let items = misllaves.slice(0, 3);

            renderResult(items, objRespuesta);
            loader.classList.remove('loader--show');

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    } else {
        // User is signed out
    }
});

function renderResult(list, another) {
    projects.innerHTML = "";
    list.map(function (elem, index) {
        const url = `./html/recruiter/projects/recommendations.html?${another[list[index]][0]}-${elem}`;
        const newProject = document.createElement('div');
        newProject.classList.add('p-2');

        newProject.innerHTML = `
        <div
            class="proj__container d-flex flex-row justify-content-center align-items-center">
            <small class="proyectName"
                style="width: 100%; font-size: 100%; padding: 0 15px;">${another[list[index]][0]}</small>
            <a href="${url}" type="submit" class="btn btn-primary" style="width: 33%;">Ver más</a>
        </div>
        
        `;
        projects.appendChild(newProject);
    });
}