import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDDYpAroBZOKhattpAaItvEgfXqFePgIR4",
    authDomain: "whatsapp-mern-6c6f1.firebaseapp.com",
    databaseURL: "https://whatsapp-mern-6c6f1.firebaseio.com",
    projectId: "whatsapp-mern-6c6f1",
    storageBucket: "whatsapp-mern-6c6f1.appspot.com",
    messagingSenderId: "773453743114",
    appId: "1:773453743114:web:bca8490f3da608cc20cbf3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;