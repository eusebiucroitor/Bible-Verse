import {  ChakraProvider, ColorModeScript, Grid, GridItem, extendTheme } from '@chakra-ui/react'
import NavBar from './assets/components/NavBar'
import Genres from './assets/components/Genres'
import NewFormAdd from './assets/components/NewFormAdd'

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
