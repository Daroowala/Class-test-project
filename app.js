  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  import { getAuth, 
           onAuthStateChanged,
           createUserWithEmailAndPassword, 
           signInWithEmailAndPassword, 
           signOut 
        } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
  
  
  const firebaseConfig = {
    apiKey: "AIzaSyAEJg09XlsyYZdZ0hekDszCX0CnHKpP-Sw",
    authDomain: "class-test-project-288c8.firebaseapp.com",
    projectId: "class-test-project-288c8",
    storageBucket: "class-test-project-288c8.appspot.com",
    messagingSenderId: "1089947485620",
    appId: "1:1089947485620:web:451748515273efe7fa9ee1",
    measurementId: "G-XBVXQG1FPV"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);


  const signup_email = document.getElementById("signup_email");
  const signup_password = document.getElementById("signup_password");
  const signup_btn = document.getElementById("signup_btn");

  const signin_email = document.getElementById("signin_email");
  const signin_password = document.getElementById("signin_password");
  const signin_btn = document.getElementById("signin_btn");

  const user_email =document.getElementById("user_email");
  const logout_btn =document.getElementById("logout_btn");
  
  const auth_container =document.getElementById("auth_container");
  const user_container =document.getElementById("user_container");

  signup_btn.addEventListener('click', createUserAccount);
  signin_btn.addEventListener("click", signIn);
  logout_btn.addEventListener("click", logout);

  onAuthStateChanged(auth, (user) => {
    if (user) {
    //   console.log('logged in');
      const uid = user.uid; 
      auth_container.style.display = "none";
    user_container.style.display = "block";
    user_email .innerText = user.email; 
    } else {
        // console.log('logged in not in use');
        auth_container.style.display = "block";
        user_container.style.display = "none"; 
    }
  });

  function createUserAccount (){
    // console.log('email=>', signup_email.value);
    // console.log('password=>', signup_password.value);
    createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
  });
  }

  function signIn(){
    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  }

  function logout(){
    signOut(auth).then(() => {
    }).catch((error) => {
      
    });
  }