import { Button, ButtonGroup, Input, InputGroup, TagLabel } from '@chakra-ui/react'
import { SyntheticEvent, useState,} from 'react'


const FormAdd = () => {
 const [bibleVers,setBibleVers]= useState('');
 const [books,setBooks]= useState('');
 const [chapter,setChapter]= useState('');
 const [verse,setVerse]= useState('');
 const [personName,setPersonName]= useState('');
 const [data,setData]= useState('');

 const handleSubmit= (e:SyntheticEvent) => {
    e.preventDefault()
    const book={bibleVers,books,chapter,verse,personName,data}
    console.log(book)
 }

  
 
  
  return (
    <>
    <form onSubmit={handleSubmit}  >
        
        
        <Input borderRadius={20} placeholder='Introduce a Bible Verse...' variant='filled' marginY={5} style={{width:'91%' }} value={bibleVers} onChange={(e)=>setBibleVers(e.target.value)}   ></Input>
    {  /* Code for second line of form        */}
        <InputGroup >
            <Input borderRadius={20} placeholder='Introduce The Bible Reference'style={{width:'45%' }} value={books} onChange={(e)=>setBooks(e.target.value)} ></Input>
            <Input borderRadius={20} type="value" name="value" placeholder='Chapter...'  style={{width:'23%' }} value={chapter} onChange={(e)=>setChapter(e.target.value)}  />
            <Input  borderRadius={20} type="value" name="value" placeholder='Verse...'  style={{width:'23%' }} value={verse} onChange={(e)=>setVerse(e.target.value)} />
        </InputGroup>
      {  /* Code for third line of form        */}
        <InputGroup marginY={5} >
          <Input borderRadius={20} placeholder='Introduce Your Name...'style={{width:'45%' }}value={personName} onChange={(e)=>setPersonName(e.target.value)}   ></Input>
          <Input borderRadius={20} type="date" name="date"  style={{width:'46%' }} value={data} onChange={(e)=>setData(e.target.value)}   />
        </InputGroup>
        
        
        <div style={{ display: 'flex', justifyContent: 'center',marginRight: '9%', }}>
        <button className="button button2" >Save</button>
            </div>    
            
       
    </form>  
    </>
  )
}

export default FormAdd
