 
import axios from 'axios';
import Link from 'next/link';
import React from 'react'
const url = `https://jsonplaceholder.typicode.com/posts`;
import Image from 'next/image'

const Post =async () => {
  const { data } = await axios(`${url}`);

  
  // console.log(data)
  return (
    <div>

        <ul className='grid lg:grid-cols-4 gap-4 md:grid-cols-2'>
          {data.map((post)=>{

                return (
                  <li key={post.id} className='mb-6'>

                    <div className="card card-side bg-base-100 shadow-xl">
                  
                      <div className="card-body">
                        <h2 className="card-title">{post.title}</h2>
                       
                        <p>{post.body}</p>
                        <div className="card-actions justify-end">
                          <Link className="btn btn-primary" href={`/post/${post.id}`}> Read More</Link>
                        </div>
                      </div>
                    </div>
                      
                  </li>

                )
          })}
           
        </ul>

    </div>
  )
}

export default Post