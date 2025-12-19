import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfyDxw_hc3Km1hl16-LCFgDqkX2IoLNy0",
  authDomain: "react-coder-maracortes.firebaseapp.com",
  projectId: "react-coder-maracortes",
  storageBucket: "react-coder-maracortes.firebasestorage.app",
  messagingSenderId: "374905372988",
  appId: "1:374905372988:web:13e46c712ee26d7cbf9e39"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)