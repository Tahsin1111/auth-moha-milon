// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwjabU8V6mzmGjjc_vjjQcNYADzLxXm2Q",
  authDomain: "auth-moha-milon-876f7.firebaseapp.com",
  projectId: "auth-moha-milon-876f7",
  storageBucket: "auth-moha-milon-876f7.appspot.com",
  messagingSenderId: "879522206474",
  appId: "1:879522206474:web:87e9ed59a96a7780d620f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;