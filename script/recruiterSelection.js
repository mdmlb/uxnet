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
const nameProjectElem = document.querySelector('.nameProject');
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

  const nameProject = nameProjectElem.value;

  //guardar en arreglo los objetos anteriores
  uxDesiredProfiles.push(nameProject, researcher, content, interaction, ui, lead);

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
                window.location.href = './recommendations.html';
              });
          }

          else{
            console.log("no se pudo")

            await setDoc(doc(db, "uxDesiredProfiles", uid), {
              [desiredProfiles]: uxDesiredProfiles,
              //desiredProfiles: uxDesiredProfiles,
            })

              .then(function () {
                window.location.href = './recommendations.html';
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