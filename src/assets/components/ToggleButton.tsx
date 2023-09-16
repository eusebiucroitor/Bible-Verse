import { Button, HStack, Switch, Text, color, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'

const ToggleButton = () => {
    const {toggleColorMode,colorMode} = useColorMode();
    
    
  return (
    <HStack >
         <Switch colorScheme= 'blue'   isChecked={colorMode=== 'dark' } onChange={toggleColorMode}/>
        <Text whiteSpace='nowrap' marginBottom={2} >Dark Mode</Text>
   </HStack>
  )
}

export default ToggleButton
