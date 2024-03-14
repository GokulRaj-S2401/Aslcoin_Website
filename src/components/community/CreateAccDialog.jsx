import React from "react";
import Modal from "../common/Modal";

const CreateAccDialog = ({ isOpen, setIsOpen }) => {
  return (
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
        <div className="text-lg mt-4">Let’s create your Account</div>
        <div className="mt-3 md:mt-8 flex flex-col gap-1">
          <strong className="text-[#9D6CFF] font-bold text-[13px] mt-0">
            Email
          </strong>
          <input className="w-full h-[50px] rounded-[10px] bg-[#192032] text-xs md:text-[15px] font-light text-[#9D6CFF] placeholder:text-[#9D6CFF] px-4 focus:outline-none focus:ring-0 border-2 border-[#9D6CFF]" />
          <div className="text-[#9D6CFF]  text-[13px]">
            Never shown to the public
          </div>
          <strong className="text-[#9D6CFF] font-bold text-[13px] mt-3">
            User Name
          </strong>
          <input className="w-full h-[50px] rounded-[10px] bg-[#192032] text-xs md:text-[15px] font-light text-[#9D6CFF] placeholder:text-[#9D6CFF] px-4 focus:outline-none focus:ring-0 border-2 border-[#9D6CFF]" />
          <div className="text-[#9D6CFF]  text-[13px]">
            Unique, no spaces, short.
          </div>
          <strong className="text-[#9D6CFF] font-bold text-[13px] mt-3">
            Name
          </strong>
          <input className="w-full h-[50px] rounded-[10px] bg-[#192032] text-xs md:text-[15px] font-light text-[#9D6CFF] placeholder:text-[#9D6CFF] px-4 focus:outline-none focus:ring-0 border-2 border-[#9D6CFF]" />
          <div className="text-[#9D6CFF]  text-[13px]">
            Your full name (optional).
          </div>
          <strong className="text-[#9D6CFF] font-bold text-[13px] mt-3">
            Password
          </strong>
          <input
            type="password"
            className="w-full h-[50px] rounded-[10px] bg-[#192032] text-xs md:text-[15px] font-light text-[#9D6CFF] placeholder:text-[#9D6CFF] px-4 focus:outline-none focus:ring-0 border-2 border-[#9D6CFF]"
          />
          <div className="text-[#9D6CFF]  text-[13px]">
            At least 8 characters.
          </div>

          <strong className="text-[#9D6CFF] font-bold text-[13px] mt-3">
            Terms of service
          </strong>
          <div className="flex gap-2 text-sm text-[#9D6CFF] items-start">
            <input className="mt-1" type="checkbox" />
            <span>By clicking, you confirm you have read the Support Forums Terms of
            Service <strong className="text-sm"> found here.</strong></span>
          </div>
          <strong className="text-[#9D6CFF] font-bold text-[13px] mt-3">
          Code of Conduct
          </strong>
          <div className="flex gap-2 text-sm text-[#9D6CFF] items-start">
            <input className="mt-1" type="checkbox" />
            <span>By clicking, you confirm you have read the Code of Conduct
            <strong className="text-sm"> found here.</strong></span>
          </div>
          <strong className="text-[#9D6CFF] font-bold text-[13px] mt-3">
          Sensitive information
          </strong>
          <div className="flex gap-2 text-sm text-[#9D6CFF] items-start">
            <input className="mt-1" type="checkbox" />
            <span>I understand that Netlify Support Forums are public, and I shouldn't post sensitive information, such as account passwords and credit card information.</span>
          </div>
          <strong className="text-[#9D6CFF] font-bold text-[13px] mt-3">
          We hate spam
          </strong>
          <div className="flex gap-2 text-sm text-[#9D6CFF] items-start">
            <input className="mt-1" type="checkbox" />
            <span>I understand that if I create an account to post spam, my account will be immediately deleted and my IP address and email will be blocked.</span>
          </div>
          <span className="text-sm text-[#9D6CFF] mt-6">By registering, You agree to the <strong className="text-sm">  Privacy policy.</strong> And <strong className="text-sm"> Terms of Service.</strong>
            </span>
        </div>
        <button className="bg-[#9D6CFF] px-6 py-2 rounded-[12px]  mt-8 shadow font-medium text-[14px]">
          Create New Account
        </button>
        <button
          onClick={() => setIsOpen(false)}
          className="bg-[#9D6CFF] px-6 py-2 rounded-[12px]  mt-8 shadow font-medium text-[14px] ml-5" 
        >
          Login
        </button>
      </div>
    </Modal>
  );
};

export default CreateAccDialog;
