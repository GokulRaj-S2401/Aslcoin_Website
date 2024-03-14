import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBlogById } from "../../redux/blogSlice";
import Feature from "./Feature";
import { server } from "../../Server";

const SinglePage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`${server}/view_blog/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data.data))
      .catch((error) => console.error("Error fetching blog:", error));
  }, [id]);
  console.log("blog", blog);
  if (!blog) {
    return <div>Loading...</div>;
  }
  return (
    <div className="text-white overflow-hidden">
      <img
        className="absolute z-[0] -mt-[100px] ml-4 h-[745px]"
        src="/assets/blog/squreright.png"
        alt="home"
      />

      <>
        <div className="mx-4 md:mx-16 px-[6.5%] ">
          <div className=" relative flex gap-4 justify-between flex-wrap z-10 mx-auto pt-24">
            <div>
              <div className="text-[24px] pb-4 font-normal">{blog.title}</div>
              <img
                src={blog.blogimg}
                alt={blog.title}
                width={600}
                height={437}
                className="rounded-lg"
              />
            </div>

            <div>
              <div className="w-[340px] flex flex-col gap-5 pt-2 mr-36">
                <div className="text-[12px] font-[500]">IN THIS ARTICLE</div>
                <div className="text-[17px] text-[#C8C8C8] font-[400]">
                  What is a short-term investment?
                </div>
                <div className="text-[17px] text-[#C8C8C8] font-[400]">
                  Why should you choose short -term investments?
                </div>
                <div className="text-[17px] text-[#C8C8C8] font-[400]">
                  How do short-term investment plans work?
                </div>
                <div className="text-[17px] text-[#C8C8C8] font-[400]">
                  Requirements for short-term investments
                </div>
                <div className="text-[17px] text-[#C8C8C8] font-[400]">
                  Subscribe
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[600px] mt-10 mb-40">
            <div className="text-[13px] font-normal mt-8">
              {blog.description}
            </div>
          </div>
        </div>

        <div className="h-[290px] bg-[#fff] flex flex-wrap items-center justify-center md:justify-between gap-1 px-8 md:px-[10%] ">
          <div className="text-[#000] font-semibold text-[26px]">
            Subscribe to our newsletter
          </div>
          <div className="flex  w-[320px] md:w-[530px] h-[57px] rounded-lg border border-[#9D6CFF] ">
            <input
              type="text"
              className="flex-1 w-full rounded-l-lg px-6 text-sm text-[#000] focus:ring-0 focus:border-0 focus:outline-none"
              placeholder="Enter your email"
            />
            <button className="text-[#fff] text-sm font-semibold bg-[#9D6CFF] px-8 rounded-r-md border-1 border-[#9D6CFF]">
              Subscribe
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default SinglePage;
