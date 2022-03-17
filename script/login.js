import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";

const login = document.querySelector('.form');

login.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = login.email.value;
    const password = login.password.value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            window.location.href = '../index.html';
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            alert("Hay un problema, vuelva a intentarlo o quizas no tienes cuenta puedes crearla");
        });
})