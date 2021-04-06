import firebase from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';

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
    this.auth = firebase.auth();
    this.firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    this.auth.signInWithPopup(provider)
      .then(async (result) => {
        console.log(result);
        //SUCCESSFULLY LOGGED IN
        const profile = result.additionalUserInfo.profile;
        await this.firestore.collection('Users').doc(this.auth.currentUser.uid).set({
          uid: this.auth.currentUser.uid,
          name: profile.name,
          email: profile.email,
          picUrl: profile.picture
        });

      }).catch((error) => {
        //ERROR DURING LOGIN
        console.log("LOGIN ERROR ERROR ERROR ERROR");
        console.log(error);
      });
  }
}

export default Firebase;