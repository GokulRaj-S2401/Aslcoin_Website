import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../redux/blogSlice";
import Feature from "../components/blogs/Feature";
import { Link } from "react-router-dom";
import { server } from "../Server";

const Blogs = () => {
  const [tab, setTab] = useState(0);
  const [blogs, setBlogs] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState(3);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${server}/get_all_blogs`);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        console.log("data", data);
        setBlogs(data.data);
        // setLoading(false);
      } catch (error) {
        // setError(error.message);
        // setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return `${day} ${getMonthName(parseInt(month) - 1)} ${year}`;
  };

  const getMonthName = (monthIndex) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[monthIndex];
  };

  const loadMore = () => {
    setDisplayedBlogs(displayedBlogs + 3); // Increase by 3 for demonstration purposes
  };

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
              <div className="text-[24px] pb-4 font-normal">Featured</div>
              <img
                src="/assets/blog/feature.png"
                alt="home"
                width={500}
                height={437}
                className="rounded-lg"
              />

              <div className="text-[16px] py-2 font-semibold">
                A beginner’s guide to Trading View charts
              </div>
            </div>

            <div>
              <div className="text-[24px] pb-4 font-normal">Popular</div>

              <div>
                {blogs
                  ?.sort((a, b) => b.views - a.views)
                  .slice(0, 3)
                  .map((blog) => (
                    <div
                      key={blog._id}
                      className="flex items-center gap-2 mt-4"
                    >
                      <div className="w-[70%] md:w-[350px] text-[16px] py-2 font-semibold">
                        <Link
                          to={`/blog/${blog._id}`}
                          style={{ color: "#fff" }}
                        >
                          {blog.title}
                        </Link>
                      </div>
                      <img
                        src={blog.blogimg}
                        alt={blog.title}
                        className="w-[30%] md:w-[120px] md:h-[110px] rounded-lg"
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="relative z-10 my-9 mt-14">
            <div className="flex flex-wrap justify-center md:justify-between gap-8 mb-20">
              {blogs?.slice(0, displayedBlogs).map((blog) => (
                <div key={blog._id} className="w-[310px]">
                  <img
                    src={blog.blogimg}
                    alt={blog.title}
                    className="w-[310px] h-[240px] rounded-lg"
                  />
                  <div className="w-[310px] h-[70px] overflow-hidden text-ellipsis mt-3 text-[15px] font-semibold">
                    <Link to={`/blog/${blog._id}`} style={{ color: "#fff" }}>
                      {blog.title}
                    </Link>
                  </div>
                  <div className="flex gap-2 items-center justify-end font-light text-[10px]">
                    <img src="/assets/calender.svg" width={15} alt="calender" />
                    {blog.publishon}
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="absolute -top-64 left-0 w-full h-96 gradientBox"></div>
            <div className="absolute top-16 right-0 w-96 h-96 gradientBox"></div> */}

            {blogs?.length > displayedBlogs && (
              <div
                className="flex items-center justify-center mx-auto mb-24 bg-white bg-gradient-to-b from-[#9D6CFF] via-[#fd49df]  to-[#FD497D] w-[190px] h-[50px] p-4 rounded-lg cursor-pointer"
                onClick={loadMore}
              >
                Load More
              </div>
            )}
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

export default Blogs;
