import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
interface SearchInputProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ searchQuery, onSearchChange, onSearchSubmit}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission
    onSearchSubmit(); // Call the provided onSubmit function
  };
  return (
    <>
    <form onSubmit={handleSubmit} style={{width: '100%'}} >
        
        <InputGroup>
        <InputLeftElement children={<BsSearch /> }/>
        <Input
         borderRadius={20}
          placeholder='Search Bar....' 
          variant='filled' 
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
         
          />
           <button type="submit" className='btn btn-primary'>Search</button> 
        </InputGroup>
        
    </form>  
    
    </>
  )
}


export default SearchInput
