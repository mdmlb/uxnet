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
    updateDoc,
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

const savedProfiles = document.querySelector('.savedProfiles__container');
const theProjectName = document.querySelector('.nameproject');
const noDesign = document.querySelector('.noDesign');

const loader = document.querySelector('.loader');

loader.classList.add('loader--show');

//banner

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

            const docRef2 = doc(db, "savedProfiles", uid);
            const docSnap2 = await getDoc(docRef2);

            const parts = location.search.split('-');
            const projectCode = parts[1].replace('?', '');

            let savedProfilesList = [];
            savedProfilesList.push(docSnap2.data()[projectCode]);

            console.log(savedProfilesList[0]);

            renderResult(savedProfilesList[0], uid);

            const docRef3 = doc(db, "uxDesiredProfiles", uid);
            const docSnap3 = await getDoc(docRef3);

            theProjectName.innerHTML = docSnap3.data()[projectCode][0];

            loader.classList.remove('loader--show');

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            loader.classList.remove('loader--show');
        }

    } else {
        // User is signed out
        loader.classList.remove('loader--show');
        noDesign.innerHTML = "No hay perfiles guardados para este proyecto";
    }
});

function renderResult(list, theID) {
    savedProfiles.innerHTML = "";
    //let copy = [...list].splice(0, list.length);
    list.forEach(function (elem, index) {
        const parts = location.search.split('-');
        const selectedProject = parts[1].replace('?', '');
        const url = `comparesavedprofile.html?${elem.userID}-${selectedProject}-${elem.name}-${elem.lastname}-${elem.similarity}`;
        const newPerson = document.createElement('div');
        newPerson.classList.add('p-2');

        newPerson.innerHTML = `
        <div class="profiledesigner d-flex justify-content-center align-items-center p-3">
            <div class="p-3 d-flex justify-content-center align-items-center flex-column eventcont">
                <h2 class="event__title">${elem.name} ${elem.lastname}</h2>
                <h5 class="event__name">${elem.similarity}% de similitud</h5>
                
                <a href="${url}" type="submit" class="btn btn-primary">Ver perfil</a>
                <div style="height:2vh;"></div>
                <button class="btn btn-primary btn-delete delete__btn delete__btn">Eliminar perfil guardado</button>
            </div>
        </div>
        `;
        savedProfiles.appendChild(newPerson);

        const deleteBtn = newPerson.querySelector('.delete__btn');

        deleteBtn.addEventListener('click', async function () {

            const removedEl = list.splice(index, 1);
            console.log(removedEl);

            const parts = location.search.split('-');
            const projectCode = parts[1].replace('?', '');
            await updateDoc(doc(db, "savedProfiles", theID), {
                [projectCode]: list,
            }).then(function () {
                location.reload();
            });
            //loader.classList.add('loader--show');
            /*productsRef.doc(elem.id).delete().then(function () {
              console.log("Document successfully deleted!");
              getProducts();
            })
              .catch(function (error) {
                console.error("Error removing document: ", error);
              });*/
        });

    })
}


function rendernoresult(list) {
    savedProfiles.innerHTML = "";
    //let copy = [...list].splice(0, list.length);
    list.forEach(function (elem, index) {
        const parts = location.search.split('-');
        const selectedProject = parts[1].replace('?', '');
        const url = `recommendations.html?${elem.userID}-${selectedProject}`;
        const newPerson = document.createElement('div');
        newPerson.classList.add('p-2');

        newPerson.innerHTML = `
        <div class="profiledesigner d-flex justify-content-center align-items-center p-3">
        <h1 class="noDesign">No hay perfiles guardados para este proyecto</h1>
            <div class="p-3 d-flex justify-content-center align-items-center flex-column eventcont">
                <a href="${url}" type="submit" class="btn btn-primary">Ver recomendaciones</a>
            </div>
        </div>
        `;
        savedProfiles.appendChild(newPerson);
    })
}