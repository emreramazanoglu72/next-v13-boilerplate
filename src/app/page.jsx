"use client";
import useFetchAsync from "@/hooks/use-fetch-async";
import Link from "next/link";
import React, { useEffect } from "react";
const page = () => {
  const { response } = useFetchAsync(
    "https://jsonplaceholder.typicode.com/posts"
  );
  useEffect(() => {
    console.log(response);
  }, []);
  return (
    <div className="home-page">
      <div className="blog-title">Blogs</div>

      <div className="blog">
        {response?.map((item, index) => (
          <Link href={`/blog/${item.id}`} key={index} className="blog-card">
            <img src={`https://picsum.photos/500/300?random=${index}`} />
            <div className="content">
              <span className="category">Javascript</span>
              <span className="title">Javascript Fetch Actions</span>
              <span className="createBy">
                by <span>Emre</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
