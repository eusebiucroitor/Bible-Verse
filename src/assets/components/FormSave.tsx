import { Box} from "@chakra-ui/react";

interface Book{
    id:number;
    bibleVerse: string;
    bibleBook:string;
    chapter:number;
    verse:number;
    name:string;
    date:string;
}

interface Props{
    books:Book[]
    onDelete:(id:number)=>void;
}

const FormSave = ({books,onDelete}:Props) => {
    if(books.length===0) return null;
  return (
    <div >
      <Box >
      <table className="table table-border" >
        <thead >
            <tr >
                <th>Bible Verse</th>
                <th>Bible Book</th>
                <th>Chapter</th>
                <th>Vers</th>
                <th>Name</th>
                <th>Date</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {books.map(book => <tr key= {book.id}>
                <td>{book.bibleVerse}</td>
                <td>{book.bibleBook}</td>
                <td>{book.chapter}</td>
                <td>{book.verse}</td>
                <td>{book.name}</td>
                <td>{book.date}</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={()=>onDelete(book.id)}>Delete</button>
                </td>
            </tr>)}
        </tbody>
      </table>
      </Box>
    </div>
  )
}

export default FormSave
