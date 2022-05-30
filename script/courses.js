import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc,
    updateDoc
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

const recommendedCourses = document.querySelector('.formacionprofesional');

function renderCourses(list) {
    recommendedCourses.innerHTML = '';
    list.forEach(function (elem, index) {
        const url = `./html/growth/detail-ac.html?${list[index][0]}-${elem.courseName}`;
        const newCourse = document.createElement('div');
        newCourse.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-row');

        newCourse.innerHTML = `
        <div class="event__cont d-flex justify-content-center align-items-center p-3 m-4">
            <div class="p-3 d-flex justify-content-center align-items-center flex-column eventcont">
                <h2 class="event__title">${elem.courseName}</h2>
                <h5 class="event__name">${elem.place}</h5>
                <a href="${elem.ir}" type="submit" class="btn btn-primary">Ver más</a>
            </div>
        </div>
        `;

        recommendedCourses.appendChild(newCourse);
    });
}


window.addEventListener('load', function () {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log(user);

            const uid = user.uid;
            // Esto sirve cuando haya que poner el nombre de la persona
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {

                console.log("Document data habilidades:", docSnap.data());
                const data = docSnap.data();
                userInfo = data;
                userInfo.uid = user.uid;

                const docRef2 = doc(db, "uxSkills", uid);
                const docSnap2 = await getDoc(docRef2);


                let allIdealProfiles = [docSnap2.data()];
                //console.log(docSnap2.data().desiredProfiles5112[1].nameRole);
                let objRespuesta = allIdealProfiles[0];
                let misllaves = Object.keys(objRespuesta);


                const docRef3 = doc(db, "courses", uid);
                const docSnap3 = await getDoc(docRef3);

                //Inicializar arreglo con los objetos de la base de datos 
                let objectsList = [];
                //Inicializar arreglo con los objetos de la base de datos ordenada
                let orderedList = [];
                //Inicializar arreglo con solo las peores habilidades
                let worstSkills = [];
                let coursesList = [];

                console.log("algo " + docRef2)
                console.log("algo2 " + [docSnap2.data()])

                async function getSkills() {

                    objectsList = [];
                    //Por cada elemento del arreglo de usuarios se agrega al arreglo de objectList
                    docSnap2.data().skills.forEach((item) => {
                        objectsList.push(item);
                    });

                    const querySnapshot = await getDocs(collection(db, "courses"));
                    querySnapshot.forEach((doc) => {
                        coursesList.push(doc.data());
                        //console.log(`${doc.id} => ${doc.data()}`);
                        console.log(coursesList);
                    });

                    //Mete en el arreglo todas las habilidades ordenadas de mayor a menor
                    orderedList = objectsList.sort(function (a, b) {
                        return b.value - a.value;
                    });

                    //Si se quiere que se muestren todas las habilidades ordenadas se hace esta linea
                    //renderSkills(orderedList, skillList);
                    //Para pintar las mejores habilidades

                    //Para traer los últimos 3 elementos del arreglo ordenado  
                    worstSkills = orderedList.slice(-4);

                    //Ordenar de menor a mayor, para que la peor quede de primera
                    worstSkills.sort(function (a, b) {
                        return a.value - b.value;
                    });

                    let copy = coursesList.slice();

                    const nameFilter = worstSkills[0].nameSkill;
                    if (nameFilter != '') {
                        copy = copy.filter(function (elem) {
                            if (elem.skillName == worstSkills[0].nameSkill || elem.skillName == worstSkills[1].nameSkill || elem.skillName == worstSkills[2].nameSkill || elem.skillName == worstSkills[3].nameSkill) {
                                return true;
                            }
                            return false;
                        });
                    }

                    renderCourses(copy);
                    console.log(copy);
                }



                getSkills();




            }



        } else {
            // User is signed out
        }
    });
});