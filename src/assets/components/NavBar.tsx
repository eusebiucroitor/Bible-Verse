import { HStack } from '@chakra-ui/react'
import ToggleButton from './ToggleButton'
import SearchInput from './SearchInput'
import ExternalContent from './ExternalContent'
    


const NavBar = () => {
  return (
    <>
    <HStack justifyContent='space-between' padding={2} >
   <ExternalContent />
    <ToggleButton />  
   </HStack>
   </>
  )
}

export default NavBar
