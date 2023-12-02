import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Read() {
    const[read,setRead]=useState([])
    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:3000/student/${id}`)

        .then(res=>{
            setRead(res.data)
        })
        .catch(err=>console.log(err))
    },[])

    console.log(read);
  return (
    <div>


      <div className='h-[90vh] flex'>
        <div className='bg-slate-500/30 p-10 rounded-lg w-[50vw]  flex flex-col gap-10  m-auto'>
            <h1 className='text-[2rem] text-center '>Name:{read.name}</h1>
            <h1 className='text-[2rem] text-center '>Subject:{read.subject}</h1>
            <h1 className='text-[2rem] text-center '>Mark:{read.mark}</h1>
            <h1 className='text-[2rem] text-center '>DOB:{read.dob}</h1>
        <div>
            <div className='flex items-center w-full justify-center'>

        <Link to={`/Update/${id}`}>
        <button className=' bg-green-400 rounded-lg px-4 py-2 mr-3 ml-6'>Edit</button>
        </Link>
        <Link to='/'>
        <button className=' bg-green-400 rounded-lg px-4 py-2 mr-3 ml-6'>Back</button>
        </Link>
            </div>
    
        </div>     
        </div>
      
      </div>
      
    </div>
  )
}
