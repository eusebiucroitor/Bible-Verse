import { Button, HStack, Switch, Text, useColorMode } from '@chakra-ui/react'
import React, { useState } from 'react'

const ToggleButton = () => {
    const {toggleColorMode,colorMode} = useColorMode();
  return (
    <HStack >
        <Switch colorScheme= 'green' isChecked={colorMode=== 'dark' } onChange={toggleColorMode}/>
        <Text whiteSpace='nowrap' >Dark Mode</Text>
    </HStack>
  )
}

export default ToggleButton
