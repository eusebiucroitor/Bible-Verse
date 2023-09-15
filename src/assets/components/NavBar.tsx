import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import bibleIcon from '../image/bibleIcon.ico'
import ToggleButton from './ToggleButton'
import SearchImput from './SearchInput'
import Genres from './Genres'
import ExternalContent from './ExternalContent'
    


const NavBar = () => {
  return (
    <>
    <HStack justifyContent='space-between' padding={2} >
   <ExternalContent />
   <SearchImput  />
    <ToggleButton />  
   </HStack>
   </>
  )
}

export default NavBar
