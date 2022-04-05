import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
    getDoc,
    setDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const auth = getAuth();
var userInfo;

const db = getFirestore();

const slideValue = document.querySelector('.range_1');
const inputSlider = document.querySelector('.range__input1');
const slideValue2 = document.querySelector('.range_2');
const inputSlider2 = document.querySelector('.range__input2');
const slideValue3 = document.querySelector('.range_3');
const inputSlider3 = document.querySelector('.range__input3');
const slideValue4 = document.querySelector('.range_4');
const inputSlider4 = document.querySelector('.range__input4');
const slideValue5 = document.querySelector('.range_5');
const inputSlider5 = document.querySelector('.range__input5');
const slideValue6 = document.querySelector('.range_6');
const inputSlider6 = document.querySelector('.range__input6');
const slideValue7 = document.querySelector('.range_7');
const inputSlider7 = document.querySelector('.range__input7');
const slideValue8 = document.querySelector('.range_8');
const inputSlider8 = document.querySelector('.range__input8');
const slideValue9 = document.querySelector('.range_9');
const inputSlider9 = document.querySelector('.range__input9');
const slideValue10 = document.querySelector('.range_10');
const inputSlider10 = document.querySelector('.range__input10');
const slideValue11 = document.querySelector('.range_11');
const inputSlider11 = document.querySelector('.range__input11');
const slideValue12 = document.querySelector('.range_12');
const inputSlider12 = document.querySelector('.range__input12');
const slideValue13 = document.querySelector('.range_13');
const inputSlider13 = document.querySelector('.range__input13');
const slideValue14 = document.querySelector('.range_14');
const inputSlider14 = document.querySelector('.range__input14');
const slideValue15 = document.querySelector('.range_15');
const inputSlider15 = document.querySelector('.range__input15');
const slideValue16 = document.querySelector('.range_16');
const inputSlider16 = document.querySelector('.range__input16');
const slideValue17 = document.querySelector('.range_17');
const inputSlider17 = document.querySelector('.range__input17');
const slideValue18 = document.querySelector('.range_18');
const inputSlider18 = document.querySelector('.range__input18');
const slideValue19 = document.querySelector('.range_19');
const inputSlider19 = document.querySelector('.range__input19');
const slideValue20 = document.querySelector('.range_20');
const inputSlider20 = document.querySelector('.range__input20');
const slideValue21 = document.querySelector('.range_21');
const inputSlider21 = document.querySelector('.range__input21');
const slideValue22 = document.querySelector('.range_22');
const inputSlider22 = document.querySelector('.range__input22');
let skillObj = document.querySelector('.range__form');

//cambiar número del slider
inputSlider.oninput = (() => {
    let value = inputSlider.value;
    slideValue.textContent = value + "%";
});
inputSlider2.oninput = (() => {
    let value = inputSlider2.value;
    slideValue2.textContent = value + "%";
});
inputSlider3.oninput = (() => {
    let value = inputSlider3.value;
    slideValue3.textContent = value + "%";
});
inputSlider4.oninput = (() => {
    let value = inputSlider4.value;
    slideValue4.textContent = value + "%";
});
inputSlider5.oninput = (() => {
    let value = inputSlider5.value;
    slideValue5.textContent = value + "%";
});
inputSlider6.oninput = (() => {
    let value = inputSlider6.value;
    slideValue6.textContent = value + "%";
});
inputSlider7.oninput = (() => {
    let value = inputSlider7.value;
    slideValue7.textContent = value + "%";
});
inputSlider8.oninput = (() => {
    let value = inputSlider8.value;
    slideValue8.textContent = value + "%";
});
inputSlider9.oninput = (() => {
    let value = inputSlider9.value;
    slideValue9.textContent = value + "%";
});
inputSlider10.oninput = (() => {
    let value = inputSlider10.value;
    slideValue10.textContent = value + "%";
});
inputSlider11.oninput = (() => {
    let value = inputSlider11.value;
    slideValue11.textContent = value + "%";
});
inputSlider12.oninput = (() => {
    let value = inputSlider12.value;
    slideValue12.textContent = value + "%";
});
inputSlider13.oninput = (() => {
    let value = inputSlider13.value;
    slideValue13.textContent = value + "%";
});
inputSlider14.oninput = (() => {
    let value = inputSlider14.value;
    slideValue14.textContent = value + "%";
});
inputSlider15.oninput = (() => {
    let value = inputSlider15.value;
    slideValue15.textContent = value + "%";
});
inputSlider16.oninput = (() => {
    let value = inputSlider16.value;
    slideValue16.textContent = value + "%";
});
inputSlider17.oninput = (() => {
    let value = inputSlider17.value;
    slideValue17.textContent = value + "%";
});
inputSlider18.oninput = (() => {
    let value = inputSlider18.value;
    slideValue18.textContent = value + "%";
});
inputSlider19.oninput = (() => {
    let value = inputSlider19.value;
    slideValue19.textContent = value + "%";
});
inputSlider20.oninput = (() => {
    let value = inputSlider20.value;
    slideValue20.textContent = value + "%";
});
inputSlider21.oninput = (() => {
    let value = inputSlider21.value;
    slideValue21.textContent = value + "%";
});
inputSlider22.oninput = (() => {
    let value = inputSlider22.value;
    slideValue22.textContent = value + "%";
});


let uxSkills = [];
skillObj.addEventListener('submit', function (event) {
    event.preventDefault();

    //guardar en objetos los datos de los roles
    const oral = {
        nameSkill: "Comunicación oral",
        value: Number(inputSlider.value),
    }

    const written = {
        nameSkill: "Comunicación escrita",
        value: Number(inputSlider2.value),
    }

    const empathy = {
        nameSkill: "Empatía",
        value: Number(inputSlider3.value),
    }

    const team = {
        nameSkill: "Trabajo en equipo",
        value: Number(inputSlider4.value),
    }

    const analysis = {
        nameSkill: "Análisis de datos",
        value: Number(inputSlider5.value),
    }

    const listening = {
        nameSkill: "Escucha activa",
        value: Number(inputSlider6.value),
    }

    const negotiation = {
        nameSkill: "Negociación",
        value: Number(inputSlider7.value),
    }

    const critical = {
        nameSkill: "Actitud crítica",
        value: Number(inputSlider8.value),
    }

    const psychology = {
        nameSkill: "Conocimientos en psicología",
        value: Number(inputSlider9.value),
    }

    const future = {
        nameSkill: "Visión al futuro",
        value: Number(inputSlider10.value),
    }

    const management = {
        nameSkill: "Capacidad de gestión",
        value: Number(inputSlider11.value),
    }

    const visual = {
        nameSkill: "Comunicación visual",
        value: Number(inputSlider12.value),
    }

    const time = {
        nameSkill: "Manejo del tiempo",
        value: Number(inputSlider13.value),
    }

    const change = {
        nameSkill: "Adaptación al cambio",
        value: Number(inputSlider14.value),
    }

    const wireframes = {
        nameSkill: "Prototipado/Wireframes",
        value: Number(inputSlider15.value),
    }

    const information = {
        nameSkill: "Estructuración de la información",
        value: Number(inputSlider16.value),
    }

    const creativity = {
        nameSkill: "Creatividad",
        value: Number(inputSlider17.value),
    }

    const interaction = {
        nameSkill: "Conocimientos de interacción",
        value: Number(inputSlider18.value),
    }

    const pressure = {
        nameSkill: "Resistencia al trabajo bajo presión",
        value: Number(inputSlider19.value),
    }

    const leadership = {
        nameSkill: "Liderazgo",
        value: Number(inputSlider20.value),
    }

    const quanti = {
        nameSkill: "Investigación cuantitativa",
        value: Number(inputSlider21.value),
    }

    const quali = {
        nameSkill: "Investigación cualitativa",
        value: Number(inputSlider22.value),
    }

    uxSkills.push(oral, written, empathy, team, analysis, listening, negotiation, critical, psychology, future, management, visual, time, change, wireframes, information, creativity, interaction, pressure, leadership, quanti, quali);

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log(user);
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;
            // ...
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                const data = docSnap.data();
                userInfo = data;
                userInfo.uid = user.uid;
                console.log(userInfo);

                if (userInfo) {
                    await setDoc(doc(db, "uxSkills", uid), {
                        skills: uxSkills,
                    })

                        .then(function () {
                            window.location.href = '../../test/finish.html';
                        });
                }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        } else {
            // User is signed out
            // ...
        }
    });
});
