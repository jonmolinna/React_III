import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDZhSoh8WbMr6U0iFnifyatWDEMv-zaf1M",
    authDomain: "twitter-clone-58fda.firebaseapp.com",
    databaseURL: "https://twitter-clone-58fda.firebaseio.com",
    projectId: "twitter-clone-58fda",
    storageBucket: "twitter-clone-58fda.appspot.com",
    messagingSenderId: "213308935382",
    appId: "1:213308935382:web:7ec93f88ae684f61684d77",
    measurementId: "G-FMWWVQE71M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;