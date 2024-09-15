import Image from 'next/image'
import React from 'react'
import admin from '../../../public/admin.png'
import Link from 'next/link'

const Sidebar = () => {
    return (
        <>
            <div className='flex flex-col bg-slate-100 ml-2'>
                <div className='px-2 sm:pl-14 py-3border border-black'>
                    <Image src={admin} alt="" height={100} width={100} />
                </div>
                <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-black'>
                    <div className='w-[50%] md:w-[80%] absolute right-0'>
                        <Link href="/admin/addProduct"><div className='flex justify-center border border-black gap-3 font medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                            <h1 className='text-xl text-blue-500'>Add Product</h1>
                        </div></Link>
                        <Link href="/admin/blogList"> <div className='mt-5 flex justify-center border border-black gap-3 font medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                            <h1 className='text-xl text-blue-500'>Blog List</h1>
                        </div></Link>
                        <Link href="/admin/subscription"><div className='mt-5 flex justify-center border border-black gap-3 font medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]'>
                            <h1 className='text-xl text-blue-500'>Subscriptions</h1>
                        </div></Link>
                    </div>


                </div>
            </div>

        </>
    )
}

export default Sidebar