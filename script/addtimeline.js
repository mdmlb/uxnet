import { getFirestore, doc, collection, addDoc, getDocs, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import { getAuth, signOut, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();
var userInfo;

//usersRef = collection(db, "users");

//PROFILE
const timelinesteps = document.querySelector('.timelinecont');

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

//Verifica que haya un usuario tenga la sesión iniciada
onAuthStateChanged(auth, async (user) => {
  if (user) {
    console.log(user);

    const uid = user.uid;
    // Trae información de la colección de usuarios de la base de datos
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);

    // Trae información de la colección de uxSkills de la base de datos
    const docRef2 = doc(db, "timeline", uid);
    const docSnap2 = await getDoc(docRef2);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const data = docSnap.data();
      userInfo = data;
      userInfo.uid = user.uid;
      //console.log("segundo:" +userInfo);

      console.log(docSnap2);
      //Inicializar arreglo con los objetos de la base de datos 
      let objectsList = [];
      //Inicializar arreglo con los objetos de la base de datos ordenada
      let orderedList = [];

      function getTimeline() {

        objectsList = [];
        //console.log(docSnap2);
        //Por cada elemento del arreglo de usuarios se agrega al arreglo de objectList
        docSnap2.data().experience.forEach((item) => {
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
});
