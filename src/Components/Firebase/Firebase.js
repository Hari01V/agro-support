import firebase from 'firebase/app';
import "firebase/auth";

class Firebase {
  constructor() {
    firebase.initializeApp({
      //INITIALIZE IT WITH FIREBASE CONFIG
      apiKey: process.env.REACT_APP_API_KEY,
      authDomain: process.env.REACT_APP_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_PROJECT_ID,
      storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_APP_ID
    });

    this.auth = firebase.auth();
    this.firestore = firebase.firestore();
  }

  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider);
  }
}

export default Firebase;