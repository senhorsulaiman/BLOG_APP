import React from "react";
import axios from "axios";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Link from "next/link";
import { FaUserLarge } from "react-icons/fa6";
import PostComments from "../../components/PostComments";
const SinglePostPage = async ({ params }) => {
  const url = `https://jsonplaceholder.typicode.com/comments/${params.id}`;
  const { data } = await axios(`${url}`);

  console.log(data);

  return (
    <>
      <ul className="p-6">
        <li key={data.postId}>
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title"><FaUserLarge  className="w-5 h-5 text-gray-950"/>{data.id}</h2>
              <p className="flex items-center ">
                <MdOutlineMarkEmailUnread className="mr-2 w-5 h-5 text-gray-950" /> {data.email}
              </p>
              <p>{data.body}</p>
              <div className="card-actions justify-end">
                <div className="card-actions ">
                  <Link className="btn btn-primary" href={`/`}>
                    {" "}
                    Go Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};

export default SinglePostPage;