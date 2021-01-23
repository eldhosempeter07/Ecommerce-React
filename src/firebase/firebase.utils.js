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
  
  export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
      const {displayName , email} = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch (error) {
        console.log("Error in creating User",error.message );
      }
    }
    return userRef;
  }

  export const addCollectionAndDocument = (collectionKey,objectToAdd) =>{
      const collectionRef = firestore.collection(collectionKey)
      
      const batch = firestore.batch();
      objectToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef,obj)
      });
      batch.commit();
  }

  export const convertCollectionsSnapshotToMap = (collections) =>{
      const transformedCollection = collections.docs.map(doc=>{
        const {title,items} = doc.data()
        return{
          routeName:encodeURI(title.toLowerCase()),
          id:doc.id,
          title,
          items
        }
        
      })
      return transformedCollection.reduce((accumulator,collections)=>{
        accumulator[collections.title.toLowerCase()] = collections
        return accumulator;
      },{})
  }


  


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt:'select_account'})

export const signInWithGoogle = ()=>auth.signInWithPopup(provider);
export default firebase;