import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyCRclcuiWv_LK2GT3AKQVtT-pd_Q7Aj6Fg",
authDomain: "jnc-gram.firebaseapp.com",
projectId: "jnc-gram",
storageBucket: "jnc-gram.appspot.com",
messagingSenderId: "927339983895",
appId: "1:927339983895:web:4e00b0c114ee01ab2ed852"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const appStorage = firebase.storage()
const appFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export {appStorage, appFirestore, timestamp}