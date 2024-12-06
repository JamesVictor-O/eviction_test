import axios from 'axios'
import React, { useEffect, useState } from 'react'


const UsersComponent = () => {
    const[userData,setUserData]=useState()
    const url="https://jsonplaceholder.typicode.com/users"
    useEffect(()=>{
      axios.get(url).then(responses => {
        setUserData(responses.data)
      }).catch((err)=> {
        console.log(err.message)
      })
    },[])

    // useEffect(()=>{
    //     console.log(userData)
    // },[userData])
  return (
    <div>
      
    </div>
  )
}

export default UsersComponent
