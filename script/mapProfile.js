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
//const skillList = document.querySelector('.skillElements');
const bestSkillList = document.querySelector('.bestSkillElements');
const worstSkillList = document.querySelector('.worstSkillElements');
const titleBestRole = document.querySelector('.textprofile__rol');
const loader = document.querySelector('.loader');
const profileBestRole = document.querySelector('.profilecont__img');

loader.classList.add('loader--show');

function renderSkills(list, elemHtml, num) {
    elemHtml.innerHTML = '';
    list.forEach(function (elem, index) {

        //Por cada elemento del arreglo de habilidades de la base de datos, crear elemento en Html con los datos correspondientes

        const newSkill = document.createElement('div');
        newSkill.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'flex-row');
        newSkill.style.padding = "2vh";

        const percentage = `${elem.value}%`;

        newSkill.innerHTML = `
        <div class="circulo d-flex justify-content-center align-items-center">
            <h3 class="bestkill__position">${index += num}</h3>
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

//Verifica que haya un usuario tenga la sesi??n iniciada
onAuthStateChanged(auth, async (user) => {
    if (user) {
        console.log(user);

        const uid = user.uid;
        // Trae informaci??n de la colecci??n de usuarios de la base de datos
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const data = docSnap.data();
            userInfo = data;
            userInfo.uid = user.uid;
            console.log(userInfo);

            // Trae informaci??n de la colecci??n de uxSkills de la base de datos
            const docRef2 = doc(db, "uxSkills", uid);
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
                console.log(docSnap2.data().skills);
                //Por cada elemento del arreglo de usuarios se agrega al arreglo de objectList
                docSnap2.data().skills.forEach((item) => {
                    objectsList.push(item);
                });

                //Se ejecuta la funci??n de que se agreguen los elementos al html (para TODAS las habilidades)
                //renderSkills(objectsList, skillList);

                //Mete en el arreglo todas las habilidades ordenadas de mayor a menor
                orderedList = objectsList.sort(function (a, b) {
                    return b.value - a.value;
                });

                //Si se quiere que se muestren todas las habilidades ordenadas se hace esta linea
                //renderSkills(orderedList, skillList);

                //Para traer los primeros 3 elementos del arreglo ordenado  
                bestSkills = orderedList.slice(0, 4);
                //Para pintar las mejores habilidades
                renderSkills(bestSkills, bestSkillList, 1);


                //Para traer los ??ltimos 3 elementos del arreglo ordenado  
                worstSkills = orderedList.slice(-4);
                //Para pintar las peores habilidades
                renderSkills(worstSkills, worstSkillList, 19);

            }

            //Ejecutar funci??n para que se muestren TODAS las habilidades, las mejores y las peores
            getSkills();

            // Trae informaci??n de la colecci??n de uxRoles de la base de datos
            const docRef3 = doc(db, "uxRoles", uid);
            const docSnap3 = await getDoc(docRef3);

            let uxRolesList = [];
            let orderedListRoles = [];

            function getBestRole() {
                uxRolesList = [];
                console.log(docSnap3.data().roles);

                docSnap3.data().roles.forEach((item) => {
                    uxRolesList.push(item);
                });
                loader.classList.remove('loader--show');

                //Mete en el arreglo todos los roles ordenados de mayor a menor
                orderedListRoles = uxRolesList.sort(function (a, b) {
                    return b.value - a.value;
                });

                const bestRole = orderedListRoles[0].nameRole;
                switch (bestRole) {
                    case 'UX Researcher':
                        profileBestRole.style.backgroundImage = "url('./img/illustration/7 UX RESEARCHER.svg')";
                        break;
                    case 'Content Strategist':
                        profileBestRole.style.backgroundImage = "url('./img/illustration/6 CONTENT STRATEGIST.svg')";
                        break;
                    case 'Interaction Designer':
                        profileBestRole.style.backgroundImage = "url('./img/illustration/9 INTERACTION DESIGNER.svg')";
                        break;
                    case 'UI Designer':
                        profileBestRole.style.backgroundImage = "url('./img/illustration/8 UI DESIGNER.svg')";
                        break;
                    case 'UX Lead':
                        profileBestRole.style.backgroundImage = "url('./img/illustration/8 UX LEAD.svg')";
                        break;
                }

                titleBestRole.textContent = "" + bestRole + " - " + orderedListRoles[0].value + "%";
            }

            getBestRole();

            //guardar los valores de los roles de la base de datos en un arreglo
            let uxValueRoles = [docSnap3.data().roles[0].value, docSnap3.data().roles[1].value, docSnap3.data().roles[2].value, docSnap3.data().roles[3].value, docSnap3.data().roles[4].value];
            console.log(uxValueRoles);

            //guardar los nombres de los roles de la base de datos en un arreglo
            let uxNameRoles = [docSnap3.data().roles[0].nameRole, docSnap3.data().roles[1].nameRole, docSnap3.data().roles[2].nameRole, docSnap3.data().roles[3].nameRole, docSnap3.data().roles[4].nameRole];
            console.log(uxNameRoles);

            //Datos que van dentro del gr??fico circular (con los arreglos creados antes)
            /*var rolesUX = {
                labels: uxNameRoles,
                datasets: [{
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

            //Crear el gr??fico circular a partir de los datos anteriores (adem??s aqu?? se ponen los estilos)
            const myChart = new Chart(ctx, {
                type: 'polarArea',
                data: rolesUX,
                options: {
                    legend: {
                        labels: {
                            fontColor: 'white',
                        }
                    },
                    responsive: true,
                    scales: {
                        r: {
                            grid: {
                                color: 'white'
                            },
                            ticks: {
                                backdropColor: '#04041B', // should render black behind the text
                                color: '#FFFFFF',
                                z: 1,
                                size: 14,
                            },
                            suggestedMin: 0,
                            suggestedMax: 100,
                            pointLabels: {
                                display: true,
                                centerPointLabels: true,
                                color: '#FFFFFF',
                                font: {
                                    size: 14,
                                    family: 'Helvetica'
                                }
                            }
                        }

                    }
                }

            });*/

            //////////////////////////////  Gr??fico de barras

            const ctx2 = document.getElementById('myChart2').getContext('2d');

            //Datos que van dentro del gr??fico de barras (con los arreglos creados antes)
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

            //Crear el gr??fico de barras a partir de los datos anteriores (adem??s aqu?? se ponen los estilos)
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

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    } else {
        // User is signed out
    }
});