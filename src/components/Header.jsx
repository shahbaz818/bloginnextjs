
"use client"
import React from 'react'
import Image from 'next/image'
import imagePublic from '../../public/blog.png'
import Link from 'next/link'

const Header = () => {
  return (
    <>
    <div className='h-20 w-full'>
        <div className='flex justify-between items-center p-4 ml-20 mr-20 mx-auto'>
            <Link  href='/'>
            <div className='flex justify-center text-balance items-center gap-4 cursor-pointer'>
                <Image src={imagePublic} alt="image" height={60} width={60}/>
                <h1 className='text-blue-500 text-2xl'>Blog</h1>
            </div>
            </Link>
            <button className='bg-pink-300 text-2xl h-10 w-36 rounded-lg shadow-xl cursor-pointer'>Get Started</button>
        

        </div>
    </div>
    
    </>
  )
}

export default Header