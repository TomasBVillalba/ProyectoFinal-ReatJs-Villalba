
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7g8WM1v1EvFhE8rNJz0jkwnz65Zrm1hE",
  authDomain: "martele-artesanias.firebaseapp.com",
  projectId: "martele-artesanias",
  storageBucket: "martele-artesanias.appspot.com",
  messagingSenderId: "402377994275",
  appId: "1:402377994275:web:a5cc1643cc7c63847f8196"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;