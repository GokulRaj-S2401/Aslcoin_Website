import React, { useEffect } from "react";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-white overflow-hidden">
      <img
        className="absolute z-[0] -mt-[100px] md:ml-4  h-[745px]"
        src="/assets/blog/squreright.png"
        alt="home"
      />

      <div>
        <div className=" relative flex gap-4 justify-center md:justify-between flex-wrap z-10 mx-auto pt-24">
          <div className="px-8 md:px-24 py-4" onClick={() => {}}>
            <div className="px-5">
            <h5 className="text-[24px] pb-8 font-medium">About us</h5>
            <h4 className="mt-3 text-[42px] font-bold">A Story Of Money</h4>
            <h4 className="text-[42px] font-bold">
              And The{" "}
              <span className="bg-gradient-to-r from-[#692CC2] to-[#FD497D] bg-clip-text text-[#00000000]">
                <br className=" md:hidden block"/>Future
              </span>{" "}
              Of Crypto
            </h4>
            <p className="text-[15px] font-normal w-full md:w-[560px] text-[#CECECE] mt-2">
            Step into the captivating narrative of AslCrypto—a tale that intertwines the essence of money and the limitless potential of crypto. At AslCrypto, we're not just a platform; we're the architects of a financial evolution. Our journey began with a vision to democratize finance, providing a gateway to a decentralized future. .
            </p>
            <button className="mt-12 flex items-center justify-center mb-24 bg-white bg-gradient-to-b from-[#692CC2] via-[#fd49df]  to-[#FD497D] w-[189px] h-[60px] p-4 rounded-2xl">
              Join Our Team
            </button>
            </div>
            <div className="md:w-[560px] flex gap-2">
              <div className="border-r px-6 border-[#7782FF] text-center">
                <p className="font-semibold text-[16px]">Trust of</p>
                <h5 className="font-bold text-[32px]">1.4 cr+</h5>
                <h6 className="font-medium text-[14px]">Registered users</h6>
              </div>
              <div className="border-r px-6 border-[#7782FF] text-center">
                <p className="font-semibold text-[16px]">Home to</p>
                <h5 className="font-bold text-[32px]">80+</h5>
                <h6 className="font-medium text-[14px]">Assets Supported</h6>
              </div>
              <div className="text-center px-6">
                <p className="font-semibold text-[16px]">Growth</p>
                <h5 className="font-bold text-[38px]">$2B+</h5>
                <h6 className="font-medium text-[14px]">Crypto Delivered</h6>
              </div>
            </div>
          </div>

          <div>
            <img
              src="/assets/about/barCoins.png"
              alt="home"
              className="w-full h-[400px] md:w-[560px] md:h-[600px]"
            />
          </div>
        </div>
      </div>

      <h5 className="text-[26px] pb-8 font-semibold text-center">Our Values</h5>

      <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-center lg:justify-between w-full h-[298px] py-10 px-36">
        <div className=" w-[240px] ">
          <img
            src="/assets/about/trade.svg"
            alt="head phone"
            className="w-[50px] h-[50px] flex mx-auto "
          />
          <div className="my-3 font-semibold text-[17px] text-center">
            Trade Assests
          </div>
          <div className="mt-2 text-[13px] text-[#9E9E9E] text-center">
            Discover new and innovative crypto assets with over 200 spot trading
            pairs and 25 margin.
          </div>
        </div>

        <div className=" w-[245px] ">
          <img
            src="/assets/about/secure.svg"
            alt="secure"
            className="w-[50px] h-[50px] flex mx-auto "
          />
          <div className="my-3 font-semibold text-[17px] text-center">
            Secure Storage
          </div>
          <div className="mt-2 text-[13px] text-[#9E9E9E] text-center">
            We store the vast majority of the digital assets in secure offline
            storage.
          </div>
        </div>

        <div className=" w-[240px] ">
          <img
            src="/assets/about/protected.svg"
            alt="head phone"
            className="w-[50px] h-[50px] flex mx-auto "
          />
          <div className="my-3 font-semibold text-[17px] text-center">
            Protected by insurance
          </div>
          <div className="mt-2 text-[13px] text-[#9E9E9E] text-center">
            Cryptocurrency stored on our servers is covered by our insurance
            policy.
          </div>
        </div>
      </div>

      <div className="gradientBox  -mt-[300px] -ml-64 "></div>
      <div className="gradientBox  mt-16 ml-[1200px] "></div>

      <div className="px-8 md:px-32 pb-16 relative  md:-mt-[300px] lg:-mt-[480px]">
        <h5 className="text-[25px] pb-8 font-semibold text-center">
          Our Founders
        </h5>
        <div className="flex gap-5 justify-center md:justify-between flex-wrap">
          <div className="text-center w-[280px]">
            <img className="flex mx-auto  mt-8 w-[200px] md:w-[280px] h-[200px] md:h-[280px] rounded-full bg-[#d9d9d9]" />
            <h6 className="text-[22px] font-semibold mt-4">Rahul</h6>
            <div className="text-[13px] font-medium mt-1">
              Co-Founder & Former CEO
            </div>
          </div>
          <div className="md:w-[70%] mt-16">
            Lorem ipsum dolor sit amet consectetur. Tellus et euismod nunc
            dictum nunc aenean sit nec. Tortor sollicitudin aliquet viverra in.
            Metus pharetra egestas urna sit nunc faucibus. Ut massa a commodo
            massa. Vestibulum malesuada consectetur natoque condimentum posuere.
            Orci nibh cras habitant amet montes auctor blandit. In id ac purus
            aliquet maecenas aliquet. Nulla vitae in faucibus magnis nulla
            pellentesque est tempor. Diam massa in urna a feugiat dolor nec
            aliquam urna.
          </div>
        </div>

        <div className="flex gap-5 justify-center md:justify-between flex-wrap">
        <div className=" md:hidden text-center w-[280px]">
            <img className="flex mx-auto  mt-8 w-[200px] md:w-[280px] h-[200px] md:h-[280px] rounded-full bg-[#d9d9d9]" />
            <h6 className="text-[22px] font-semibold mt-4">Rahul</h6>
            <div className="text-[13px] font-medium mt-1">
              Co-Founder & Former CEO
            </div>
          </div>
          <div className="md:w-[70%] mt-16">
            Lorem ipsum dolor sit amet consectetur. Tellus et euismod nunc
            dictum nunc aenean sit nec. Tortor sollicitudin aliquet viverra in.
            Metus pharetra egestas urna sit nunc faucibus. Ut massa a commodo
            massa. Vestibulum malesuada consectetur natoque condimentum posuere.
            Orci nibh cras habitant amet montes auctor blandit. In id ac purus
            aliquet maecenas aliquet. Nulla vitae in faucibus magnis nulla
            pellentesque est tempor. Diam massa in urna a feugiat dolor nec
            aliquam urna.
          </div>
          <div className="hidden md:block text-center w-[280px]">
            <img className="w-[280px] h-[280px] rounded-full bg-[#d9d9d9]" />
            <h6 className="text-[22px] font-semibold mt-4">Rahul</h6>
            <div className="text-[13px] font-medium mt-1">
              Co-Founder & Former CEO
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#3D4143] pb-8 md:pb-0 min-h-fit md:h-[700px]">
        <h5 className="text-[24px] pt-16 font-semibold text-center">
          Get in touch
        </h5>
        <div className="flex px-3 mx-auto mt-3 text-[#cecece] text-[13px] text-center md:w-[550px]">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua ut dolor sit
        </div>
        <input
          type="text"
          className="flex mx-auto mt-8 w-[80%] md:w-[500px] h-[42px] rounded-xl px-4 text-sm  text-[#000]  bg-[#fff] placeholder:text-[#747474] placeholder:text-xs focus:ring-0 focus:border-0 focus:outline-none"
          placeholder="Enter your email"
        />
        <button className="flex mx-auto mt-8 text-[15px] font-semibold px-6 py-2 rounded-lg bg-[#9D6CFF]">
          Contact us
        </button>

        <div className=" flex justify-center md:justify-between md:flex-nowrap flex-wrap gap-5 w-full md:h-[298px] mt-10 py-10 px-36">
          <div className="w-[240px] ">
            <img
              src="/assets/about/msg.svg"
              alt="head phone"
              className="w-[52px] h-[46px] flex mx-auto "
            />
            <div className="mt-4 text-[15px] text-center">Email</div>
            <div className="mt-1 text-[14px] text-[#d6d6d6] text-center">
              support@aslcrypto.com
            </div>
          </div> 

          <div className="w-[260px] md:w-[300px] ">
            <img
              src="/assets/about/location.svg"
              alt="secure"
              className="w-[59px] h-[59px] flex mx-auto "
            />
            <div className="mt-3  text-[15px] text-center">Address</div>
            <div className="mt-1 text-[13px] text-[#d3d3d3] text-center">
              Avtar informatica Llc 234 Saint Andrews Road Columbia 29210 South
              Carolina USA
            </div>
          </div>

          <div className=" w-[240px] ">
            <img
              src="/assets/about/phone.svg"
              alt="head phone"
              className="w-[50px] h-[50px] flex mx-auto "
            />
            <div className="mt-4  text-[15px] text-center">Phone</div>
            <div className="mt-1 text-[14px] text-[#dadada] text-center">
              518-952-5334
            </div>
          </div>
        </div>

        <div className="hidden md:block md:absolute md:-mt-12 mx-auto left-[50%] -translate-x-[50%] w-[70%] md:h-[260px] text-[#3D4143] bg-[#fff] rounded-[32px] shadow-lg py-10 px-16">
          <h5 className="text-[24px] text-center py-4 font-semibold">
            Your Crypto journey starts here!
          </h5>
          <button className="text-[#fff] font-semibold mt-8 flex mx-auto justify-center items-center mb-24 bg-white bg-gradient-to-b from-[#692CC2] via-[#fd49df]  to-[#FD497D] w-[279px] h-[60px] p-4 rounded-2xl">
            Download AslCoin now
          </button>
        </div>
      </div>
      
      <div className=" flex flex-wrap justify-center md:hidden md:absolute mt-10 mx-auto w-[90%] md:w-[70%]  md:h-[260px] text-[#3D4143] bg-[#fff] rounded-[32px] shadow-lg py-10 px-16">
          <h5 className="text-[24px] text-center py-4 font-semibold">
            Your Crypto journey starts here!
          </h5>
          <button className="text-[#fff] font-semibold mt-8 flex mx-auto justify-center items-center md:mb-24 bg-white bg-gradient-to-b from-[#692CC2] via-[#fd49df]  to-[#FD497D] w-[279px] h-[60px] p-4 rounded-2xl">
            Download AslCoin now
          </button>
        </div>
      <div className="w-full md:h-[200px]"></div> 

    </div>
  );
};

export default AboutUs;
