import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCZwZPu8A9bxmsJ3pDd8cD4JCN93ALU7Vw",
  authDomain: "juego-mesa-bee3b.firebaseapp.com",
  projectId: "juego-mesa-bee3b",
  storageBucket: "juego-mesa-bee3b.firebasestorage.app",
  messagingSenderId: "902655046275",
  appId: "1:902655046275:web:75d82173b51163f69e61b6",
  measurementId: "G-QW630J116H"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);