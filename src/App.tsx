import { Button, Grid, GridItem, HStack } from '@chakra-ui/react'
import React from 'react'

import NavBar from './assets/components/NavBar'
import Genres from './assets/components/Genres'

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
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2'  area={'header'} >
   
      <NavBar />
    
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'nav'}>
   App
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
</Grid>
    
    </>
  )
}

export default App
