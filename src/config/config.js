import firebase from 'firebase/app'
import 'firebase/firestore' 
 
 
 
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAI_pPQKsNMlmkQL0fYX-XjeqqbMDdNm2g",
    authDomain: "consultorio-716cb.firebaseapp.com",
    databaseURL: "https://consultorio-716cb.firebaseio.com",
    projectId: "consultorio-716cb",
    storageBucket: "consultorio-716cb.appspot.com",
    messagingSenderId: "302573199190",
    appId: "1:302573199190:web:bfbce9030cc2a0a2b940f7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase