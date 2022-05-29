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


const recommendedCourses = document.querySelector('.courses__container');

function renderCourses(list) {
    recommendedCourses.innerHTML = '';
    list.forEach(function (elem, index) {

        //IMPORTANTEEEEE: HAY QUE QUITAR ESE ÚLTIMO <BR>, SOLO LO HICE PARA PODER VER BIEN

        const newCourse = document.createElement('div');
        newCourse.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-row');

        newCourse.innerHTML = `
        <div class="p-3" style="    width: 60vh;">
            <p class="course__nameCourse">${elem.courseName}</p>
            <div class="d-flex justify-content-center align-items-center flex-row">
                <p class="course__description">${elem.description}</p>
            </div>
        </div>
        <br>
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

            const docRef2 = doc(db, "uxSkills", uid);
            const docSnap2 = await getDoc(docRef2);

            const docRef3 = doc(db, "courses", uid);
            const docSnap3 = await getDoc(docRef3);


            //Inicializar arreglo con los objetos de la base de datos 
            let objectsList = [];
            //Inicializar arreglo con los objetos de la base de datos ordenada
            let orderedList = [];
            //Inicializar arreglo con solo las peores habilidades
            let worstSkills = [];
            let coursesList = [];

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

        } else {
            // User is signed out
        }
    });
});