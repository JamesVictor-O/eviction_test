import axios from 'axios'
import React, { useEffect, useState } from 'react'


const UsersComponent = () => {
    const[userData,setUserData]=useState(null)
    const url="https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
      axios.get(url).then(responses => {
        setUserData(responses.data)
      }).catch((err)=> {
        console.log(err.message)
      })
    },[])

    useEffect(()=>{
        console.log(userData)
    },[userData])
  return (
    <div className='p-3'>
        {userData?.map(user=>(
            
        <div className='w-full flex flex-col  border my-2'>
            <div className='p-2'>
                <h2>{user.name}</h2><br /> <span>@{user.username}</span>
            </div>

            <button className='bg-blue-700 text-white rounded-md shadow-md px-4'>
                Follow
            </button>
        </div>
        ))}
      
    </div>
  )
}

export default UsersComponent
