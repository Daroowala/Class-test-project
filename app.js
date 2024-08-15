  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-analytics.js";
  
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
