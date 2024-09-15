


"use client"
import React from 'react'
import { toast } from 'react-toastify'

const DeleteBlog = ({id}) => {

  const deleteInfo = async (e) => {
    e.preventDefault();

    // Confirmation before deletion
    if (!confirm("Do you want to delete this blog?")) return;

    try {
      // Perform the delete operation
      let response = await fetch(`http://localhost:3000/api/blog/${id}`,{
        method: "DELETE",
      });
      response = await response.json();
      console.log(response);

      // Check the response data
      if (response.success) {
        toast.success("Blog Deleted Successfully")
        // Optionally, you can add logic to handle UI updates, e.g., redirect or remove the item from the list
      } else {
        toast.error("Cant Deleted")
      }
      
    } catch (err) {
      // Error handling
      toast.error("An error occurred while deleting the blog");
      console.error(err);
    }
  };

  return (
    <button 
      className="py-2 px-4 text-center border-b bg-gray-300 h-12 w-[100px] rounded-md text-blue-500 text-xl cursor-pointer"
      onClick={deleteInfo}
    >
      Delete
    </button>
  );
};

export default DeleteBlog;
