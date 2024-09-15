"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';

// This is a React Client Component
export default function BlogPage({ params }) {
  const { id } = params;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {

      const response = await axios.get(`http://localhost:3000/api/blog`,{
        params: {
          id:params.id
        }
      });
      setData(response.data);
    } catch (err) {
      setError('Failed to fetch data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]); // Dependency array includes id to refetch if it changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!data) return <div>No data available</div>;

  return (
    <div className='h-screen w-full flex  items-center flex-col mt-10'>
      <div className='w-[1000px]'>
      <img src={data.image} alt='image' className='h-[300px] w-[1000px]' />
      <h1 className='text-xl text-blue-400'>{data.category}</h1>
      <h1 className='text-2xl text-blue-500'>{data.title}</h1>
      <p>{data.description}</p>
      </div>
    </div>
  );
}
