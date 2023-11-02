import {  Box, Input, InputGroup, useColorMode,  } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import {db} from "./firebase"
import { string } from 'zod';
import firebase from 'firebase/compat';

interface BibleData {
  bibleVers: string;
  bibleBook: string;
  name: string;
  chapter: any;
  verse: any;
}

const NewFormAdd = () => {
  const [bibleVers, setBibleVers] = useState<string>('');
  const [bibleBook, setBibleBook] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [chapter, setChapter] = useState<number | ''>('');
  const [verse, setVerse] = useState<number | ''>('');
  
  
  

  
  useEffect(() => {
    localStorage.setItem('book', JSON.stringify({bibleVers,bibleBook,name,chapter,verse}))
    
  }, [{bibleVers}])

  const [showTable, setShowTable] = useState<boolean>(false);
  const [hideTable, setHideTable] = useState<boolean>(false);

  const handleBibleVersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBibleVers(event.target.value);
  };

  
  const handleBibleBookChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBibleBook(event.target.value);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };


 
  const handleChapterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Ensure that the input value is a valid number or an empty string
    if (/^\d*$/.test(value) || value === '') {
        setChapter(value === '' ? '' : parseInt(value, 10));
      }
  };
  const handleVerseChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    // Ensure that the input value is a valid number or an empty string
    if (/^\d*$/.test(value) || value === '') {
      setVerse(value === '' ? '' : parseInt(value, 10));
    }
  };
  const [savedData, setSavedData] = useState<Array<{ bibleVers: string; bibleBook: string; name: string; chapter: any; verse: any }>>([]);

  const handleSaveClick = (e: { preventDefault: () => void; }) => {
    const newData: BibleData = { bibleVers, bibleBook, name, chapter, verse };
    const dataRef = db.ref('/bibleVerses'); // Replace 'your-database-path' with your desired path

    // Push the new data to the database
    dataRef.push(newData)
      .then(() => {
        // Data saved successfully
        console.log('Data saved successfully.');
      })
      .catch((error) => {
        // Handle any errors
        console.error('Error saving data:', error);
      });
    // Save the input values to the savedData state
    setSavedData([...savedData, { bibleVers, bibleBook,name, chapter ,verse }]);
    // Clear the input fields
    setBibleVers('');
    setBibleBook('');
    setName('');
    setChapter('');
    setVerse('');
    e.preventDefault();
    setShowTable(true);
  };
  const [data, setData] = useState({}); // Your form data state

 
  const [fetchedData, setFetchedData] = useState<BibleData[]>([]);

  useEffect(() => {
    const dataRef = db.ref('/bibleVerses');

    dataRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const dataArray: BibleData[] = Object.values(data) as BibleData[];
        setFetchedData(dataArray);
      }
    });
  }, []);


  const handleDeleteClick = (index: number) => {
   
    const newData = [...fetchedData];
    const dataToDelete = newData[index];

    const dataRef = db.ref('/bibleVerses');

    // Find the data in Firebase and delete it based on a unique identifier (for example, ID or specific key)
    dataRef.orderByChild('bibleVers').equalTo(dataToDelete.bibleVers).once('value', (snapshot) => {
      snapshot.forEach((child) => {
        child.ref.remove();
      });
    });

    newData.splice(index, 1);
    setFetchedData(newData);
  };
  
  
  const [searchQuery, setSearchQuery] = useState<string>('');

  // State to hold the filtered data
  const [filteredData, setFilteredData] = useState<
    Array<{ bibleVers: string; bibleBook: string; name: string; chapter: any; verse: any }>
  >([]);

  // Handler to handle search submission
  const handleSearchSubmit = () => {
    // Filter the data based on the searchQuery
   
    const filtered = fetchedData.filter((data) =>
      data.bibleVers.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.bibleBook.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      data.chapter.toString().includes(searchQuery) ||
      data.verse.toString().includes(searchQuery)
    );
    
    // Update the filtered data state
    setFilteredData(filtered);
    setHideTable(true)
    setShowTable(true)
    
    setShowSearchTable(filtered.length > 0);
    setSearchQuery('');
  };
  const [showSearchTable, setShowSearchTable] = useState<boolean>(false);
  const handleDeleteItem = (index: number) => {
    const updatedData = [...savedData];
    updatedData.splice(index, 1);
    setSavedData(updatedData);
    
  
    // Remove the deleted item from filteredData if it exists
    const filteredCopy = [...filteredData];
    const deletedItem = filteredCopy.find((item) => fetchedData.indexOf(item) === index);
    if (deletedItem) {
      const deletedIndex = filteredCopy.indexOf(deletedItem);
      filteredCopy.splice(deletedIndex, 1);
      setFilteredData(filteredCopy);
    }
    
  };
  const handleDarkModeToggle = () => {
    toggleColorMode();
  };
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Box color={colorMode === 'dark' ? 'white' : 'black'}>
    
    
    <div>
      <div>
         
        
    <form  >
        <Input  
        borderRadius={20}
         placeholder='Introduce a Bible Verse...' 
         variant='filled'
          marginY={5} 
          style={{width:'91%' }}
          type="text"
          value={bibleVers}
          onChange={handleBibleVersChange} 
            />
    {  /* Code for second line of form        */}
        <InputGroup >
        
            <Input 
               borderRadius={20}
               placeholder='Introduce The Bible Reference'
               style={{width:'45%' }} 
               type="text"
               value={bibleBook}
               onChange={handleBibleBookChange}  />
            <Input  
               borderRadius={20}
               type="number" 
               placeholder='Chapter...' 
               style={{width:'23%' }}
               value={chapter}
               onChange={handleChapterChange}  />
               <Input
               borderRadius={20}
               placeholder='Verse'
               style={{width:'23%' }}
               type="number"
               value={verse}
               onChange={handleVerseChange} />     
        </InputGroup>
      {  /* Code for third line of form        */}
        <InputGroup marginY={5} >
        <Input
               borderRadius={20}
               placeholder='Introduce your name....'
               style={{width:'91%' }}
               type="text"
               value={name}
               onChange={handleNameChange} />
          
        </InputGroup>
        <div style={{ display: 'flex', justifyContent: 'center', marginRight: '9%' }}>
        <button className="button button2" onClick={handleSaveClick}  >Save</button>
        </div>         
    </form>     
    </div>
    
        <SearchInput   searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
        
        />     
      {filteredData.length === 0 && ( 
           <div>
       {fetchedData.length > 0 ? (  
        <div>
        <h4>Bible Form</h4>   
    <table   className="length" >
        <thead >
          <tr  >
            <th style={{paddingRight:"80px"}}>Bible Vers</th>
            <th>Bible Book</th>
            <th>Chapter</th>
            <th >Vers</th>
            <th>Name of the person</th>
            <th></th>
          </tr>
        </thead>
        
        <tbody>
          {fetchedData.map((data, index) => (
            <tr key={index}>
              <td>{data.bibleVers}</td>
              <td>{data.bibleBook}</td>
              <td>{data.chapter}</td>
              <td>{data.verse}</td>
              <td>{data.name}</td>
              <td style={{paddingRight:"14px"}}>
                <button  onClick={() => handleDeleteClick(index)} className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
         ) : (
        
          <p></p>
          
        )}
      </div>
      
      
      
      
        )}
    {hideTable  && filteredData.length != 0  &&   (
        <div>
          { fetchedData.length>0? (
            <div>
          <h2>Search Results</h2>
          
          
           <table   className="length">
           <thead >
             <tr>
               <th>Bible Vers</th>
               <th>Bible Book</th>
               <th>Chapter</th>
               <th >Vers</th>
               <th>Name of the person</th>
               <th></th>
             </tr>
           </thead>
           
           <tbody>
             {filteredData.map((data, index) => (
               <tr key={index}>
                 <td>{data.bibleVers}</td>
                 <td>{data.bibleBook}</td>
                 <td>{data.chapter}</td>
                 <td>{data.verse}</td>
                 <td>{data.name}</td>
                 <td style={{paddingRight:"12px"}}>
                   <button  onClick={() => handleDeleteItem(fetchedData.indexOf(data) )} className="btn btn-outline-danger" >Delete</button>
                 </td>
               </tr>
             
             ))}
             
             
           </tbody>
         </table>
         </div>
          )  :  (
            <p>No matching results found.</p>
          )}
        
        </div>
        

    )}
    
    
    </div> 
    </Box>
  )
  
}


export default NewFormAdd



