import {
    getFirestore,
    doc,
    collection,
    addDoc,
    getDocs,
    setDoc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";

import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";

const db = getFirestore();
const auth = getAuth();
var userInfo;
//usersRef = collection(db, "users");

const btn = document.querySelector('.btneditprofile');
const editprofile = document.querySelector('.editprofile');

//Input
const editprofilename = document.querySelector('.editprogile__name');
const editprofilelastname = document.querySelector('.editprogile__lastname');
const editprofileemail = document.querySelector('.editprogile__email');
const editprofiledate = document.querySelector('.editprogile__date');
const editprofilelink = document.querySelector('.editprogile__link');

//console.log(register+"dioclick")



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

            if (editprofilename) {
                //userName.innerText = '¡Hola, ' + data.name + '!';
                editprofilename.placeholder = data.name;
                editprofilelastname.placeholder = data.lastname;
                editprofileemail.placeholder = data.email;
                editprofiledate.placeholder = data.birthdate;
                editprofilelink.placeholder = data.link;

                /*if (data.company) {
                   companyname.innerHTML = data.company; 
                } else{
                    companyname.innerHTML = "Agrega la compañía a la que perteneces";
                }*/

                if (data.link) {
                    editprofilelink.placeholder = data.link;
                } else {
                    editprofilelink.placeholder = "Agrega link de tú portafolio";
                }

            }

        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

    };

});

//

btn.addEventListener('click', function (event) {
    event.preventDefault()

    const name = editprofile.name.value
    const lastname = editprofile.lastname.value
    const email = editprofile.email.value
    const birthdate = editprofile.birthdate.value
    const link = editprofile.link.value

    console.log("no sirve")
    /* */
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
                    await updateDoc(doc(db, "users", uid), {
                        name: name,
                        lastname: lastname,
                        email: email,
                        birthdate: birthdate,
                        link: link
                    })

                        .then(function () {
                            window.location.href = 'profile.html';
                        });
                }

            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }

        } else {
            // User is signed out
            // ...
            console.log("nonas")
        }
    });

});


/*


editprofile.addEventListener('click', function (event) {
    event.preventDefault()

    const name = editprofile.name.value
    const lastname = editprofile.lastname.value
    const email = editprofile.email.value
    const birthdate = editprofile.birthdate.value
    const link = editprofile.link.value

    btn.addEventListener('submit', function (event) {

        const document = await getDoc(doc(db, "users", uid));

        if (document.exists()) {
            await updateDoc(doc(db, "users", uid), {
                name: name,
                lastname: lastname,
                email: email,
                birthdate: birthdate,
                link: link
            })

                .then(function () {
                    window.location.href = './profile.html';
                });
        }


*/