import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAPRVjrnhlffz8dME0Ssn2qnQCeTTuO26s",
    authDomain: "ravoluzen-photoscape.firebaseapp.com",
    projectId: "ravoluzen-photoscape",
    storageBucket: "ravoluzen-photoscape.appspot.com",
    messagingSenderId: "442685190354",
    appId: "1:442685190354:web:45a6ce4afdbfe6b2babd0b"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };