import firebase from 'firebase/compat/app';
import 'firebase/database'
import 'firebase/compat/database'




const firebaseConfig = {
    
        apiKey: "AIzaSyDuhbD_oEbQi4iWNeaBdc8U4G3gbcn9mhk",
        authDomain: "bible-fc3f8.firebaseapp.com",
        databaseURL:  "https://bible-fc3f8-default-rtdb.firebaseio.com",
        projectId: "bible-fc3f8",
        storageBucket: "bible-fc3f8.appspot.com",
        messagingSenderId: "39725012311",
        appId: "1:39725012311:web:e70e909757e69c174bda12",
        measurementId: "G-JDW8BNJ766"
      };
       firebase.initializeApp(firebaseConfig);
      const db = firebase.database();

      export { db };


