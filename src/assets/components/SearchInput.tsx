import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'



const SearchInput=() =>{
 return(
    <>
    <form  style={{width: '100%'}} >
        
        <InputGroup>
        <InputLeftElement children={<BsSearch /> }/>
        <Input
         borderRadius={20}
          placeholder='Search Bar....' 
          variant='filled' 
          type="text"
         
          />
            
        </InputGroup>
        <button type="submit" className='btn btn-primary'>Search</button>
    </form>  
    </>
  )
}


export default SearchInput
