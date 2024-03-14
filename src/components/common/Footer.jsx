import React from "react";
import { useLocation, useNavigate } from "react-router-dom";


const Footer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <div className="relative w-full min-h-72">
      <div className="flex justify-center md:justify-between gap-4 flex-wrap px-16 py-16 ">
        <div className="flex flex-wrap justify-center md:justify-start w-[155px] gap-4">
          <img
            className="w-[140px] h-[26px]  "
            src="/assets/logo.svg"
            alt="logo"
          />
          <div className="text-sm font-semibold">Follow us on</div>
          <div className="flex md:justify-start justify-center gap-2">
            <img
              width={28}
              height={28}
              src="/assets/footer/telegram.svg"
              alt="arrow"
            />
            <img
              width={28}
              height={28}
              src="/assets/footer/twitter.svg"
              alt="arrow"
            />
            <img
              width={28}
              height={28}
              src="/assets/footer/youtube.svg"
              alt="arrow"
            />
            <img
              width={28}
              height={28}
              src="/assets/footer/insta.svg"
              alt="arrow"
            />
            <img
              width={28}
              height={28}
              src="/assets/footer/facebook.svg"
              alt="arrow"
            />
          </div>
        </div>
        <div className="flex  md:justify-normal justify-between  gap-3 md:gap-20">
          <div className="flex flex-col gap-3 text-[12px] font-light">
            <div className="font-semibold text-[14px]">Company</div>
            <div className={`${location.pathname==='/aboutus'?'text-purple-300 font-medium':'text-white'} cursor-pointer`} onClick={()=>navigate('/aboutus')}>About us</div>
            <div>Ventures</div>
            <div>Carees</div>
            <div className={`${location.pathname==='/blog'?'text-purple-300 font-medium':'text-white'} cursor-pointer`} onClick={()=>navigate('/blog')}>Blogs</div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5 text-[12px] font-light">
              <div className="font-semibold text-[14px]">Policies</div>
              <div className={`${location.pathname==='/tearmandcondition'?'text-purple-300 font-medium':'text-white'} cursor-pointer`} onClick={()=>navigate('/tearmandcondition')}>T&C</div>
              <div className={`${location.pathname==='/kycAndAmlPolicy'?'text-purple-300 font-medium':'text-white'} cursor-pointer`} onClick={()=>navigate('/kycAndAmlPolicy')}>KYC & AML policy</div>
              <div className={`${location.pathname==='/privacyandpolicy'?'text-purple-300 font-medium':'text-white'} cursor-pointer`} onClick={()=>navigate('/privacyandpolicy')}>Privacy policy</div>

            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2.5 text-[12px] font-light">
              <div className="font-semibold text-[14px]">Buy Crypto</div>
              <div>Buy Bitcoin</div>
              <div>Buy Ethereum</div>
              <div>Buy DogoCoin</div>
              <div>Buy Shiba Inu</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center min-h-9 shadow-sm border-t-2 border-border absolute left-0 bottom-0 w-full text-[13px] items-center">
        Aslcoin@2024
      </div>
    </div>
  );
};

export default Footer;
