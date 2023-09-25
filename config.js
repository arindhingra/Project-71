import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyAl-emUNn-IXFfgEZi4R1O9H9iYruxVHno",
  authDomain: "project-71-54af2.firebaseapp.com",
  projectId: "project-71-54af2",
  storageBucket: "project-71-54af2.appspot.com",
  messagingSenderId: "575667716089",
  appId: "1:575667716089:web:cb97a3cbec4fd6ac898728"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
