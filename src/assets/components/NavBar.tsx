import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import bibleIcon from '../image/bibleIcon.ico'
import ToggleButton from './ToggleButton'
    


const NavBar = () => {
  return (
    <>
    <HStack justifyContent='space-between' padding={2}>
   <Image src={bibleIcon} boxSize='60px'/>
    <ToggleButton />  
   </HStack>
   </>
  )
}

export default NavBar
