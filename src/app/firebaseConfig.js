import { initializeApp } from "firebase/app";
import  { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyArVU5imBwSuh39ZhO6M-8cYExk_F-Jmmk",
  authDomain: "valeries-factory.firebaseapp.com",
  projectId: "valeries-factory",
  storageBucket: "valeries-factory.appspot.com",
  messagingSenderId: "604250460415",
  appId: "1:604250460415:web:dafe52545c358301bc3cca",
  measurementId: "G-T9RRXTKGDL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};