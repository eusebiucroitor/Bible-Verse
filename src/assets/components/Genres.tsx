import { Button, HStack, Heading, List, ListItem } from '@chakra-ui/react'
import React from 'react'
import books from './books'


interface books{
    id:number;
    name:string;
}

const Genres = () => {
    
    

  return (
    <>
     
   

<List className='collapse' id="navbarToggleExternalContent" bg='#1A365D' >
        {books.map( book =>  
        <ListItem  key={book.id} paddingY='2px'>
          <HStack  >
           
            <Button whiteSpace='normal' textAlign='left'  fontSize='lg' variant='link' padding={2} >{book.name}</Button>
          </HStack>
          </ListItem> )}
    </List>
    
      </>
  )}
  


export default Genres
