import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Bible from '../image/Bible.jpg'
import ToggleButton from './ToggleButton'

const NavBar = () => {
  return (
    <>
    <HStack justifyContent='space-between' marginX='20px'>
   <Image src={Bible} boxSize='60px'/>
   <Text> 
    <ToggleButton />
   </Text>
   </HStack>
   </>
  )
}

export default NavBar
