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
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

import {
    getAuth,
    signOut,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js";

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

            const docRef2 = doc(db, "savedFutureProfiles", uid);
            const docSnap2 = await getDoc(docRef2);

            let savedProfilesList = [];
            savedProfilesList.push(docSnap2.data().savedFutureProfiles);

            console.log(savedProfilesList[0]);

            renderResult(savedProfilesList[0], uid);

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
        const url = `compareFutureSavedProfile.html?${elem.userID}-${elem.username}`;
        const newPerson = document.createElement('div');
        newPerson.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-row');

        newPerson.innerHTML = `
        <p class="bestskill">${elem.username}</p>
        <a href="${url}" class="header__link">Ver perfil</a>
        <button class="delete__btn">Eliminar perfil guardado</button>
        `;
        savedProfiles.appendChild(newPerson);

        const deleteBtn = newPerson.querySelector('.delete__btn');

        deleteBtn.addEventListener('click', async function () {
            
            const removedEl = list.splice(index, 1);
            console.log(removedEl);
            
            await updateDoc(doc(db, "savedFutureProfiles", theID), {
                savedFutureProfiles: list,
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