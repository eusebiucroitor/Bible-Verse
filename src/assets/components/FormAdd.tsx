import {  Input, InputGroup,  } from '@chakra-ui/react'
import {z} from 'zod'
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'

interface Props{
  onSubmit:(data:FormAddData)=>void;
}

const schema = z.object({
  bibleVerse:z.string().min(2, {message: 'required'}).max(1000),
  bibleBook:z.string().min(3, {message: 'required'}).max(20),
  chapter:z.number({invalid_type_error: 'required'}).min(0).max(1000),
  verse:z.number( {invalid_type_error: 'required'}).min(0).max(1000),
  name:z.string().min(2, {message: 'required'}).max(20),
  date:z.string().min(0, {message: 'required'}).max(20),

})

type FormAddData = z.infer<typeof schema>;



const FormAdd = ({onSubmit}:Props) => {
  

 const { register,handleSubmit,formState:{errors}} = useForm<FormAddData>({resolver:zodResolver(schema)})
 
  
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}   >
        
        
        <Input {...register('bibleVerse')} borderRadius={20} placeholder='Introduce a Bible Verse...' variant='filled' marginY={5} style={{width:'91%' }}  ></Input>
        {errors.bibleVerse && <p className='text-danger'>{errors.bibleVerse.message}</p>}
    {  /* Code for second line of form        */}
        <InputGroup >
            <Input {...register("bibleBook")} borderRadius={20} placeholder='Introduce The Bible Reference'style={{width:'45%' }} ></Input>
            {errors.bibleBook && <p className='text-danger'>{errors.bibleBook.message}</p>}
            <Input {...register('chapter',{valueAsNumber: true})} borderRadius={20} type="number" id='chapter' placeholder='Chapter...'  style={{width:'23%' }} />
            {errors.chapter && <p className='text-danger'>{errors.chapter.message}</p>}
            <Input {...register('verse',{valueAsNumber: true})}  borderRadius={20} type="number" id='verse' placeholder='Verse...'  style={{width:'23%' }}  />
            {errors.verse && <p className='text-danger'>{errors.verse.message}</p>}
        </InputGroup>
      {  /* Code for third line of form        */}
        <InputGroup marginY={5} >
          <Input {...register('name')}  borderRadius={20} placeholder='Introduce Your Name...'style={{width:'45%' }} ></Input>
          {errors.name && <p className='text-danger'>{errors.name.message}</p>}
          <Input {...register('date')}  borderRadius={20} type="date" name="date"  style={{width:'46%' }}   />
          {errors.date && <p className='text-danger'>{errors.date.message}</p>}
        </InputGroup>
        
        
        <div style={{ display: 'flex', justifyContent: 'center', marginRight: '9%' }}>
        <button className="button button2"  >Save</button>
        </div>              
    </form>     
    </>
    
  )
  
}
  

export default FormAdd
