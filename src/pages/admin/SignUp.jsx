import React, { useState } from "react";
import axios from "axios";
import { server } from "../../Server";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !name || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    try {
      const response = await axios.post(`${server}/community_user_signup`, {
        email,
        name,
        password,
        confirmpassword: confirmPassword,
      });
      console.log(response.data);
      toast.success("User created successfully");
      setError("");
      setEmail("");
      setName("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error.response.data);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="flex justify-center md:py-10 py-8 flex-wrap gap-8 md:gap-28 items-center px-14 md:px-36 w-full  bg-[#0B0E13]">
      <div className="flex flex-col justify-between bg-[#12181F] md:h-[734px] rounded-[37px] py-8 px-12">
        <div>
          <div className="text-[26px] md:text-[30px] font-semibold text-[#fff] w-full ">
            SignUp
          </div>
          <div className="mt-0 text-[16px] font-normal text-[#fff] w-[273px] ">
            Hello AslCrypto Admin!!!
          </div>
        </div>
        <ToastContainer />
        <form onSubmit={handleSubmit} className="flex flex-col gap-7">
          <div className="flex justify-center items-center h-[64px] bg-[#161D26] rounded-[35px] px-[20px]">
            <img
              src="assets/key.svg"
              className="icon left-icon text-white"
              alt="@"
            />

            <input
              type="email"
              placeholder="Email"
              className="bg-[#161D26] bg-transparent px-3 outline-none focus:border-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center h-[64px] bg-[#161D26] rounded-[35px] px-[20px]">
            <img
              src="assets/key.svg"
              className="icon left-icon text-white"
              alt="@"
            />

            <input
              type="text"
              placeholder="Name"
              className="bg-[#161D26] bg-transparent px-3 outline-none focus:border-transparent"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center h-[64px] bg-[#161D26] rounded-[35px] px-[20px]">
            <img
              src="assets/Password-Icon.svg"
              className="icon left-icon text-white"
              alt="@"
            />

            <input
              type="password"
              placeholder="Password"
              className="bg-[#161D26] bg-transparent px-3 outline-none focus:border-transparent"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center items-center h-[64px] bg-[#161D26] rounded-[35px] px-[20px]">
            <img
              src="assets/Password-Icon.svg"
              className="icon left-icon text-white"
              alt="@"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="bg-[#161D26] bg-transparent px-3 outline-none focus:border-transparent"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
          <button
            type="submit"
            className="inline-flex items-center justify-between px-4 py-2 h-[64px] mt-6 text-[14px] leading-6 font-light rounded-[35px] text-white bg-gradient-to-b from-purple-600 to-blue-400 hover:from-purple-700 hover:to-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:from-purple-700 active:to-purple-500 transition duration-150 ease-in-out"
          >
            <div></div>
            <div className="">Click Me</div>

            <div className="flex justify-center items-center w-[35px] h-[35px] rounded-[12px] bg-[#ffffff27]">
              <img
                src="assets/arrowRightWhite.svg"
                className="icon right-icon"
                alt="Check"
              />
            </div>
          </button>
        </form>

        <div className="flex flex-col">
          <div className="flex justify-center  items-center">
            <div className="w-7 h-[1px] bg-[#303A46]"></div>
            <div className="text-white text-[14px] px-4">Or Continue with</div>
            <div className="w-7 h-[1px] bg-[#303A46]"></div>
          </div>
          <div className="flex justify-center flex-row gap-5 items-center mt-3">
            <div className=" flex justify-center items-center w-[50px] h-[50px] rounded-[20px] bg-[#161D26]">
              <img src="assets/fb.svg" className="" alt="Check" />
            </div>
            <div className="flex justify-center items-center text-white w-[50px] h-[50px] rounded-[20px] bg-[#161D26]">
              <img src="assets/fb.svg" className="" alt="Check" />
            </div>
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-[20px] bg-[#161D26]">
              <img src="assets/fb.svg" className="" alt="Check" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center px-8  md:px-12 pb-[70px]  rounded-xl ">
        <img
          src="assets/MianLogo.svg"
          className="md: min-w-[200px] min-h-[266px] md:h-[200px] md:w-[200px] mb-[-50px] md:ml-[140px]"
          alt="Logo"
        />
        <img
          src="assets/otp.svg"
          className="md:min-w-[220px] min-w-[150px] min-h-[300px] md:min-h-[480px]"
          alt="iphone"
        />
      </div>
    </div>
  );
};

export default SignUp;
