
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const firebaseConfig  = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  
const firebase = Firebase.initializeApp(firebaseConfig);

  // 2) when seeding the database you'll have to uncomment this!
  //   seedDatabase(firebase);
  // 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
  
  export { firebase };