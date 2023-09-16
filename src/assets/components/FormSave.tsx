import React from 'react'
interface Book{
    id:number;
    bibleVers: string;
    bibleBook:string;
    chapter:number;
    verse:number;
    name:string;
    data:string;
}

interface Props{
    books:Book[]
    onDelete:(id:number)=>void;
}

const FormSave = ({books,onDelete}:Props) => {
    if(books.length===0) return null;
  return (
    <div>
      <table className="table table-border">
        <thead>
            <tr>
                <th>Bible Vers</th>
                <th>Bible Book</th>
                <th>Chapter</th>
                <th>Vers</th>
                <th>Name</th>
                <th>Data</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {books.map(book => <tr key= {book.id}>
                <td>{book.bibleBook}</td>
                <td>{book.bibleVers}</td>
                <td>{book.chapter}</td>
                <td>{book.verse}</td>
                <td>{book.name}</td>
                <td>{book.data}</td>
                <td>
                    <button className="btn btn-outline-danger" onClick={()=>onDelete(book.id)}>Delete</button>
                </td>
            </tr>)}
        </tbody>
      </table>
    </div>
  )
}

export default FormSave
