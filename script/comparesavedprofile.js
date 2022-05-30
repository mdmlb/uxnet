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

//skills
const bestSkillList = document.querySelector('.bestSkillElements');
const worstSkillList = document.querySelector('.worstSkillElements');

//graphics
const ctx = document.getElementById('myChart2').getContext('2d');

//procent
const similporcent = document.querySelector('.similporcent');

const uxNameComparation = document.querySelector('.uxNameComparation');
//const numSimilarity = document.querySelector('.numSimilarity');

//buttons
const saveProfile = document.querySelector('.saveProfile');
const saveFutureProfile = document.querySelector('.saveFutureProfile');

//close
const close1 = document.querySelector('.btnAlert');
const goto1 = document.querySelector('.btnverperfil');
const close2 = document.querySelector('.btnAlert2');
const goto2 = document.querySelector('.btnverperfil2');

//Modal
const modalTest = document.querySelector('.addprofile');
const modal2 = document.querySelector('.addprofile2');

//nombre
const fullname = document.querySelector('.favprofile__name');
const mailContact = document.querySelector('.favprofile__email');
const portafolio = document.querySelector('.favprofile__protafolio');

//loader
const loader = document.querySelector('.loader');

loader.classList.add('loader--show');


//skill
function renderSkills(list, elemHtml) {
    elemHtml.innerHTML = '';
    list.forEach(function (elem, index) {

        //Por cada elemento del arreglo de habilidades de la base de datos, crear elemento en Html con los datos correspondientes

        const newSkill = document.createElement('div');
        newSkill.classList.add('d-flex', 'justify-content-left', 'align-items-left', 'flex-row');

        const percentage = `${elem.value}%`;

        newSkill.innerHTML = `
        <div class="p-3" style="width: 60vh;">
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

//alerta
function renderprofilesaved(list, another) {
    modalTest.innerHTML = '';
    list.forEach(function (elem, index) {
        //Por cada elemento del arreglo de habilidades de la base de datos, crear elemento en Html con los datos correspondientes
        const url2 = `savedProfiles.html?${another[list[index]][0]}-${elem}`;
        const savedprofile = document.createElement('div');
        savedprofile.classList.add('addprofile__container');

        savedprofile.innerHTML = `
                <div class="addprofile__centerAll">
                    <h1 style="padding-top: 5%" class="">Perfil agregado</h1>
                    <p class="text__description" style="color: white; margin: 0;">El perfil fue agregado con éxito para este proyecto
                    </p>
                    <div class="d-flex flex-row justify-content-center align-items-center p-3">
                        <button class="btn btn-primary btnAlert" style="width:244px; margin: 0;">Cerrar</button>
                        <div style="width: 5px;"></div>
                        <a href="${url2}" type="submit" class="btn btn-primary">Ver perfiles guardados</a>
                    </div>

                </div>
        `;

        modalTest.appendChild(newSkill);
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
            const projectCode = parts[1].replace('?', '');
            const name = parts[2].replace('?', '');
            const lastname = parts[3].replace('?', '');
            const similarityPer = parts[4].replace('?', '');

            console.log(similarityPer);

            const docRef7 = doc(db, "users", uid2);
            const docSnap7 = await getDoc(docRef7);

            fullname.innerHTML = "Perfil de " + name + " " + lastname;

            mailContact.innerHTML = `
            <a href="mailto: ${docSnap7.data().email}" class="header__link" style="font-size: 15px;">Correo de contacto</a>
            `;

            if (docSnap7.data().link == undefined) {
                portafolio.innerHTML = `
                <a href="#" class="header__link" style="font-size: 15px;">Este usuario no ha subido su portafolio</a>
                `;
            } else {
                portafolio.innerHTML = `
            <a href="${docSnap7.data().link}" class="header__link" style="font-size: 15px;">Portafolio</a>
            `;
            }
            
            uxNameComparation.innerHTML = "Comparación entre el perfil de " + name + " " + lastname + " y tu perfil deseado";
            similporcent.innerHTML = "Similitud entre perfiles: " + similarityPer + "%"

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

            const docRef6 = doc(db, "uxDesiredProfiles", uid);
            const docSnap6 = await getDoc(docRef6);

            console.log(docSnap6.data()[projectCode][1].value);

            //guardar los valores de los roles de la base de datos en un arreglo
            let uxValueRoles = [docSnap3.data().roles[0].value, docSnap3.data().roles[1].value, docSnap3.data().roles[2].value, docSnap3.data().roles[3].value, docSnap3.data().roles[4].value];
            console.log(uxValueRoles);
            let uxDesiredValueRoles = [docSnap6.data()[projectCode][1].value, docSnap6.data()[projectCode][2].value, docSnap6.data()[projectCode][3].value, docSnap6.data()[projectCode][4].value, docSnap6.data()[projectCode][5].value];

            //guardar los nombres de los roles de la base de datos en un arreglo
            let uxNameRoles = [docSnap3.data().roles[0].nameRole, docSnap3.data().roles[1].nameRole, docSnap3.data().roles[2].nameRole, docSnap3.data().roles[3].nameRole, docSnap3.data().roles[4].nameRole];
            console.log(uxNameRoles);
            let uxDesiredNameRoles = [docSnap6.data()[projectCode][1].nameRole, docSnap6.data()[projectCode][2].nameRole, docSnap6.data()[projectCode][3].nameRole, docSnap6.data()[projectCode][4].nameRole, docSnap6.data()[projectCode][5].nameRole];

            const ctx2 = document.getElementById('myChart2').getContext('2d');

            //Datos que van dentro del gráfico de barras (con los arreglos creados antes)
            var rolesUX2 = {

                labels: uxNameRoles,
                datasets: [{
                    label: 'Perfil de ' + name,
                    data: uxValueRoles,
                    backgroundColor: [
                        "#694FFD",
                        "#694FFD",
                        "#694FFD",
                        "#694FFD",
                        "#694FFD"
                    ],
                    borderColor: '#04041B',
                },
                {
                    label: 'Tu perfil deseado',
                    data: uxDesiredValueRoles,
                    backgroundColor: [
                        "#FF971D",
                        "#FF971D",
                        "#FF971D",
                        "#FF971D",
                        "#FF971D"
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
                            display: true
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


            const aProfile = {
                userID: uid2,
                name: name,
                lastname: lastname,
                similarity: similarityPer,
            }

            const aProfile2 = {
                userID: uid2,
                name: name,
                lastname: lastname
            }

            let savedProfiles = [];
            let savedFutureProfiles = [];

            let savedProfilesList = [];
            let savedFutureProfilesList = [];

            savedProfiles.push(aProfile);
            savedFutureProfiles.push(aProfile2);

            const docRef4 = doc(db, "savedProfiles", uid);
            const docSnap4 = await getDoc(docRef4);
            const docRef5 = doc(db, "savedFutureProfiles", uid);
            const docSnap5 = await getDoc(docRef5);

            if (docSnap4.data()) {
                if (docSnap4.data()[projectCode]) {
                    if (docSnap4.data()[projectCode][0]) {
                        savedProfilesList.push(docSnap4.data()[projectCode]);
                    }
                }
            }
            if (docSnap5.data()) {
                if (docSnap5.data().savedFutureProfiles) {
                    if (docSnap5.data().savedFutureProfiles[0]) {
                        savedFutureProfilesList.push(docSnap5.data().savedFutureProfiles);
                    }
                }
            }

            //renderprofilesaved(savedProfilesList,savedProfiles);

            console.log(savedProfilesList[0]);

            const document2 = await getDoc(doc(db, "savedProfiles", uid));
            const document3 = await getDoc(doc(db, "savedFutureProfiles", uid));

            saveProfile.addEventListener('click', async function () {

                console.log("entro")

                if (docSnap4.data()) {
                    console.log("aja")
                    if (docSnap4.data()[projectCode]) {
                        console.log("pues")
                        if (docSnap4.data()[projectCode][0]) {
                            savedProfilesList[0].push(aProfile);
                            console.log("eh")
                        }
                    }
                }

                //console.log(savedProfilesList);

                if (document2.exists()) {
                    console.log("nada")
                    if (docSnap4.data()[projectCode]) {
                        console.log("no")
                        if (docSnap4.data()[projectCode][0]) {
                            console.log("mas")
                            if (savedProfilesList[0].length >= 1) {
                                console.log("jamas")
                                await updateDoc(doc(db, "savedProfiles", uid), {
                                    [projectCode]: savedProfilesList[0],

                                })
                                
                                    .then(function () {
                                        //alert("PRIMERO");
                                        modalTest.classList.add('addprofile--show');
                                        console.log("aca1")

                                    });

                            } else {
                                await updateDoc(doc(db, "savedProfiles", uid), {
                                    [projectCode]: savedProfiles,
                                })

                                    .then(function () {
                                        alert("SEGUNDO");
                                        console.log("aca2")
                                    });
                            }
                        }
                    } else {
                        await updateDoc(doc(db, "savedProfiles", uid), {
                            [projectCode]: savedProfiles,
                        })
                        console.log("aca3")
                        //alert("algo pasa")
                        modalTest.classList.add('addprofile--show');
                    }


                }
                else {
                    console.log("no se pudo")

                    await setDoc(doc(db, "savedProfiles", uid), {
                        [projectCode]: savedProfiles,
                    })

                        .then(function () {
                            //alert("TERCERO");
                            console.log("aca4")
                            modalTest.classList.add('addprofile--show');
                        });
                }
                
            })

            //CLOSE
            goto1.addEventListener('click', function () {

                console.log("ENTRAMOS");

                goto1.href= `./savedProfiles.html?${list[index][0]}-${elem}`;

                //goto1.href="./savedProfiles.html"
            })

            close1.addEventListener('click', function () {
                modalTest.classList.remove('addprofile--show');
                
            })

            //PERFILES FAVORITOS
            saveFutureProfile.addEventListener('click', async function () {
                if (docSnap5.data()) {
                    if (docSnap5.data().savedFutureProfiles) {
                        if (docSnap5.data().savedFutureProfiles[0]) {
                            savedFutureProfilesList[0].push(aProfile2);
                            modal2.classList.add('addprofile2--show');
                        }
                    }
                }

                console.log(savedFutureProfilesList);

                if (document3.exists()) {
                    if (docSnap5.data().savedFutureProfiles) {
                        if (docSnap5.data().savedFutureProfiles[0]) {
                            if (savedFutureProfilesList[0].length >= 1) {
                                await updateDoc(doc(db, "savedFutureProfiles", uid), {
                                    savedFutureProfiles: savedFutureProfilesList[0],
                                })

                                    .then(function () {
                                        //window.location.href = './recommendations.html';
                                        modal2.classList.add('addprofile2--show');
                                    });
                            } else {
                                await updateDoc(doc(db, "savedFutureProfiles", uid), {
                                    savedFutureProfiles: savedFutureProfiles,
                                })

                                    .then(function () {
                                        //window.location.href = './recommendations.html';
                                        modal2.classList.add('addprofile2--show');
                                    });
                            }
                        }
                    } else {
                        await updateDoc(doc(db, "savedFutureProfiles", uid), {
                            savedFutureProfiles: savedFutureProfiles,
                        })
                    }
                }
                else {
                    console.log("no se pudo")

                    await setDoc(doc(db, "savedFutureProfiles", uid), {
                        savedFutureProfiles: savedFutureProfiles,
                    })

                        .then(function () {
                            //window.location.href = './recommendations.html';
                            modal2.classList.add('addprofile2--show');
                        });
                }
            })

            //CLOSE
            goto2.addEventListener('click', function () {

                console.log("ENTRAMOS");

                goto2.href="../designers/saved.html"
            })

            close2.addEventListener('click', function () {
                modal2.classList.remove('addprofile2--show');
                
            })

        } else {
            // User is signed out
        }
    });
});