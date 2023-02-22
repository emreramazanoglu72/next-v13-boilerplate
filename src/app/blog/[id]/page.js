"use client";
import useFetchAsync from "@/hooks/use-fetch-async";
import useRouterHook from "@/hooks/use-router";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const BlogDetail = ({ params }) => {
  const { response, status } = useFetchAsync(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  useEffect(() => {
    console.log(response);
  }, []);
  if (status != "success") {
    return "loading";
  }
  return (
    <div className="blog-detail">
      <img
        src={`https://picsum.photos/500/300?random=${response?.id}`}
        className="blog-image"
      />
      <div className="blog-title">{response.title}</div>
      <div className="blog-description">{response.body}</div>
    </div>
  );
};

export default BlogDetail;
