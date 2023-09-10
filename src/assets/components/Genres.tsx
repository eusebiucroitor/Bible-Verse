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
     
   
<nav className="navbar ">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </div>
</nav>
<List className='collapse' id="navbarToggleExternalContent" >
        {books.map( book =>  
        <ListItem  key={book.id} paddingY='2px'>
          <HStack  >
           
            <Button whiteSpace='normal' textAlign='left'   fontSize='lg' variant='link' padding={2} >{book.name}</Button>
          </HStack>
          </ListItem> )}
    </List>
    
      </>
  )}
  


export default Genres
