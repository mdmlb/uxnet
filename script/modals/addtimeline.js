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


const auth = getAuth()
const db = getFirestore();
var userInfo;


//ADD TIMELINE PROFILE
const modalactive = document.querySelector('.circleadd');
const modal = document.querySelector('.modal');
const dark = document.querySelector('.dark');
const cancelang = document.querySelector('.btncancel')
const btnadd = document.querySelector('.btncompletang')
const addtime = document.querySelector('.formtimeline')

modalactive.addEventListener('click', function () {
  dark.classList.add("dark--active");
  modal.classList.add("modal-content");
  //console.log();
});

//exit

//with click on the background
dark.addEventListener('click', function () {
  if (dark.classList.contains("dark--active") && modal.classList.contains("modal")) {
    dark.classList.remove("dark--active");
    modal.classList.remove("modal-content")
  }
});

//click on cancel
cancelang.addEventListener('click', function () {
  if (dark.classList.contains("dark--active") && modal.classList.contains("modal")) {
    dark.classList.remove("dark--active");
    modal.classList.remove("modal-content")
  }
});

//add

let timeline = [];

addtime.addEventListener('submit', function (event) {

  event.preventDefault()
  console.log("adentro")
  /* */
  const job = {
    year: year,
    title: title,
    description: description,
  }

  timeline.push(job);

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
          await setDoc(doc(db, "timeline", uid), {
            experience: job,
          })

            .then(function () {
              //window.location.href = './html/home.html';
              dark.classList.remove("dark--active");
              modal.classList.remove("modal-content")
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
  })
});