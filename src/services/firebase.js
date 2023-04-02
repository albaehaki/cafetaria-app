// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBchlcsBl1u8o0IykNy-gHSDYJHZBPISsE",
  authDomain: "cafetariaapp-778c3.firebaseapp.com",
  databaseURL: "https://cafetariaapp-778c3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cafetariaapp-778c3",
  storageBucket: "cafetariaapp-778c3.appspot.com",
  messagingSenderId: "278941604675",
  appId: "1:278941604675:web:686680a523bab5ae4fedf6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;