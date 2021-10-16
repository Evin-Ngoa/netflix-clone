// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const firebaseConfig  = {
    apiKey: "AIzaSyBWBgX_Dfic3kFJ_IDHoClqGTAFvpjbuCs",
    authDomain: "netflixclone-7895b.firebaseapp.com",
    projectId: "netflixclone-7895b",
    storageBucket: "netflixclone-7895b.appspot.com",
    messagingSenderId: "396176658342",
    appId: "1:396176658342:web:444ebdd0cf98d0512a4967"
  };

  
  
    const firebase = Firebase.initializeApp(firebaseConfig);
    // const db = initializeApp(firebaseConfig);
    // const firebase = getFirestore(db);

  // 2) when seeding the database you'll have to uncomment this!
//   seedDatabase(firebase);
  // 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data
  
  export { firebase };