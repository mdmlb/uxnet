import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
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

//skills
const bestSkillList = document.querySelector('.bestSkillElements');
const worstSkillList = document.querySelector('.worstSkillElements');

//graphics
const ctx = document.getElementById('myChart2').getContext('2d');

//procent
const similporcent = document.querySelector('.similprofile');

//const loader = document.querySelector('.loader');

//loader.classList.add('loader--show');

//porcent
function renderPorcent(list,elemHtml) {
    elemHtml.innerHTML = '';
    list.forEach(function (elem, index) {

        //Por cada elemento del arreglo de habilidades de la base de datos, crear elemento en Html con los datos correspondientes

        const newPorcent = document.createElement('div');
        newPorcent.classList.add('contevent__title');

        const percentage = `${elem.value}%`;

        newPorcent.innerHTML = `
        <h3>Similitud entre perfiles: ${percentage}%</h3>
        `;

        elemHtml.appendChild(newPorcent);
    });
}

//skill
function renderSkills(list,elemHtml) {
    elemHtml.innerHTML = '';
    list.forEach(function (elem, index) {

        //Por cada elemento del arreglo de habilidades de la base de datos, crear elemento en Html con los datos correspondientes

        const newSkill = document.createElement('div');
        newSkill.classList.add('d-flex', 'justify-content-left', 'align-items-left', 'flex-row');

        const percentage = `${elem.value}%`;

        newSkill.innerHTML = `
        <div class="circulo d-flex justify-content-center align-items-center">
            <h3 class="bestkill__position">${index += 1}</h3>
        </div>
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

window.addEventListener('load', function () {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log(user);
    
            const uid = user.uid;
            // Esto sirve cuando haya que poner el nombre de la persona
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
    
            const parts = location.search.split('-');
            const uid2 = parts[0].replace('?', '');

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

                //renderPorcent()
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

            const ctx2 = document.getElementById('myChart3').getContext('2d');

            const ctx3 = document.getElementById('myChart2').getContext('2d');

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
            const myChart3 = new Chart(ctx2, {
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
        } else {
            // User is signed out
        }
    });
});