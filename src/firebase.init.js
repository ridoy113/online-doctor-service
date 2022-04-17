// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQs06r0vwfhFmSmMN3E0owEKutadHMW68",
  authDomain: "online-doctor-service-bec9d.firebaseapp.com",
  projectId: "online-doctor-service-bec9d",
  storageBucket: "online-doctor-service-bec9d.appspot.com",
  messagingSenderId: "36758250082",
  appId: "1:36758250082:web:1ce45d704614ab3585a73b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;