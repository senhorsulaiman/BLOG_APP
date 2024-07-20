import React from "react";
import axios from "axios";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";

const SinglePostPage = async ({ params }) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${params.id}`;
  const { data } = await axios(`${url}`);

 
  return (
    <>
      <ul className="">
        <li key={data.postId}>
          <div className="card card-side bg-base-100 shadow-xl max-w-5xl ">
            <div className="card-body">
              <h2 className="card-title"><FaUserLarge  className="w-4 h-4 text-gray-950"/>{data.id}</h2>
              <p className="flex items-center ">
                <MdOutlineMarkEmailUnread className="mr-2 w-4 h-4 text-gray-950" /> {data.email}
              </p>
              <p className="leading-loose">{data.body}</p>
            
                <div className="card-actions  ">
                    <Link className="btn btn-primary btn-md mt-4"  href={`/`}>
                   
                    Go Back
                    </Link>
                </div>
             
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default SinglePostPage;
