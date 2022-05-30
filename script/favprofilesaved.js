import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
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

//Rolls
//const rolls = document.querySelector('.bestSkillElements');

//Timeline
const timelinesteps = document.querySelector('.timelinecont');

//skills
const bestSkillList = document.querySelector('.bestSkillElements');
const worstSkillList = document.querySelector('.worstSkillElements');

//graphics
const ctx = document.getElementById('myChart2').getContext('2d');


//nombre
const fullname = document.querySelector('.favprofile__name');
const mailContact = document.querySelector('.favprofile__email');
const portafolio = document.querySelector('.favprofile__protafolio');
//const numSimilarity = document.querySelector('.numSimilarity');

//loader
const loader = document.querySelector('.loader');

loader.classList.add('loader--show');



function renderSkills(list, elemHtml) {
    elemHtml.innerHTML = '';
    list.forEach(function (elem, index) {

        //Por cada elemento del arreglo de habilidades de la base de datos, crear elemento en Html con los datos correspondientes

        const newSkill = document.createElement('div');
        newSkill.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-row');

        const percentage = `${elem.value}%`;

        newSkill.innerHTML = `
        <div class="p-3" style="    width: 60vh;">
            <p class="bestskill">${elem.nameSkill}</p>
            <div class="d-flex justify-content-center align-items-center flex-row">
                <p class="bestkill__porc">${percentage}</p>
                <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: ${percentage}" aria-valuenow="25"
                        aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </div>
        `;

        elemHtml.appendChild(newSkill);
    });
}

function renderTimeline(list, elemHtml, num) {
    elemHtml.innerHTML = '';
    list.forEach(function (elem, index) {

        //Por cada elemento del arreglo de habilidades de la base de datos, crear elemento en Html con los datos correspondientes

        const newTimeline = document.createElement('div');
        newTimeline.classList.add('timeline-step');

        newTimeline.innerHTML = ` 
          <div class="timeline-content" data-toggle="popover" data-trigger="hover">
            <div class="inner-circle"></div>
            <p class="h6 mt-3 mb-1 year">${elem.year}</p>
            <p class="h6 mb-0 mb-lg-0 titletimeline">${elem.title}</p>
            <p class="h6 text-muted mb-0 mb-lg-0 description">${elem.description}</p>
          </div>
      `;

        elemHtml.appendChild(newTimeline);
    });
}

window.addEventListener('load', function () {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log(user);

            const uid = user.uid;
            // Esto sirve cuando haya que poner el nombre de la persona

            const parts = location.search.split('-');


            const uid2 = parts[0].replace('?', '');
            const name = parts[1].replace('?', '');
            const lastName = parts[2].replace('?', '');

            //let namefull = userName.split('%20');
            //let name = namefull[0].replace('?', '');
            //let lastname = namefull[1].replace('?', '');

            //console.log("ajasjajs " + namefull)
            const docRef = doc(db, "users", uid2);
            const docSnap = await getDoc(docRef);

            fullname.innerHTML = "Perfil de " + name + " " + lastName;

            mailContact.innerHTML = `
            <a href="mailto: ${docSnap.data().email}" class="header__link" style="font-size: 15px;">Correo de contacto</a>
            `;

            portafolio.innerHTML = `
            <a href="mailto: ${docSnap.data().link}" class="header__link" style="font-size: 15px;">Portafolio</a>
            `;

            const docRef2 = doc(db, "uxSkills", uid2);
            const docSnap2 = await getDoc(docRef2);

            //Inicializar arreglo con los objetos de la base de datos 
            let objectsList = [];
            //Inicializar arreglo con los objetos de la base de datos ordenada
            let orderedList = [];
            //Inicializar arreglo con solo las mejores habilidades
            let bestSkills = [];
            //Inicializar arreglo con solo las peores habilidades
            let worstSkills = [];

            function getSkills() {

                objectsList = [];
                console.log(uid2);
                //Por cada elemento del arreglo de usuarios se agrega al arreglo de objectList
                docSnap2.data().skills.forEach((item) => {
                    objectsList.push(item);
                });

                //Se ejecuta la función de que se agreguen los elementos al html (para TODAS las habilidades)
                //renderSkills(objectsList, skillList);
                //loader.classList.remove('loader--show');

                //Mete en el arreglo todas las habilidades ordenadas de mayor a menor
                orderedList = objectsList.sort(function (a, b) {
                    return b.value - a.value;
                });

                //Si se quiere que se muestren todas las habilidades ordenadas se hace esta linea
                //renderSkills(orderedList, skillList);

                //Para traer los primeros 3 elementos del arreglo ordenado  
                bestSkills = orderedList.slice(0, 3);
                //Para pintar las mejores habilidades
                renderSkills(bestSkills, bestSkillList);



                //Para traer los últimos 3 elementos del arreglo ordenado  
                worstSkills = orderedList.slice(-3);
                //Ordenar de menor a mayor, para que la peor quede de primera
                worstSkills.sort(function (a, b) {
                    return a.value - b.value;
                });
                //Para pintar las peores habilidades
                renderSkills(worstSkills, worstSkillList);

                loader.classList.remove('loader--show');

            }

            //Ejecutar función para que se muestren TODAS las habilidades, las mejores y las peores
            getSkills();

            const docRef3 = doc(db, "uxRoles", uid2);
            const docSnap3 = await getDoc(docRef3);

            //guardar los valores de los roles de la base de datos en un arreglo
            let uxValueRoles = [docSnap3.data().roles[0].value, docSnap3.data().roles[1].value, docSnap3.data().roles[2].value, docSnap3.data().roles[3].value, docSnap3.data().roles[4].value];
            console.log(uxValueRoles);

            //guardar los nombres de los roles de la base de datos en un arreglo
            let uxNameRoles = [docSnap3.data().roles[0].nameRole, docSnap3.data().roles[1].nameRole, docSnap3.data().roles[2].nameRole, docSnap3.data().roles[3].nameRole, docSnap3.data().roles[4].nameRole];
            console.log(uxNameRoles);

            const ctx2 = document.getElementById('myChart2').getContext('2d');

            //Datos que van dentro del gráfico de barras (con los arreglos creados antes)
            var rolesUX2 = {

                labels: uxNameRoles,
                datasets: [{
                    //label: 'My First Dataset',
                    data: uxValueRoles,
                    backgroundColor: [
                        "#694FFD",
                        "#FF971D",
                        "#94B9FF",
                        "#EF6A77",
                        "#2A1C7C"
                    ],
                    borderColor: '#04041B',
                }]
            };

            Chart.defaults.color = "white";

            //Crear el gráfico de barras a partir de los datos anteriores (además aquí se ponen los estilos)
            const myChart2 = new Chart(ctx2, {
                type: 'bar',
                data: rolesUX2,
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    responsive: true,
                    indexAxis: 'y',
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: "rgba(100, 100, 100, 0.9)"
                            },
                        },
                        x: {
                            suggestedMin: 0,
                            suggestedMax: 100,
                            grid: {
                                color: "rgba(100, 100, 100, 0.9)"
                            },
                        }
                    }
                }

            });

            // Trae información de la colección de uxSkills de la base de datos
            const docRef4 = doc(db, "timeline", uid2);
            const docSnap4 = await getDoc(docRef4);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const data = docSnap.data();
                userInfo = data;
                userInfo.uid = user.uid;
                //console.log("segundo:" +userInfo);

                console.log("QUE HAY AQUI " + docSnap4);
                //Inicializar arreglo con los objetos de la base de datos 
                let objectsList = [];
                //Inicializar arreglo con los objetos de la base de datos ordenada
                let orderedList = [];

                function getTimeline() {

                    objectsList = [];
                    //console.log(docSnap2);
                    //Por cada elemento del arreglo de usuarios se agrega al arreglo de objectList

                    console.log("PUES " + docSnap4.data());

                    docSnap4.data().experience.forEach((item) => {
                        objectsList.push(item);
                    });

                    //loader.classList.remove('loader--show');

                    //Mete en el arreglo todas las habilidades ordenadas de mayor a menor
                    orderedList = objectsList.sort(function (a, b) {
                        return a.year - b.year;
                    });

                    //Para pintar las mejores habilidades
                    renderTimeline(orderedList, timelinesteps, 1);
                }

                //Ejecutar función para que se muestren TODAS las habilidades, las mejores y las peores
                getTimeline();

                //////////////////////////////  Gráfico de barras

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        } else {
            // User is signed out
        }

    }
    );
});