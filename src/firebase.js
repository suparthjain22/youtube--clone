import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDVegjn3eTeeW9_elXc_S5RtQKNB9-Rapo",
  authDomain: "suparth-utube-clone.firebaseapp.com",
  projectId: "suparth-utube-clone",
  storageBucket: "suparth-utube-clone.appspot.com",
  messagingSenderId: "967114368650",
  appId: "1:967114368650:web:263e77076f878a95996f73"
};
  
firebase.initializeApp(firebaseConfig)

export default firebase.auth()