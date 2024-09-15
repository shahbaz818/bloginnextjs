"use client"
import React, { useEffect, useState } from 'react'

import Link from 'next/link'
import axios from 'axios'
const Cart = () => {
    const [manu,setManu]=useState('All')

    const [blogs,setBlogs]=useState([])
        const fetchData=async()=>{
            let res=await fetch("https://bloginnextjs.vercel.app//api/blog")
            const data=await res.json()
            console.log(data)
            setBlogs(data)
            
        }
        useEffect(()=>{
            fetchData()
        },[])
    
    return (
        <>
            <div>
                <div className='flex justify-center items-center space-x-4'>
                    <button onClick={() => setManu('All')} className={manu === "All" ? 'bg-black text-white h-10 w-24 rounded-md' : ""}>All</button>
                    <button onClick={() => setManu('technology')} className={manu === "technology" ? 'bg-black text-white h-10 w-24 rounded-md' : ""}>Technology</button>
                    <button onClick={() => setManu('startup')} className={manu === "startup" ? 'bg-black text-white h-10 w-24 rounded-md' : ""}>Startup</button>
                    <button onClick={() => setManu('lifestyle')} className={manu === "lifestyle" ? 'bg-black text-white h-10 w-24 rounded-md' : ""}>Lifestyle</button>
                </div>
                <div className="flex flex-wrap cart w-full h-full ml-20 space-x-4 space-y-4 ">
                    {
                        blogs.filter((blog)=> manu==="All"?true:blog.category===manu).map((blog, index) => {
                            return (

                                <div key={index._id} class=" max-w-sm rounded overflow-hidden shadow-lg bg-white">
                                    <div class="px-6 py-4">
                                        <img src={blog.image} height={200} width={470} alt="image" className='rounded-md' />
                                        <div class="font-bold text-xl mb-2 text-blue-400">{blog.category}</div>
                                        <div class="font-bold text-xl mb-2 text-blue-400">{blog.title.slice(0, 20)}</div>
                                        <p class="text-gray-700 text-base">
                                            {blog.description.slice(0, 30)}
                                        </p>
                                        <Link href={`/blog/${blog._id}`}><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold  mt-4 py-2 px-4 rounded-full">
                                            Read More
                                        </button></Link>
                                    </div>

                                </div>

                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default Cart