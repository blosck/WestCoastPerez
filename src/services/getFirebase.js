import firebase from "firebase"
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBnIqhR2RFMFVjO9Whawlr6shLUj22pwnw",
    authDomain: "west-coast-gear.firebaseapp.com",
    projectId: "west-coast-gear",
    storageBucket: "west-coast-gear.appspot.com",
    messagingSenderId: "662621298550",
    appId: "1:662621298550:web:eb2fd72392cca6875c2457"
  };

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore(){
      return firebase.firestore(app)
}