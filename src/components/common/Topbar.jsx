import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Topbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [siderbar, setSidebar] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <div>
      <div className="sticky top-0 z-20 bg-background flex text-sm px-5 md:px-[8%] text-[#8F98A1] gap-10 justify-between items-center w-full h-[75px] md:h-[95px] border-b md:border-b-[3px] border-[#35343A] shadow">
        <img
          onClick={() => setSidebar(!siderbar)}
          src={"/assets/menu.png"}
          alt="icon"
          className="md:hidden w-[20px] cursor-pointer"
        />
        <div className="hidden md:flex items-center gap-[85px]">
          <div
            className={`${
              location.pathname === "/market" && "text-[#fff]"
            } cursor-pointer`}
            onClick={() => navigate("/market")}
          >
            Market
          </div>
          <div
            onMouseLeave={() => setMenu(false)}
            onMouseEnter={() => {
              setMenu(true);
            }}
            className="flex text-sm gap-1 py-3 cursor-pointer"
          >
            Company
            <img className="" src="/assets/downFillTriangle.svg" alt="logo" />
            {menu && (
              <div
                onMouseLeave={() => setMenu(false)}
                onMouseEnter={() => {
                  setMenu(true);
                }}
                className="absolute rounded-xl mt-7 -ml-4 shadow-xl  min-h-28 w-32 bg-border"
              >
                <div
                  onClick={() => navigate("/aboutus")}
                  className="text-white py-1 mt-5 text-center bg-[#342c34]"
                >
                  About us
                </div>
              </div>
            )}
          </div>
          <div
            onClick={() => navigate("/community")}
            className={`${
              location.pathname === "/community" && "text-[#fff]"
            } cursor-pointer`}
          >
            Community
          </div>
          <div
            className={`${
              location.pathname === "/blog" && "text-[#fff]"
            } cursor-pointer`}
            onClick={() => navigate("/blog")}
          >
            Blogs
          </div>
        </div>
        <img
          onClick={() => {
            setSidebar(false);
            navigate("/");
          }}
          className="w-[100px] md:w-[155px] h-[30px] md:mr-[10%] cursor-pointer"
          src="/assets/logo.svg"
          alt="logo"
        />
        <div
          src={"/assets/person.png"}
          alt="icon"
          className="md:hidden w-[24px]"
        ></div>
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-1.5 text-sm mr-16">
            <img className="mt-0.5" src="/assets/world.svg" alt="logo" />
            English
          </div>
          <button
            className={`${
              location.pathname === "/signup" &&
              "text-[16px] text-[#fff] bg-border rounded-lg shadow-md px-6 py-2"
            } cursor-pointer`}
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>
          <button
            className={`${
              location.pathname === "/login" &&
              "text-[16px] text-[#fff] bg-border rounded-lg shadow-md px-6 py-2"
            } cursor-pointer`}
            onClick={() => navigate("/login")}
          >
            login
          </button>
        </div>
      </div>
      <div className="d-flex min-h-[500px]">
        {
          //side bar
        }
        {siderbar && (
          <div className="flex flex-col gap-1 md:hidden fixed z-40 left-0 top-[75px] min-h-fit h-[100vh] w-[180px] bg-background border-r border-border shadow-2xl py-5 text-sm">
            <div
              className={`${
                location.pathname === "/market" && "text-[#fff] bg-border"
              } cursor-pointer px-8 py-2`}
              onClick={() => {
                setSidebar(false);
                navigate("/market");
              }}
            >
              Market
            </div>
            <div
              onClick={() => {
                navigate("/aboutus");
                setSidebar(false);
              }}
              className={`${
                location.pathname === "/aboutus" && "text-[#fff] bg-border"
              } cursor-pointer px-8 py-2`}
            >
              About us
              {/* <img className="" src="/assets/downFillTriangle.svg" alt="logo" /> */}
            </div>
            <div
              onClick={() => {
                navigate("/community");
                setSidebar(false);
              }}
              className={`${
                location.pathname === "/community" && "text-[#fff] bg-border"
              } cursor-pointer px-8 py-2`}
            >
              Community
            </div>
            <div
              className={`${
                location.pathname === "/blog" && "text-[#fff] bg-border"
              } cursor-pointer px-8 py-2`}
              onClick={() => {
                setSidebar(false);
                navigate("/blog");
              }}
            >
              Blogs
            </div>
            <hr className="border-border mt-8 mb-2" />
            <div className="px-8 py-2">Signup</div>
            <div className=" px-8 py-2">Login</div>
            <hr className="border-border mt-2" />

            <div className="flex gap-2 px-8 py-2 mt-2">
              English
              <img className="mt-0.5" src="/assets/world.svg" alt="logo" />
            </div>
          </div>
        )}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Topbar;
