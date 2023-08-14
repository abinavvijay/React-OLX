import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBPLEGaZTWsGBFncx7A2l5ZVr7lkfy1RNg",
    authDomain: "olxdemo-ac412.firebaseapp.com",
    projectId: "olxdemo-ac412",
    storageBucket: "olxdemo-ac412.appspot.com",
    messagingSenderId: "502651079108",
    appId: "1:502651079108:web:fec6471194e59861d97c91",
    measurementId: "G-6P0Q97F586"
  };

export default firebase.initializeApp(firebaseConfig)