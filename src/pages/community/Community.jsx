import React, { useEffect, useState } from "react";
import Table from "../../components/common/Table";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Dialog from "../../components/community/TopicDialoge";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopics, fetchOptions } from "../../redux/topicsSlice"; // Import the fetchTopics action

const Community = () => {
  const [tab, setTab] = useState(1);
  const [showDialog, setShowDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Latest");

  const dispatch = useDispatch(); // Get dispatch function
  const topics = useSelector((state) => state.topics.topics); // Select topics from Redux store
  const categories = useSelector((state) => state.dialog.categories); // Select topics from Redux store
  const tags = useSelector((state) => state.dialog.tags);
  // Fetch topics and options when component mounts
  console.log("topics", topics);
  useEffect(() => {
    dispatch(fetchTopics());
    dispatch(fetchOptions());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const location = useLocation();
  const navigate = useNavigate();
  const tableHeading = ["Topics", "", "Replies", "Views", "Acivity"];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const filteredTopics = topics?.data?.filter((item) => {
    const matchesCategory =
      !selectedCategory || item.topic.categoryId?._id === selectedCategory;
    const matchesTag =
      !selectedTag ||
      (item.topic.tagsId &&
        item.topic.tagsId.some((tag) => tag._id === selectedTag));
    const matchesSearchTerm =
      !searchTerm ||
      item.topic.topicname.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesTag && matchesSearchTerm;
  });

  const sortTopics = (filter) => {
    switch (filter) {
      case "Latest":
        return (a, b) =>
          new Date(b.topic.activity) - new Date(a.topic.activity);
      case "Top":
        return (a, b) => b.replyCount - a.replyCount;
      default:
        return () => 0;
    }
  };

  const sortedTopics = [...filteredTopics].sort(sortTopics(selectedFilter));

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleTagChange = (e) => {
    setSelectedTag(e.target.value);
  };
  console.log("filteredTopics", filteredTopics);
  return (
    <div className="text-white overflow-hidden buttonhide">
      <img
        className="absolute z-[0] -mt-[90px] ml- h-[650px]"
        src="/assets/blog/squreright.png"
        alt="home"
      />
      <>
        <Dialog isOpen={showDialog} setIsOpen={setShowDialog} />
        {location.pathname === "/community" && (
          <div className="mx-4 md:mx-16 px-2 md:px-[6.5%] ">
            <div className=" relative bg-[#9D6CFF] min-h-[244px] flex gap-4 justify-center md:justify-between flex-wrap z-10 mx-auto mt-8 md:mt-24 rounded-3xl shadow-cardpurple px-6 md:px-16">
              <div className="pt-8">
                <h6 className="text-[34px] font-bold">
                  Welcome to our community
                </h6>
                <p className="text-[15px] font-medium mt-4">
                  We're happy to have you here. If you need help, please search
                  before you post.
                </p>
                <div className="flex items-center bg-white h-[54px] rounded-2xl mt-6 mr-5">
                  <img
                    src="/assets/searchBlack.svg"
                    alt="search"
                    className="w-5 h-5 ml-5"
                  />
                  <input
                    type="text"
                    className="flex-1 w-full rounded-2xl px-4 text-sm text-[#000] placeholder:text-[#000] focus:ring-0 focus:border-0 focus:outline-none"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <img
                src="/assets/community/person.png"
                alt="search"
                className="relative -mb-[15px] mt-4 w-[245px] h-[248px] "
              />
            </div>
            <div className="flex flex-wrap gap-2 md:gap-10 pt-10 relative z-10">
              <div>
                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  className="text-white text-xs md:text-base font-medium border border-[#8F98A1] rounded-[18px] px-3 md:px-6 py-2 cursor-pointer bg-[#192032]"
                >
                  <option value="">All Categories</option>
                  {categories?.data?.map((category, index) => (
                    <option key={index} value={category?._id}>
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <select
                  value={selectedTag}
                  onChange={handleTagChange}
                  className="text-white text-xs md:text-base font-medium border border-[#8F98A1] rounded-[18px] px-3 md:px-6 py-2 cursor-pointer bg-[#192032]"
                >
                  <option value="">All Tags</option>
                  {tags?.data?.map((tag, index) => (
                    <option key={index} value={tag?._id}>
                      {tag.tags}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wap gap-2 justify-between items-center mt-7 md:mt-10">
              <div className="flex flex-wrap gap-2 md:gap-10  relative z-10">
                {["Latest", "Top"].map((item, i) => (
                  <div
                    onClick={() => setSelectedFilter(item)}
                    key={i}
                    className={`${
                      selectedFilter === item
                        ? "text-black bg-white px-3 md:px-5"
                        : "text-[#fff] bg-transparent px-2"
                    } text-xs md:text-base font-medium rounded-[18px]  py-2 cursor-pointer`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div
                onClick={() => setShowDialog(true)}
                className="text-[#fff] bg-[#9D6CFF] px-2 md:px-4 text-xs md:text-sm h-fit font-medium rounded-[12px]  py-2 cursor-pointer"
              >
                New Topic
              </div>
            </div>

            <div className="overflow-x-scroll">
              <Table
                tableHeading={tableHeading}
                thclassName={
                  "text-start text-base font-medium text-[#9D6CFF] border-b border-[#9D6CFF] py-3"
                }
                width={"w-[100%]"}
                px="px-0"
                py="py-2"
                bg="bg-transparent"
                shadow="shadow-none"
              >
                {sortedTopics?.map((item, i) => (
                  <tr
                    className="text-start"
                    key={i}
                    onClick={() => navigate("/community/reply")}
                  >
                    {console.log("item", item)}
                    <td
                      className="py-3.5 px-1 border-b border-[#9D6CFF] text-base font-medium"
                      style={{ width: "400px" }}
                    >
                      {item?.topic?.topicname}
                      <div className="flex gap-3 mt-3 items-center">
                        <div className="h-[10px] w-[10px] bg-green-500"></div>
                        <span className="text-[13px] font-medium">
                          {item?.topic?.categoryId?.category}
                        </span>
                        {item?.topic?.tagsId?.map((tag, index) => (
                          <div
                            key={index}
                            className="text-[#9D6CFF] text-[9px] px-[10px] bg-[#9D6CFF50] rounded-md"
                          >
                            {tag.tags}
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-5 border-b border-[#9D6CFF] text-base font-medium">
                      <div className="flex">
                        {item?.image?.map((img, ind) => (
                          <img
                            key={ind}
                            src={img}
                            alt="dp"
                            className="min-w-[32px] min-h-[32px] w-[32px] h-[32px] rounded-full -ml-4"
                          />
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-1 border-b border-[#9D6CFF] text-lg font-medium">
                      {item?.replyCount}
                    </td>
                    <td className="py-3 px-1 border-b border-[#9D6CFF] text-lg font-medium">
                      {item?.topic?.views}
                    </td>
                    <td className="py-3 px-1 border-b border-[#9D6CFF] text-lg font-medium">
                      {formatDate(item?.topic?.activity)}
                    </td>
                  </tr>
                ))}
              </Table>
            </div>

            <div className="gradientBox  -mt-[700px] -ml-64 "></div>
            <div className="gradientBox  mt-16 ml-[1100px] "></div>
          </div>
        )}

        <Outlet />

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

export default Community;
