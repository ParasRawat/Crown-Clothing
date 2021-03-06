import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
//todo

/**
 * 
 * USE YOUR FIREBASE CREDENTIALS HERE FOR DATA PERSISTENCE 
 */

apiKey: "AIzaSyDY38cUVTaVrxu99qeLqSxZa1dK_flhHhM",
authDomain: "crown-db-b409b.firebaseapp.com",
databaseURL: "https://crown-db-b409b.firebaseio.com",
projectId: "crown-db-b409b",
storageBucket: "crown-db-b409b.appspot.com",
messagingSenderId: "711502642888",
appId: "1:711502642888:web:2b99cf95948af1f1bfeffd",
measurementId: "G-F0EPEJS0SH"
        
      };

    export const createUserProfileDocument =  async (userAuth, additionalData) =>{

      if(!userAuth) return ;
      
       //at this point we have the unique user id with us 

       const userRef = firestore.doc(`users/${userAuth.uid}`);

       const snapSHot = await userRef.get(); 


       if(!snapSHot.exists){
         
        //if the snapshot does not exists we want to create a peice of data there
        const {displayName, email} = userAuth;

        const createdAt = new Date();

        try{
          
          await userRef.set({

            displayName,
            email,
            createdAt,
            ...additionalData

          })


        }
        catch(error){

          console.log('error creating the user');


        }


       }

       return userRef;

    }

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
