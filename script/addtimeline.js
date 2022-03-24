import { getFirestore, doc, collection, addDoc, getDocs, setDoc } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js";
  
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
  
  const db = getFirestore();
  const auth = getAuth();
  //usersRef = collection(db, "users");

  //PROFILE
  const btn = document.querySelector('.btnlogin');
  const register = document.querySelector('.form');
  
  //console.log(register+"dioclick")
  
  register.addEventListener('submit', function (event) {
    event.preventDefault()
  
    const name = register.name.value
    const lastname = register.lastname.value
    const email = register.email.value
    const birthdate = register.birthdate.value
    const usertype = register.usertype.value
    const password = register.password.value
    const passwordC = register.passwordC.value
  
    console.log("no sirve")
  
    if (password === passwordC) {
  
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
  
          console.log("entra")
          const uid = userCredential.user.uid;
  
          console.log(uid)
  
          await setDoc(doc(db, "users", uid), {
            name: name,
            lastname: lastname,
            email: email,
            birthdate: birthdate,
            usertype: usertype
          }).then(function () {
            window.location.href = '../index.html';
          });
          console.log("Document written with ID: ", docRef.id);
          console.log(docRef)
  
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(error)
          console.log(errorMessage)
          console.log(errorCode)
  
          // ..
        });
  
  
    } else {
      alert("Las contraseñas no son iguales");
    }
  
  });