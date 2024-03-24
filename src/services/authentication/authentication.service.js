import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

// initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyARWInVFSg9zfi2kZ2SlcEL6AapowYfo4o",
  authDomain: "mealstogoapp-5aae7.firebaseapp.com",
  projectId: "mealstogoapp-5aae7",
  storageBucket: "mealstogoapp-5aae7.appspot.com",
  messagingSenderId: "705009005642",
  appId: "1:705009005642:web:8c79bc11609f40ea3fa2b3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const loginRequest = (email, password) => {
  const auth = getAuth(app);
  auth.signInWithEmailAndPassword(email, password);
};
