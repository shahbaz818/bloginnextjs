"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Category = () => {
    const [blog,setBlog]=useState([])
        const fetchData=async()=>{
            let res=await fetch("http://localhost:3000/api/blog")
            const data=await res.json()
            console.log(data)
            setBlog(data)
            
        }
        useEffect(()=>{
            fetchData()
        },[])
   
  return (
    <>
    
    </>
  )
}

export default Category