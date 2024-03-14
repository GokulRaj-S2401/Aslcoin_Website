import React, { useState, useEffect } from "react";
import Modal from "../common/Modal";
import axios from "axios";
import { server } from "../../Server";
import { useDispatch, useSelector } from "react-redux";
import { fetchTopics, fetchOptions } from "../../redux/topicsSlice";

const Dialog = ({ isOpen, setIsOpen }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const dispatch = useDispatch(); // Get dispatch function
  const categories = useSelector((state) => state.dialog.categories); // Select topics from Redux store
  const tags = useSelector((state) => state.dialog.tags); // Select topics from Redux store
  console.log("dialog", tags);
  useEffect(() => {
    dispatch(fetchTopics());
    dispatch(fetchOptions());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    topicname: "",
    categoryId: "",
    tagsId: [],
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setSelectedTags((prevSelectedTags) =>
      prevSelectedTags.includes(value)
        ? prevSelectedTags.filter((tag) => tag !== value)
        : [...prevSelectedTags, value]
    );
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming you store the token in local storage
      console.log("token", token);
      if (!token) {
        console.error("Token not found");
        return;
      }

      const response = await axios.post(`${server}/add_topic`, formData, {
        headers: {
          token: token,
        },
      });
      console.log("Response:", response.data);
      setIsOpen(false);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isClosable={true}
        maxWidth={"max-w-[663px]"}
      >
        <div className="md:px-4 md:pb-4 md:pt-3">
          <h4 className="text-xl md:text-[32px] font-medium text-white ">
            New Topic
          </h4>
          <div className="mt-3 md:mt-8 flex flex-col gap-1">
            <input
              name="topicname"
              value={formData.topicname}
              onChange={handleChange}
              className="w-full h-[50px] rounded-[10px] bg-[#192032] text-xs md:text-[15px] font-light text-[#9D6CFF] placeholder:text-[#9D6CFF] px-4 focus:outline-none focus:ring-0 border-2 border-[#9D6CFF]"
              placeholder="What is this discussion about in one sentence"
            />
            <div className="flex gap-4 md:gap-8 mt-8">
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                className="w-full h-[50px] rounded-[10px] bg-[#192032] text-xs md:text-[15px] font-bold text-[#9D6CFF] placeholder:text-[#9D6CFF] px-4 focus:outline-none focus:ring-0 border-2 border-[#9D6CFF]"
              >
                <option value="">Select Category</option>
                {categories?.data?.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.category}
                  </option>
                ))}
              </select>
              <select
                name="tagsId"
                value={selectedTags}
                onChange={handleChange}
                className="w-full h-[50px] rounded-[10px] bg-[#192032] px-4 focus:outline-none focus:ring-0 border-2 border-[#9D6CFF] text-xs md:text-[15px] font-bold text-[#9D6CFF] placeholder:text-[#9D6CFF]"
                multiple
              >
                z{" "}
                {tags?.data?.map((tag, index) => (
                  <option
                    key={tag._id}
                    value={tag._id}
                    style={{
                      backgroundColor: selectedTags.includes(tag._id)
                        ? "#9D6CFF"
                        : "#192032",
                      color: selectedTags.includes(tag._id)
                        ? "#FFFFFF"
                        : "#9D6CFF",
                    }}
                  >
                    {tag.tags}
                  </option>
                ))}
              </select>
            </div>
            <strong className="text-[#9D6CFF] font-bold text-[13px] mt-8">
              Description
            </strong>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full h-[157px] resize-none rounded-[10px] bg-[#192032] text-[14px] text-[#9D6CFF] px-4 focus:outline-none focus:ring-0 border-2 border-[#9D6CFF]"
              placeholder="Description"
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-[#9D6CFF] px-6 py-2 rounded-[12px] mt-8 shadow font-medium text-[14px]"
          >
            Create Topic
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="text-[#9D6CFF] px-6 py-2 rounded-[12px] mt-8 shadow font-medium text-[14px]"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Dialog;
