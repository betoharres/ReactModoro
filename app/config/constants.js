import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyAxXU2nhTpvmKGZip5C2qsXpBLu1R8ct7I",
  authDomain: "reactmodoro-590bd.firebaseapp.com",
  databaseURL: "https://reactmodoro-590bd.firebaseio.com",
  storageBucket: "reactmodoro-590bd.appspot.com",
  messagingSenderId: "686708480654"
})

const ref = firebase.database().ref()
const firebaseAuth = firebase.auth()
const facebookProvider = firebase.auth.FacebookAuthProvider

export {
  ref,
  firebaseAuth,
  facebookProvider
}
