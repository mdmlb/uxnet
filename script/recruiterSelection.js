import {
  getFirestore,
  doc,
  collection,
  addDoc,
  getDocs,
  getDoc,
  updateDoc,
  setDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import {
  getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const auth = getAuth();
var userInfo;

const db = getFirestore();

//roles
const slideValue = document.querySelector('.range__1');
const inputSlider = document.querySelector('.range__input1');
const slideValue2 = document.querySelector('.range__2');
const inputSlider2 = document.querySelector('.range__input2');
const slideValue3 = document.querySelector('.range__3');
const inputSlider3 = document.querySelector('.range__input3');
const slideValue4 = document.querySelector('.range__4');
const inputSlider4 = document.querySelector('.range__input4');
const slideValue5 = document.querySelector('.range__5');
const inputSlider5 = document.querySelector('.range__input5');

//skills
const skill1 = document.querySelector('.rangeskills__1');
const inputskill1 = document.querySelector('.rangeskills__input1');
const skill2 = document.querySelector('.rangeskills__2');
const inputskill2 = document.querySelector('.rangeskills__input2');
const skill3 = document.querySelector('.rangeskills__3');
const inputskill3 = document.querySelector('.rangeskills__input3');
const skill4 = document.querySelector('.rangeskills__4');
const inputskill4 = document.querySelector('.rangeskills__input4');
const skill5 = document.querySelector('.rangeskills__5');
const inputskill5 = document.querySelector('.rangeskills__input5');
const skill6 = document.querySelector('.rangeskills__6');
const inputskill6 = document.querySelector('.rangeskills__input6');
const skill7 = document.querySelector('.range_7');
const inputskill7 = document.querySelector('.range__input7');
const skill8 = document.querySelector('.range_8');
const inputskill8 = document.querySelector('.range__input8');
const skill9 = document.querySelector('.range_9');
const inputskill9 = document.querySelector('.range__input9');
const skill10 = document.querySelector('.range_10');
const inputskill10 = document.querySelector('.range__input10');
const skill11 = document.querySelector('.range_11');
const inputskill11 = document.querySelector('.range__input11');
const skill12 = document.querySelector('.range_12');
const inputskill12 = document.querySelector('.range__input12');
const skill13 = document.querySelector('.range_13');
const inputskill13 = document.querySelector('.range__input13');
const skill14 = document.querySelector('.range_14');
const inputskill14 = document.querySelector('.range__input14');
const skill15 = document.querySelector('.range_15');
const inputskill15 = document.querySelector('.range__input15');
const skill16 = document.querySelector('.range_16');
const inputskill16 = document.querySelector('.range__input16');
const skill17 = document.querySelector('.range_17');
const inputskill17 = document.querySelector('.range__input17');
const skill18 = document.querySelector('.range_18');
const inputskill18 = document.querySelector('.range__input18');
const skill19 = document.querySelector('.range_19');
const inputskill19 = document.querySelector('.range__input19');
const skill20 = document.querySelector('.range_20');
const inputskill20 = document.querySelector('.range__input20');
const skill21 = document.querySelector('.range_21');
const inputskill21 = document.querySelector('.range__input21');
const skill22 = document.querySelector('.range_22');
const inputskill22 = document.querySelector('.range__input22');

const nameProjectElem = document.querySelector('.nameProject');
let skillObj = document.querySelector('.range__form');

//cambiar número del slider

//roles
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

//skills
inputskill1.oninput = (() => {
  let value = inputskill1.value;
  skill1.textContent = value + "%";
});
inputskill2.oninput = (() => {
  let value = inputskill2.value;
  skill2.textContent = value + "%";
});
inputskill3.oninput = (() => {
  let value = inputskill3.value;
  skill3.textContent = value + "%";
});
inputskill4.oninput = (() => {
  let value = inputskill4.value;
  skill4.textContent = value + "%";
});
inputskill5.oninput = (() => {
  let value = inputskill5.value;
  skill5.textContent = value + "%";
});
inputskill6.oninput = (() => {
  let value = inputskill6.value;
  skill6.textContent = value + "%";
});
inputskill7.oninput = (() => {
  let value = inputskill7.value;
  skill7.textContent = value + "%";
});
inputskill8.oninput = (() => {
  let value = inputskill8.value;
  skill8.textContent = value + "%";
});
inputskill9.oninput = (() => {
  let value = inputskill9.value;
  skill9.textContent = value + "%";
});
inputskill10.oninput = (() => {
  let value = inputskill10.value;
  skill10.textContent = value + "%";
});
inputskill11.oninput = (() => {
  let value = inputskill11.value;
  skill11.textContent = value + "%";
});
inputskill12.oninput = (() => {
  let value = inputskill12.value;
  skill12.textContent = value + "%";
});
inputskill13.oninput = (() => {
  let value = inputskill13.value;
  skill13.textContent = value + "%";
});
inputskill14.oninput = (() => {
  let value = inputskill14.value;
  skill14.textContent = value + "%";
});
inputskill15.oninput = (() => {
  let value = inputskill15.value;
  skill15.textContent = value + "%";
});
inputskill16.oninput = (() => {
  let value = inputskill16.value;
  skill16.textContent = value + "%";
});
inputskill17.oninput = (() => {
  let value = inputskill17.value;
  skill17.textContent = value + "%";
});
inputskill18.oninput = (() => {
  let value = inputskill18.value;
  skill18.textContent = value + "%";
});
inputskill19.oninput = (() => {
  let value = inputskill19.value;
  skill19.textContent = value + "%";
});
inputskill20.oninput = (() => {
  let value = inputskill20.value;
  skill20.textContent = value + "%";
});
inputskill21.oninput = (() => {
  let value = inputskill21.value;
  skill21.textContent = value + "%";
});
inputskill22.oninput = (() => {
  let value = inputskill22.value;
  skill22.textContent = value + "%";
});



let uxDesiredProfiles = [];
skillObj.addEventListener('submit', function (event) {
  event.preventDefault();

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

  //guardar en objetos los datos de los habilidades
  const comunicacionoral  = {
    nameRole: "Comunicación oral",
    value: Number(inputskill1.value),
  }

  const comunicacionescrita = {
    nameRole: "Comunicación escrita",
    value: Number(inputskill2.value),
  }

  const empatia = {
    nameRole: "Empatía",
    value: Number(inputskill3.value),
  }

  const trabajoenequipo = {
    nameRole: "Trabajo en equipo",
    value: Number(inputskill4.value),
  }
  
  const analisisdedatos = {
    nameRole: "Análisis de datos",
    value: Number(inputskill5.value),
  }

  const escuchaactiva  = {
    nameRole: "Escucha activa",
    value: Number(inputskill1.value),
  }

  const negociacion = {
    nameRole: "Negociación",
    value: Number(inputskill2.value),
  }

  const actitudcritica = {
    nameRole: "Actitud crítica",
    value: Number(inputskill3.value),
  }

  const conocimientosenpsicologia = {
    nameRole: "Conocimientos en psicología",
    value: Number(inputskill4.value),
  }

  const visionalfuturo = {
    nameRole: "Visión al futuro",
    value: Number(inputskill5.value),
  }

  const capacidaddegestion  = {
    nameRole: "Capacidad de gestión",
    value: Number(inputskill1.value),
  }

  const comunicaciónvisual = {
    nameRole: "Comunicación visual",
    value: Number(inputskill2.value),
  }

  const manejodeltiempo = {
    nameRole: "Manejo del tiempo",
    value: Number(inputskill3.value),
  }
  
  const Adaptaciónalcambio = {
    nameRole: "Adaptación al cambio",
    value: Number(inputskill5.value),
  }

  const prototipado  = {
    nameRole: "Prototipado",
    value: Number(inputskill1.value),
  }

  const estructuracióndelainformacion = {
    nameRole: "Estructuración de la información",
    value: Number(inputskill2.value),
  }

  const creatividad = {
    nameRole: "Creatividad",
    value: Number(inputskill3.value),
  }

  const conocimientosdeinteraccion = {
    nameRole: "Conocimientos de interacción",
    value: Number(inputskill4.value),
  }

  const resistenciaaltrabajobajopresion = {
    nameRole: "Resistencia al trabajo bajo presión",
    value: Number(inputskill5.value),
  }
  
  const liderazgo = {
    nameRole: "Liderazgo",
    value: Number(inputskill3.value),
  }

  const investigacioncuantitativa = {
    nameRole: "Investigación cuantitativa",
    value: Number(inputskill4.value),
  }

  const investigacioncualitativa = {
    nameRole: "Investigación cualitativa",
    value: Number(inputskill5.value),
  }
  

  const nameProject = nameProjectElem.value;

  //guardar en arreglo los objetos anteriores
  uxDesiredProfiles.push(nameProject, researcher, content, interaction, ui, lead, comunicacionoral, comunicacionescrita, empatia, trabajoenequipo, analisisdedatos, escuchaactiva, negociacion, actitudcritica, conocimientosenpsicologia, visionalfuturo, capacidaddegestion, comunicaciónvisual, manejodeltiempo, Adaptaciónalcambio, prototipado, estructuracióndelainformacion, creatividad, conocimientosdeinteraccion, resistenciaaltrabajobajopresion, liderazgo, investigacioncuantitativa, investigacioncualitativa);

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

        let numRandom = getRandomArbitrary(0, 6500);
        let desiredProfiles = "desiredProfiles" + numRandom;
        console.log(numRandom);

        //guardar los objetos en la base de datos
        if (userInfo) {

          const document = await getDoc(doc(db, "uxDesiredProfiles", uid));

          if (document.exists()) {
            await updateDoc(doc(db, "uxDesiredProfiles", uid), {
              [desiredProfiles]: uxDesiredProfiles,
              //desiredProfiles: uxDesiredProfiles,
            })

              .then(function () {
                window.location.href = './projects.html';
              });
          }

          else{
            console.log("no se pudo")

            await setDoc(doc(db, "uxDesiredProfiles", uid), {
              [desiredProfiles]: uxDesiredProfiles,
              //desiredProfiles: uxDesiredProfiles,
            })

              .then(function () {
                window.location.href = './projects.html';
              });
          }

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
//console.log(uxDesiredProfilese);

/*register.addEventListener('submit', function (event) {
    event.preventDefault();*/

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}