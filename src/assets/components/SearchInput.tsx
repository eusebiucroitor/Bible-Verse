import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { ChangeEventHandler, useEffect, useRef, useState } from 'react'
import {BsSearch} from 'react-icons/bs'



const SearchImput = () => {
    const ref = useRef<HTMLInputElement>(null)
  
   
  return (
    <>
    <form style={{width: '100%'}}>
        
        <InputGroup>
        <InputLeftElement children={<BsSearch /> }/>
        <Input borderRadius={20} placeholder='Search a Bible Verse...' variant='filled' ></Input>
        </InputGroup>
        
    </form>  
    </>
  )
}

export default SearchImput
