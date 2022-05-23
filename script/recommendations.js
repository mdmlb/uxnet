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

const finalResult = document.querySelector('.formCompare__neighborhood');

let data = [];
let result = 0;
let recommendList = [];

let similarityList = [];
let sortedList = [];


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

            //Inicializar arreglo con los objetos de la base de datos 
            let allUsersResultList = [];

            const docRef2 = doc(db, "uxDesiredProfiles", uid);
            const docSnap2 = await getDoc(docRef2);

            console.log("---> DocSnap2: ", docSnap2.data());

            let allIdealProfiles = [docSnap2.data()];
            //console.log(docSnap2.data().desiredProfiles5112[1].nameRole)
            let objRespuesta = allIdealProfiles[0];
            let misllaves = Object.keys(objRespuesta);
            console.log("keys", misllaves,allIdealProfiles[0]);

            console.log(misllaves);

            console.log(objRespuesta[misllaves[0]]);
            console.log(objRespuesta[misllaves[1]]);
            console.log(objRespuesta[misllaves[2]]);

            misllaves.forEach(elem => {
                console.log();
            })

            misllaves.forEach(function (elem, index) {
                //console.log(objRespuesta[misllaves[index]][0]);
            });


            //console.log();

            //console.log("---> DocSnap2: ", docSnap2.data().desiredProfiles5112);

            //encontrar la persona en el arreglo a la que corresponde el nombre en el select
            /*let person1 = data.find(function(elem){
                return elem.Nombre == select1.value;
            })*/
            //let person1 = docSnap2.data().desiredProfiles[0].value;
            const parts = location.search.split('-');
            const selectedProject = parts[1].replace('?', '');

            //console.log(docSnap2.data().desiredProfiles5112[1].value);
            
            /*let person1 = {
                uxResearcher: docSnap2.data().selectedProject[1].value,
                contentStrategist: docSnap2.data().selectedProject[2].value,
                interactionDesigner: docSnap2.data().selectedProject[3].value,
                uiDesigner: docSnap2.data().selectedProject[4].value,
                uxLead: docSnap2.data().selectedProject[5].value,
                id: uid
            }*/

            let projectName = docSnap2.data()[selectedProject][0];
            let uxRe = docSnap2.data()[selectedProject][1].value;
            let intDesig = docSnap2.data()[selectedProject][2].value;
            console.log(" ------------> data: ", projectName, uxRe, intDesig);

            let person1 = {
                uxResearcher: docSnap2.data()[selectedProject][1].value,
                contentStrategist: docSnap2.data()[selectedProject][2].value,
                interactionDesigner: docSnap2.data()[selectedProject][3].value,
                uiDesigner: docSnap2.data()[selectedProject][4].value,
                uxLead: docSnap2.data()[selectedProject][5].value,
                id: uid
            }
            

            //console.log(" ---> person1: ", person1);

            // Obtiene datos
            const querySnapshot = await getDocs(collection(db, "uxRoles"));
            querySnapshot.forEach((doc, i) => {
                // se llaman las líneas que estén aquí para cada uno de los ítems
                //console.log(`${doc.id} => ${doc.data()}`);
                //console.log(doc.data());
                allUsersResultList.push({
                    //...doc.data().roles,
                    uxResearcher: doc.data().roles[0].value,
                    contentStrategist: doc.data().roles[1].value,
                    interactionDesigner: doc.data().roles[2].value,
                    uiDesigner: doc.data().roles[3].value,
                    uxLead: doc.data().roles[4].value,
                    id: doc.id
                });
            });


            /*let person1 = data.find(function(elem){
                return elem.Nombre == select1.value;
            })*/
            let allUsers = [];

            const querySnapshotUsers = await getDocs(collection(db, "users"));
            //console.log(" ----> Resultado de users: ", querySnapshotUsers);
            querySnapshotUsers.forEach(async (doc, i) => {
                allUsers.push({ ...doc.data(), id: doc.id });
            });
            //console.log(" ----> ( Todos los usuarios: ) : ", allUsers);


            //console.log(" ---> (cantidad de personas) : ", allUsersResultList.length);
            allUsersResultList.forEach(async (elem, i) => {
                const person2 = elem;

                let nameUser = [];

                /*const q = query(collection(db, "users"), where( documentId(), "==", elem.id));

                const querySnapshot3 = await getDocs(q);
                querySnapshot3.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data().username);
                    
                    allUsers.push(doc.data());
                    
                });

                const docRef3 = doc(db, "users", elem.id);
                const docSnap3 = await getDoc(docRef3);

                docSnap3.data().username.forEach(element => {
                    allUsers.push(element);
                });

                console.log(allUsers);*/

                let cosineSimilarity = cosSimilarity(person1, person2);

                //agrega cada elemento del arreglo a una lista 
                //console.log(person2);
                similarityList.push({
                    //...person2: todos los elementos de ese objeto los mete aquí
                    ...person2,
                    //le agrega la similitud de coseno
                    cosineSimilarity: cosineSimilarity
                })

                //elimina los elementos después del número de vecinos que seleccionó anteriormente
                //neighborhoodList = sortedList.splice(0, neighborsNumber + 1);

            });


            sortedList = getSortedRecommendations(similarityList);
            //console.log(" ----> (Lista ordenada) : ", sortedList);

            //let selected = allUsers.filter((item)=>{sortedList[0].id == item.id});
            let fullList = [];
            for (let i = 0; i < sortedList.length; i++) {
                for (let j = 0; j < allUsers.length; j++) {
                    if (sortedList[i].id == allUsers[j].id) {
                        fullList.push({ ...sortedList[i], email: allUsers[j].email, name: allUsers[j].name, lastname: allUsers[j].lastname });
                    }
                }
            }

            //console.log("todos los usuarios ---> ", fullList);

            //console.log("Seleccionado ---> ", selected);
            renderResult(fullList);



        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    } else {
        // User is signed out
    }
});


function cosSimilarity(person1, person2) {
    let dotproduct = 0;
    let mA = 0;
    let mB = 0;
    let elemsNumber = Object.keys(person1);

    for (let i = 0; i < elemsNumber.length - 1; i++) {
        let num = elemsNumber[i];
        dotproduct += (person1[num] * person2[num]);
        mA += (person1[num] * person1[num]);
        mB += (person2[num] * person2[num]);
    }

    mA = Math.sqrt(mA);
    mB = Math.sqrt(mB);
    let result = (dotproduct) / ((mA) * (mB));
    let similarity = result.toFixed(2);

    return similarity;
}


//organizar los elementos del arreglo, de acuerdo a su similitud coseno
function getSortedRecommendations(list) {
    let copy = list.sort((a, b) => {
        return b.cosineSimilarity - a.cosineSimilarity;
    })
    return copy;
}


function renderResult(list) {
    finalResult.innerHTML = "";
    //let copy = [...list].splice(0, list.length);
    list.forEach(elem => {
        const parts = location.search.split('-');
        const selectedProject = parts[1].replace('?', '');
        const url = `compareProfile.html?${elem.id}-${selectedProject}-${elem.username}-${toPercent(elem.cosineSimilarity)}`;
        const newPerson = document.createElement('div');
        newPerson.classList.add('d-flex', 'p-4');
        //newPerson.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-row', );
        //newPerson.style.add('padding: 2vh');

        newPerson.innerHTML = `
            <div class="profiledesigner d-flex justify-content-center align-items-center p-3">
                <div class="p-3 d-flex justify-content-center align-items-center flex-column eventcont">
                    <h2 class="event__title">${elem.name} ${elem.lastname}</h2>
                    <h5 class="event__name">${toPercent(elem.cosineSimilarity)}% de coincidencia</h5>
                    <a href="${url}" type="submit" class="btn btn-primary">Ver perfil</a>
                </div>
            </div>
        `;
        finalResult.appendChild(newPerson);
    })
}

function toPercent(value) {
    return Math.round(value * 100);
} 