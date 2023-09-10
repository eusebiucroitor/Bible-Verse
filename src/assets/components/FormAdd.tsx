import { Button, Center, Input, InputGroup } from '@chakra-ui/react'
import React from 'react'

const FormAdd = () => {
  return (
    <>
    <form style={{width: '100%'}}>
        
        
        <Input borderRadius={20} placeholder='Introduce a Bible Verse...' variant='filled' marginY={5}  ></Input>
        <InputGroup>
        <Input borderRadius={20} placeholder='Introduce Your Name...'style={{width:'50%' }}  ></Input>
        <Input type="date" name="date"  style={{width:'50%' }}  />
        </InputGroup>
        
        
        <div style={{ display: 'flex', justifyContent: 'center',margin: '15px' }}>
            <Button>Save</Button>
        </div>
    </form>  
    </>
  )
}

export default FormAdd
