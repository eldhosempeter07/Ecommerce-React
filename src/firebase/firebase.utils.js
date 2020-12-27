import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

var config = {
    apiKey: "AIzaSyAgZU0e1hyGOV3CFrQ-Gz9uo_vYEpf2buc",
    authDomain: "crwn-db-f2ee0.firebaseapp.com",
    projectId: "crwn-db-f2ee0",
    storageBucket: "crwn-db-f2ee0.appspot.com",
    messagingSenderId: "825841085142",
    appId: "1:825841085142:web:801f3adbaf0367e547b777"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt:'select_account'})

  export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
  export default firebase;