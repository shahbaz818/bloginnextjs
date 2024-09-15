'use client'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [title,setTitle]=useState("")
  const [image,setImage]=useState("")
  const [description,setDescription]=useState("")
  const [category,setCategory]=useState("lifestyle")
  const handleChange=async(e)=>{
    e.preventDefault()
    console.log(title,image,description,category);
    const res=await fetch("http://localhost:3000/api/blog",{
      method:"POST",
      body: JSON.stringify({title,image,description,category }),
      headers:{
        "Content-Type":"application/json",
      },
    })
    const result = await res.json();
    if (result.success) {
      toast.success('Blog Added successfully!');
    } else {
      toast.error('Blog Add process fail!');
    }
    
  }

  return (
   <>
   <div className='bg-slate-100 h-full'>
    <div className='ml-20 mt-20'>
    <h1 className='text-xl text-blue-500'>Add Blog</h1>
    <form >
      <div className='flex flex-col gap-2'>
      <label className='mt-2 '>Title</label>
      <input type="text" name='title' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Add Title' className='outline h-10 w-[400px] mt-1 rounded-md '/>
      <label className='mt-2 '>Image</label>
      <input type="text" name='image' value={image} onChange={(e)=>setImage(e.target.value)} placeholder='Add Title' className='outline h-10 w-[400px] mt-1 rounded-md '/>
      <label className='mt-2 '>Description</label>
      <textarea placeholder='Add Title' rows={6} name='description' value={description} onChange={(e)=>setDescription(e.target.value)}  className='outline w-[400px] mt-1 rounded-md '/>
      <label className='mt-2 '>Blog Category</label>
      <select value={category} onChange={(e)=>setCategory(e.target.value)}  className='mt-1 h-10 w-[120px] outline'>
        <option value="lifestyle">LifeStyle</option>
        <option value="technology">Technology</option>
        <option value="startup">Startup</option>
      </select>
      <button className='mt-4 bg-blue-600 h-10 w-[120px] rounded-md text-xl' onClick={handleChange}>Add Blog</button>

      </div>
      
    </form>
    </div>
   
   </div>
   
   </>
  )
}

export default page