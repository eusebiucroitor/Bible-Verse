import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import {BsSearch}from 'react-icons/bs'


const SearchImput = () => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <>
    <form style={{width: '100%'}}>
        
        <InputGroup>
        <InputLeftElement children={<BsSearch /> }/>
        <Input borderRadius={20} placeholder='Bible Verse...' variant='filled'></Input>
        </InputGroup>
        
    </form>  
    </>
  )
}

export default SearchImput
