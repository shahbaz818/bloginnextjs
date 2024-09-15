import Cart from '@/components/Cart'
import SearchEmail from '@/components/SearchEmail'
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = () => {
  return (
    <>
    <ToastContainer theme="dark"/>
    <div className='h-full w-full mx-auto mt-8'>
        <div className='flex items-center text-center flex-col h-full'>
            <div className='bg-white p-10 rounded-lg'>
                <h1 className='text-2xl font-bold mb-4 text-blue-400'>Latest Blogs</h1>
                <p>A blog site offers a platform for individuals to share their thoughts, expertise, and stories with a global audience. It serves as a digital 
                    space for personal expression, professional insights, and community engagement.</p>
            </div>
            <div>
                <SearchEmail/>
            </div>
           
            <div className='mt-20'>
                <Cart />
            </div>
            
        </div>
        

    </div>
    </>
  )
}

export default Home
