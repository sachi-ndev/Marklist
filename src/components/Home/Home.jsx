import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import MarkChart from './Chart';

export default function Home() {

  const [data,setData]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
      axios.get('http://localhost:3000/student')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
    
  },[])
  
  console.log(data);

const handleDelete=(id)=>{
  const confirm = window.confirm("would you like o delete")
  if(confirm){
    axios.delete(`http://localhost:3000/student/${id}`)
    .then(res=>{
      navigate('/')
    })
    .catch(err=>console.log(err))
  }
}



  return (
    <div>
   
  <div className='flex justify-between mt-[4rem]'>
    <h1 className=' text-[2rem]'>Mark Of Students</h1>
    <div>
    <Link to='/add'>
    <button className=' bg-green-400 rounded-lg px-4 py-2 mr-3'>Add +</button>
    </Link>
    <Link to="/chart">
    <button className=' bg-teal-400 rounded-lg px-4 py-2 mr-3'>View Graph</button>
    </Link>
    </div>

  </div>

    <div className=" w-[90vw] mt-[2rem] mx-auto overflow-x-auto">
              <table className="table-auto  w-full">
                <thead className=" text-xs  font-semibold uppercase text-gray-500 bg-gray-50">
                  <tr>
                    <th className="p-1 whitespace-nowrap">
                      <div className="font-semibold text-left">No</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Subject</div>
                    </th>
                    <th className="p-2   whitespace-nowrap">
                      <div className="font-semibold text-left">Mark</div>
                    </th>
                    <th className="p-2   whitespace-nowrap">
                      <div className="font-semibold text-left">D.O.B</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Action</div>
                    </th>
               
                  </tr>
                </thead>
                <tbody className=" text-sm divide-y divide-gray-100">
                  {data.map((data, index) => (
                    <tr key={index}>
                      <td>
                        <p className="ml-2">{index +1}</p>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="font-medium text-gray-800">
                            {data.name}
                          </div>
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left">
                          
                          {data.subject}
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          {data.mark}
                      
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                        <div className="text-left font-medium text-green-500">
                          {data.dob}
                      
                        </div>
                      </td>
                      <td className="p-2 whitespace-nowrap">
                      <Link to={`/read/${data.id}`}>
                      <button className=' bg-green-400 rounded-lg px-4 py-2 mr-3'>Read</button>
                      </Link>
                      <Link to={`/Update/${data.id}`}>
                      <button className=' bg-blue-400 rounded-lg px-4 py-2 mr-3'>Edit</button>
                      </Link>   
                      <button onClick={(e)=> handleDelete(data.id)} className=' bg-red-400 rounded-lg px-4 py-2 mr-3'>Delete</button>
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


                    <div>

                      <MarkChart />
                    </div>


  </div>
  )
}
