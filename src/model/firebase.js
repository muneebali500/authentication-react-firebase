// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoLnp3wb6vCvkbB6aZDRG5v9bHEZUOgGE",
  authDomain: "authentication-react-dea81.firebaseapp.com",
  projectId: "authentication-react-dea81",
  storageBucket: "authentication-react-dea81.appspot.com",
  messagingSenderId: "659840251730",
  appId: "1:659840251730:web:769291abc427e74e60ac8b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// export const auth = app.auth();
export default auth;
