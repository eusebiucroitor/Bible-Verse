import {  Grid, GridItem } from '@chakra-ui/react'
import NavBar from './assets/components/NavBar'
import Genres from './assets/components/Genres'
import NewFormAdd from './assets/components/NewFormAdd'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuhbD_oEbQi4iWNeaBdc8U4G3gbcn9mhk",
  authDomain: "bible-fc3f8.firebaseapp.com",
  projectId: "bible-fc3f8",
  storageBucket: "bible-fc3f8.appspot.com",
  messagingSenderId: "39725012311",
  appId: "1:39725012311:web:e70e909757e69c174bda12",
  measurementId: "G-JDW8BNJ766"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



const App = () => {
  return (
    <>
    
    <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'60px 1fr 10px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap=''
  color='blackAlpha.700'
  fontWeight='bold'
  bg=''
>
  <GridItem pl='2' bg='#2C5282'  area={'header'} >
   
      <NavBar />
    
  </GridItem>
  <GridItem area={'nav'} bg='' >
   <Genres  />
  </GridItem>
  
  <GridItem pl='2' bg='' area={'main'} >
   <NewFormAdd  /> 
  </GridItem>
  
</Grid>
    
    </>
  )
}

export default App
