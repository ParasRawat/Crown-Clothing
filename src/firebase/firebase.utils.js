import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDY38cUVTaVrxu99qeLqSxZa1dK_flhHhM",
  authDomain: "crown-db-b409b.firebaseapp.com",
  databaseURL: "https://crown-db-b409b.firebaseio.com",
  projectId: "crown-db-b409b",
  storageBucket: "crown-db-b409b.appspot.com",
  messagingSenderId: "711502642888",
  appId: "1:711502642888:web:2b99cf95948af1f1bfeffd",
  measurementId: "G-F0EPEJS0SH"
        
      };

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore= firebase.firestore();

    const provider =new firebase.auth.GoogleAuthProvider();

    provider.setCustomParameters({prompt:'select_account'});

    export const signInWithGoogle = () => {
        
        return auth.signInWithPopup(provider);

    }

    //its like passing a refrence here 
    
    export default firebase;
