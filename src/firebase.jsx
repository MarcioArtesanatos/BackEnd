// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAeIztP5qgjKlUYEWur2xuFpGhdVhqbbHs",
  authDomain: "marcio-artesanatos.firebaseapp.com",
  projectId: "marcio-artesanatos",
  storageBucket: "marcio-artesanatos.appspot.com",
  messagingSenderId: "949736169495",
  appId: "1:949736169495:web:12d470b7fc84e52222fc52"

};
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
const db = getFirestore(app)
export {db}
