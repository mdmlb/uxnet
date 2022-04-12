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
let skillObj = document.querySelector('.btnRoles');

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



let uxRoles = [];
skillObj.addEventListener('click', function () {
    
    //guardar en objetos los datos de los roles
    const researcher = {
        nameRole: "UX Researcher",
        value: Number(inputSlider.value),
    }

    const content = {
        nameRole: "Content Strategist",
        value: Number(inputSlider2.value),
    }

    const interaction = {
        nameRole: "Interaction Designer",
        value: Number(inputSlider3.value),
    }

    const ui = {
        nameRole: "UI Designer",
        value: Number(inputSlider4.value),
    }

    const lead = {
        nameRole: "UX Lead",
        value: Number(inputSlider5.value),
    }

    //guardar en arreglo los objetos anteriores
    uxRoles.push(researcher, content, interaction, ui, lead);
    
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log(user);
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

                //guardar los objetos en la base de datos
                if (userInfo) {
                    await setDoc(doc(db, "uxRoles", uid), {
                        roles: uxRoles,
                    })

                        .then(function () {
                            window.location.href = './html/test/whodoesknow/skill.html';
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
console.log(uxRoles);