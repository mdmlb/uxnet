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
const theProjectName = document.querySelector('.projectName');

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
        const parts = location.search.split('-');
        const selectedProject = parts[1].replace('?', '');
        const url = `compareSavedProfile.html?${elem.userID}-${selectedProject}-${elem.username}-${elem.similarity}`;
        const newPerson = document.createElement('div');
        newPerson.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-row');

        newPerson.innerHTML = `
        <p class="bestskill">${elem.username} - ${elem.similarity}% de similitud</p>
        <a href="${url}" class="header__link">Ver perfil</a>
        <button class="delete__btn">Eliminar perfil guardado</button>
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