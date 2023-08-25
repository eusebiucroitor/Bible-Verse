import { Button, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import ToggleButton from './assets/components/ToggleButton'

const App = () => {
  return (
    <>
    <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    <ToggleButton />
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
</Grid>
    
    </>
  )
}

export default App
