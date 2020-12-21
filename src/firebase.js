// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAluZQ_Dza-fCxLyoEILf7d4VYzgufMiBI",
    authDomain: "whatsapp-clone-de1c4.firebaseapp.com",
    projectId: "whatsapp-clone-de1c4",
    storageBucket: "whatsapp-clone-de1c4.appspot.com",
    messagingSenderId: "346944893128",
    appId: "1:346944893128:web:56afb64eee84cd005135fd",
    measurementId: "G-8P1K5H8751"
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;