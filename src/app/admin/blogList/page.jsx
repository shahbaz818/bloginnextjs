"use client"
import DeleteBlog from '../../../components/adminComponents/DeleteBlog'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [listBlog, setListBlog] = useState([])

  const fetchData = async () => {
    let res = await axios.get("http://localhost:3000/api/blog")
    console.log(res)
    setListBlog(res.data)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>

      <h1 className='text-2xl text-blue-500 text-center m-5'>Blog List</h1>
      <div className="overflow-x-auto m-3">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="w-full bg-gray-100 text-left">
              <th className="py-3 px-4 border-b">ID</th>
              <th className="py-3 px-4 border-b">Title</th>
              <th className="py-3 px-4 border-b">Date</th>
              <th className="py-3 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {listBlog.map((item, index) => {
              return (
                <tr key={index._id}>

                  <td className="py-3 px-4 border-b">{item._id}</td>
                  <td className="py-3 px-4 border-b">{item.title}</td>
                  <td className="py-3 px-4 border-b">{item.date}</td>
                  <td className="delete-cell">
                    <DeleteBlog id={item._id} />
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>

    </>

  )
}

export default Page
