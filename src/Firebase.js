// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";


// const firebaseConfig = {
//   apiKey: "AIzaSyDDwh6QLN7YEQjJLjpeyAhywCgz25RlFnc",
//   authDomain: "hamrowakil.firebaseapp.com",
//   databaseURL: "https://hamrowakil-default-rtdb.firebaseio.com",
//   projectId: "hamrowakil",
//   storageBucket: "hamrowakil.appspot.com",
//   messagingSenderId: "657501614085",
//   appId: "1:657501614085:web:b1970880f07feac8906c6c"
// };

const firebaseConfig = {
 
  apiKey: "AIzaSyDZh1rmym_yvA76pBnjns0_3g4A-wEY4gc",
  authDomain: "hamrowakil-d3a2e.firebaseapp.com",
  databaseURL: "https://hamrowakil-d3a2e-default-rtdb.firebaseio.com",
  projectId: "hamrowakil-d3a2e",
  storageBucket: "hamrowakil-d3a2e.appspot.com",
  messagingSenderId: "447191334220",
  appId: "1:447191334220:web:122af65027cb27a8d063e9"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
// export const storage = firebase.storage("gs://react-project1-61977.appspot.com");

export default firebase;



