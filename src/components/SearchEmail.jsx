"use client"
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const SearchEmail = () => {
  const [email,setEmail]=useState("")

  const handleSend=async(e)=>{
    e.preventDefault()
    const res=await fetch("http://localhost:3000/api/email",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({email}),
    })
    const result=await res.json()
    console.log(result)
    if(result.success){
      toast.success("Email Suscription Successfull")
    }else{
      toast.error("Can't Suscription Email")
    }

  }

  return (
    <div className='flex justify-center shadow-2xl'>
      <form>
        <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='Enter Your Email' className='w-96 p-2 outline-none rounded-l-md border-2 h-10' />
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  h-10 w-24 rounded-r-md' onClick={handleSend}>Subscribe</button>
      </form>

    </div>
  )
}

export default SearchEmail