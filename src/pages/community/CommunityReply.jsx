import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../../components/common/Table";
import CreateAccDialog from "../../components/community/CreateAccDialog";

const CommunityReply = () => {
  const [topic, setTopic] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [signup, setSignup] = useState(false);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const tableHeading = ["Topics", "", "Replies", "Views", "Acivity"];
  const tableData = Array.from({ length: 5 }, () => ({
    topics: "Lorem ipsum dolor sit amet consectetur. Risus quam",
    image: [
      "/assets/dppp.jpeg",
      "/assets/dppp.jpeg",
      "/assets/dppp.jpeg",
      "/assets/dppp.jpeg",
    ],
    views: "240",
    replies: "15",
    activity: "2h",
  }));
  return (
    <div className="mx-4 md:mx-16 px-0 md:px-[6.5%] relative z-10">
        <CreateAccDialog isOpen={signup} setIsOpen={setSignup}/>
      <div className="w-[98%] md:w-[70%] mt-8 md:mt-[90px]">
        <div className="border-b border-[#9D6CFF]  py-4 mr-5 md:mr-32">
          {tableData[0].topics}
          <div className="flex gap-3 mt-3 items-center">
            <div className="h-[10px] w-[10px] bg-green-500"></div>
            <span className="text-[13px] font-medium">Support</span>
            <div className="text-[#9D6CFF] text-[9px] px-[10px]  bg-[#9D6CFF50] rounded-md">
              Building
            </div>
            <div className="text-[#9D6CFF] text-[9px] px-[10px]  bg-[#9D6CFF50] rounded-md">
              Remix
            </div>
          </div>
        </div>

        {Array.from({ length: "3" }).map((_, i) => (
          <div key={i} className="flex gap-2 md:gap-4 py-4">
            <img
              src="/assets/community/ani.png"
              alt="Dp"
              className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
            />
            <div className="flex-1">
              <span className="flex justify-between">
                <strong className="text-lg font-medium ">
                  Aniketjha{" "}
                  {topic !== i && (
                    <span className="ml-1 font-normal text-xs">
                      Software Engineer
                    </span>
                  )}
                </strong>
                <strong className="text-lg font-medium ">15h</strong>
              </span>
              <p className="text-[14px] leading-[22px] py-4 font-medium mr-6 md:mr-8">
                Lorem ipsum dolor sit amet consectetur. Tristique et sed at
                massa vitae dolor augue. Diam feugiat aliquam dignissim eu
                nulla. Quisque quam congue hac at quisque urna pulvinar. Etiam
                sodales ultrices integer id dolor enim felis pellentesque. Netus
                sit metus id egestas molestie sed vitae aliquam. Eget posuere
                purus sed enim velit nibh tincidunt accumsan.
              </p>

              {topic === i && (
                <div className=" p-4 mr-2 md:mr-8 bg-[#504a4a99] border-l-4 border-[#9D6CFF] my-5">
                  <div className="flex gap-3 items-center flex-wrap">
                    <img
                      src="/assets/community/greenDone.svg"
                      alt="done"
                      className="w-[13px] h-[11px]"
                    />
                    <span className="text-[11px] font-medium">
                      Solved by{" "}
                      <spna className="text-[#9D6CFF]">Aniket jha</spna> in{" "}
                      <spna className="text-[#9D6CFF]">post #4</spna>
                    </span>
                  </div>
                  <p className="text-[13px] font-medium py-2.5">
                    Lorem ipsum dolor sit amet consectetur. Tristique et sed at
                    massa vitae dolor augue
                  </p>
                </div>
              )}

              <div className="flex justify-end gap-4 py-5">
                {i === 2 ? (
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/community/greenDoneRight.svg"
                      alt="done"
                      className="w-[13px] h-[13px]"
                    />
                    <span className="text-[#48BB78] text-[13px] font-medium">
                      Solution
                    </span>
                  </div>
                ) : (
                  <img
                    src="/assets/community/reply.svg"
                    alt="done"
                    className="w-5 h-5"
                  />
                )}
                <img
                  src="/assets/community/heart.svg"
                  alt="done"
                  className="w-5 h-5"
                />
                <img
                  src="/assets/community/connect.svg"
                  alt="done"
                  className="w-5 h-5"
                />
              </div>

              {topic === i && (
                <div className="flex  gap-3 justify-between   mr-2 md:mr-8 bg-[#9D6CFF99] border border-[#9D6CFF99] my-5">
                  <div className="flex gap-7 items-center py-2 px-4  flex-wrap">
                    <div>
                      <div className="text-[9px] font-medium">Created</div>
                      <div className="flex gap-1 items-center mt-1">
                        <img
                          src="/assets/community/ani.png"
                          alt="Dp"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="text-[9px] font-medium">4h</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-medium">Last Reply</div>
                      <div className="flex gap-1 items-center mt-1">
                        <img
                          src="/assets/community/lief.png"
                          alt="Dp"
                          className="w-[28px] h-[28px]"
                        />
                        <div className="text-[9px] font-medium">4h</div>
                      </div>
                    </div>
                    <div className="flex gap-6 md:gap-7 items-center   flex-wrap">
                      <div className="text-center">
                        <div className="text-[18px] font-medium">4</div>

                        <div className="text-[9px] font-medium">Replies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[18px] font-medium">100</div>

                        <div className="text-[9px] font-medium">Views</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[18px] font-medium">3</div>

                        <div className="text-[9px] font-medium">Users</div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-[47px] h-[45px] md:min-w-[62px] md:h-[60px] bg-[#403E43] flex items-center justify-center   ">
                    <img
                      src="/assets/downArrowWhite.svg"
                      alt="Dp"
                      className="w-[23px] h-[14px]"
                    />
                  </div>
                </div>
              )}
              <hr className="mt-5 w-full border-[#9D6CFF]" />
            </div>

            {
              <div
                className={` w-[2px] ml-5 md:ml-32 ${
                  topic === i && "bg-[#9D6CFF99]"
                }`}
              ></div>
            }
          </div>
        ))}
        {isLogin && (
          <>
            <div className="flex  w-full mt-10  md:pr-32 h-[47px] rounded-lg ">
              <input
                type="text"
                className="flex-1 w-full rounded-l-lg rounded-r-none px-6 text-sm text-[#000] focus:ring-0 focus:border-0 focus:outline-none"
              />
              <button className="text-[#fff] text-sm font-semibold bg-[#9D6CFF] px-5 md:px-8 rounded-r-md border-1 border-[#9D6CFF]">
                Comment
              </button>
            </div>
            <h6 className="text-[15px] font-semibold mt-7">
              Was this information helpful to solve your problem?
            </h6>
            <p className="text-[11px] mt-3">
              Please help us improve by providing feedback!
            </p>
            <div className="flex items-center flex-wrap gap-2 md:gap-5 mt-4">
              <button className="bg-[#9D6CFF] rounded-[7px] font-bold  text-[10px] px-5  py-1 ">
                Yes
              </button>
              <button className="bg-[#9D6CFF] rounded-[7px] font-bold text-[10px] px-5 py-1 ">
                No
              </button>
            </div>
            <div className="flex flex-col gap-2 mt-5">
            <strong className="text-[11px] text-[#9D6CFF] font-semibold">What can we improve? (Optional)</strong>
            <textarea className="w-[230px] h-[43px] resize-none rounded-[7px]  bg-white text-[14px] text-[#989898] p-3 text-xs focus:outline-none focus:ring-0 "/>

            <button className="bg-[#9D6CFF] mt-2 max-w-fit rounded-[7px] font-bold  text-xs px-4  py-1.5 ">
                SUBMIT FEEDBACK
              </button>
            </div>
            <div className="flex items-center flex-wrap gap-2 md:gap-5 mt-5">
              <button className="bg-[#9D6CFF] flex items-center gap-1.5 rounded-[7px] font-bold  text-[10px] px-4  py-1 ">
              <img
                  src="/assets/community/connect.svg"
                  alt="icon"
                  className="w-[11px] h-[11px]"
                />
                Share
              </button>
              <button className="bg-[#9D6CFF] flex items-center gap-1.5 rounded-[7px] font-bold text-[10px] px-4 py-1 ">
              <img
                  src="/assets/community/save.svg"
                  alt="icon"
                  className="w-[11px] h-[11px]"
                />
                Bookmark
              </button>
              <button className="bg-[#9D6CFF] flex items-center gap-1.5 rounded-[7px] font-bold text-[10px] px-4 py-1 ">
              <img
                  src="/assets/community/reply.svg"
                  alt="icon"
                  className="w-[11px] h-[11px] -mt-0.5"
                />
                Reply
              </button>
            </div>
            <div className="flex items-center flex-wrap gap-2.5 md:gap-5 mt-5">
              <button className="bg-[#9D6CFF] flex items-center gap-1 rounded-[7px] font-bold  text-[10px] px-4  py-1 ">
              <img
                      src="/assets/community/bell.svg"
                      alt="icon"
                      className="w-[10px] h-[10px]"
                    /> Normal
                <img
                      src="/assets/downArrowWhite.svg"
                      alt="icon"
                      className="w-[9px] h-[6px] -mt-0.5 ml-1.5"
                    />
              </button>
              <span className="text-[11px] text-[#9D6CFF]">You will be notified if someone mentions your <strong className="text-[11px] ">@Name</strong> or replies to you.</span>
            </div>
          </>
        )}
        {!isLogin && (
          <>
            <div className="flex justify-end">
              <button
                onClick={() => setIsLogin(true)}
                className="bg-[#9D6CFF] rounded-[11px] font-semibold text-xs md:text-sm px-6 py-2 md:mr-20 mt-10"
              >
                Reply
              </button>
            </div>
            <div className="bg-[#9D6CFF80] p-4 md:p-6 md:mr-20 rounded-[11px] mt-10">
              <p>
                Hello! Looks like you’re enjoying learning about ASLCOIN, but
                you haven’t signed up for a Community account yet.
              </p>
              <div className="flex flex-wrap gap-2 md:gap-5 justify-end items-center mt-4">
                <button onClick={()=>setSignup(true)} className="bg-[#9D6CFF] rounded-[11px] font-semibold text-xs md:text-sm px-4 md:px-6 py-2 ">
                  Signup
                </button>
                <button className="bg-[#9D6CFF] rounded-[11px] font-semibold text-xs md:text-sm px-4 md:px-6 py-2 ">
                  Maybe Later
                </button>
                <button className=" rounded-[11px] font-medium text-xs md:text-sm  py-2 ">
                  No Thanks
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <h6 className="text-lg font-medium my-5 mt-12">New & Unread topics</h6>
      <div className="overflow-x-scroll mb-20 -mt-12">
        <Table
          tableHeading={tableHeading}
          thclassName={
            "text-start text-base font-medium text-[#9D6CFF] border-b border-[#9D6CFF] py-3"
          }
          width={"w-[100%]"}
          px="px-0"
          py="py-0"
          bg="bg-transparent"
          shadow="shadow-none"
        >
          {tableData.map((item, i) => (
            <tr
              className="text-start"
              key={i}
              onClick={() => navigate("/community/reply")}
            >
              <td className="py-3.5 px-1 border-b border-[#9D6CFF] text-base font-medium">
                {item?.topics}
                <div className="flex gap-3 mt-3 items-center">
                  <div className="h-[10px] w-[10px] bg-green-500"></div>
                  <span className="text-[13px] font-medium">Support</span>
                  <div className="text-[#9D6CFF] text-[9px] px-[10px]  bg-[#9D6CFF50] rounded-md">
                    Building
                  </div>
                  <div className="text-[#9D6CFF] text-[9px] px-[10px]  bg-[#9D6CFF50] rounded-md">
                    Remix
                  </div>
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
                {item?.replies}
              </td>
              <td className="py-3 px-1 border-b border-[#9D6CFF] text-lg font-medium">
                {item?.views}
              </td>
              <td className="py-3 px-1 border-b border-[#9D6CFF] text-lg font-medium">
                {item?.activity}
              </td>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default CommunityReply;
