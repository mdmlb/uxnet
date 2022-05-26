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

const project1 = document.querySelector('.project1');
const project2 = document.querySelector('.project2');

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

            console.log(misllaves);

            console.log(objRespuesta[misllaves[0]]);

            misllaves.forEach(function (elem, index) {
                console.log(objRespuesta[misllaves[index]][0]);
            });

            project1.innerHTML = docSnap2.data("proyecto 2")[0];

            //renderResult(misllaves, objRespuesta);
            //noDesign.classList.add('noDesign--hide');
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
    list.forEach(function (elem, index) {
        const url = `recommendations.html?${another[list[index]][0]}-${elem}`;
        const url2 = `savedProfiles.html?${another[list[index]][0]}-${elem}`;
        const newProject = document.createElement('div');
        newProject.classList.add('p-3');

        newProject.innerHTML = `
        <div class="profiledesigner d-flex justify-content-center align-items-center p-3">
            <div class="p-3 d-flex justify-content-center align-items-center flex-column eventcont">
                <h2 class="event__title proyectName">${another[list[index]][0]}</h2>
                <a href="${url}" type="submit" class="btn btn-primary">Ver recomendaciones</a>
                <div style="height:2vh;"></div>
                <a href="${url2}" type="submit" class="btn btn-primary">Ver perfiles guardados</a>
            </div>
        </div>
        
        `;
        projects.appendChild(newProject);
    });
}