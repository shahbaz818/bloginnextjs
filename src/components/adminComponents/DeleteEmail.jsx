



"use client"
import React from 'react'
import { toast } from 'react-toastify'

const DeleteEmail = ({id}) => {

  const deleteInfo = async (e) => {
    e.preventDefault();

    // Confirmation before deletion
    if (!confirm("Do you want to delete this email?")) return;

    try {
      // Perform the delete operation
      let response = await fetch(`http://localhost:3000/api/email/${id}`,{
        method: "DELETE",
      });
      response = await response.json();
      console.log(response);
      if (response.success) {
        toast.success("Email Deleted Successfully")
      } else {
        toast.error("Cant Deleted")
      }
      
    } catch (err) {
      toast.error("An error occurred while deleting the email");
      console.error(err);
    }
  };

  return (
    <button 
      className="py-3 px-4 border-b bg-gray-300 h-10 w-[100px] rounded-md text-blue-500 text-xl cursor-pointer"
      onClick={deleteInfo}
    >
      Delete
    </button>
  );
};

export default DeleteEmail;
