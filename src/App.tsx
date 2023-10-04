import {  Grid, GridItem, HStack } from '@chakra-ui/react'
import NavBar from './assets/components/NavBar'
import Genres from './assets/components/Genres'
import FormAdd from './assets/components/FormAdd'
import {  useState } from 'react'
import FormSave from './assets/components/FormSave'


const App = () => {
  const [books,setBooks ] = useState([{
    id:1, bibleVerse:"Fiindcă atât de mult a iubit Dumnezeu lumea, că a dat pe singurul Lui Fiu, pentru ca oricine crede în El, să nu piară, ci să aibă viața veșnică", bibleBook:'Ioan', chapter:3, verse:16,name:'Eusebiu', date:'16-09-2023'
  }])
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
    <FormAdd onSubmit={book=>setBooks([...books,{...book,id:books.length+1}])}/>
    <FormSave books={books} onDelete={(id)=>setBooks(books.filter((e)=>e.id !== id))} />
  </GridItem>
  
</Grid>
    
    </>
  )
}

export default App
