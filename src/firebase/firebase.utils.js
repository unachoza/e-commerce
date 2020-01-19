import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const config={
  apiKey: "AIzaSyDMJ_THzLJusvsIQ0PtJRyoPCe7YO06K6w",
  authDomain: "crownonlineshop-f89f2.firebaseapp.com",
  databaseURL: "https://crownonlineshop-f89f2.firebaseio.com",
  projectId: "crownonlineshop-f89f2",
  storageBucket: "crownonlineshop-f89f2.appspot.com",
  messagingSenderId: "368869751",
  appId: "1:368869751:web:f54efdc9f5338540fda172",
  measurementId: "G-J0408347PK"
};

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ propt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase