import React, { useEffect, useState } from "react";
import HomeTable from "../components/home/HomeTable";

const Home = () => {
  const [freqIndex, setFreqIndex] = useState(0);
  const [coinsData, setCoinsData] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async (orderBy, orderDirection) => {
    const url = "https://coinranking1.p.rapidapi.com/coins";
    const params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: orderBy,
      orderDirection: orderDirection,
      limit: "50",
      offset: "0",
    };
    const queryString = new URLSearchParams(params).toString();
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a0b97c1a43msh0603ff17936859bp17968cjsnd3b5d174235d",
        "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(`${url}?${queryString}`, options);
      const result = await response.json();
      setCoinsData(result?.data?.coins);
      console.log("result", result.data.coins);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData("marketCap", "desc");
  }, []);
  const faq = [
    {
      que: "How do I download and install the AslCrypto mobile app?",
      ans: 'Visit the App Store or Google Play Store. Search for "AslCrypto" and click on the download button.',
    },
    {
      que: "What features does the AslCrypto mobile app offer?",
      ans: "AslCrypto provides a user-friendly interface for trading, real-time market data, portfolio tracking, and more. Explore the app to discover advanced features tailored for both beginners and experienced traders.",
    },
    {
      que: "Is AslCrypto secure for trading and storing cryptocurrencies?",
      ans: "Yes, AslCrypto prioritizes the security of your assets. We implement robust encryption and advanced security measures to protect your funds and personal information.",
    },
    {
      que: "How do I create an account on AslCrypto?",
      ans: 'Step 1: Open the app and click on "Sign Up",\n Step 2: Fill in the required information, including your email and password \nStep 3: Follow the verification process to complete your account setup.',
    },
    {
      que: " What cryptocurrencies can I trade on AslCrypto?",
      ans: "AslCrypto supports a wide range of cryptocurrencies, including popular ones like Bitcoin (BTC), Ethereum (ETH), and many altcoins. Check the app for the complete list.",
    },
  ];
  return (
    <div className="text-white overflow-hidden">
      {/* <div className="h-screen flex justify-center items-center"> */}
      <div className="flex md:flex-nowrap flex-wrap">
        <div className="mt-16 ml-10 md:ml-48 relative z-10">
          <div className="text-[28px] md:text-[45px] font-semibold">
            Start your
          </div>
          <div className="text-[28px] md:text-[45px] font-semibold">
            amazing crypto
          </div>
          <div className="text-[28px] md:text-[45px] font-semibold">
            portfolio via your
          </div>
          <div className="text-[28px] md:text-[45px] font-semibold">
            smartphone now
          </div>
          <div className="text-[13px] font-normal w-[58%] md:w-[464px] mt-6">
            Unlock a new era of financial freedom with AslCrypto – where
            opportunity meets innovation. Embrace the future, trade with
            confidence, and redefine your financial journey today!. .
          </div>
          <div className="flex flex-wrap mt-8 gap-16 items-center">
            <div className="flex gap-2 items-center justify-center font-semibold bg-white bg-gradient-to-b from-[#9D6CFF] via-[#fd49df]  to-[#FD497D] w-[215px] h-[63px] p-4 rounded-lg">
              <img src="/assets/arrowRightWhite.svg" width={20} height={20} />
              Get Started
            </div>
            <div className="flex items-center text-[13px] gap-2">
              <img className="" src="/assets/play.svg" alt="home" />
              How it works
            </div>
          </div>
          <div className="text-[25px] md:text-[32px] font-semibold w-[58%] md:w-[590px] mt-20">
            Discover Cryptocurrency such as Bitcoin , Ethereum, and Tether
          </div>
          <div className="text-[12px] font-normal w-[58%] md:w-[464px] mt-2">
            Simply and securely buy, sell, manage hundreds of cryptocurrencies
          </div>
        </div>
        <img
          className="hidden md:flex -mt-[100px] -ml-56 h-[745px]"
          src="/assets/bghome.png"
          alt="home"
        />
        <img
          className="md:hidden absolute -top-1  w-full h-[600px]"
          src="/assets/blog/squreright.png"
          alt="home"
        />
      </div>

      <div className="flex min-h-fit gap-8 pt-16 -ml-6 overflow-x-scroll w-[101%] scrollbar-hide">
        {coinsData.map((coin, i) => (
          <div
            key={i}
            className=" bg-gradient-to-br from-[#363434] via-[#b4b4b4] to-[#fff] min-w-[245px] min-h-[100px] p-[1px] rounded-lg h-[130px]"
          >
            <div className="bg-background w-full h-full p-4 rounded-lg">
              <img className=" w-6" src={coin.iconUrl} alt={coin.name} />
              <div className="text-[22px] mt-2">
                {coin.name}
                <span className="text-[10px]"> {coin.symbol}</span>
              </div>
              <div className="text-[24px]">
                ${coin.price.toString().split(".")[0]}.
                {coin.price.toString().split(".")[1].substring(0, 2)}{" "}
                <span className="text-[10px] text-[#00ff04]">
                  {coin.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className=" my-4  mx-52 border-2 rounded-full border-border to-[#fff]" />

      <div className="text-center my-8 text-[25px]">Today's Crypto Trends</div>

      <HomeTable />

      <div className="gradientBox  -mt-[700px] -ml-32 "></div>
      <div className="gradientBox  mt-16 ml-[1200px] "></div>

      <div className="flex justify-center md:py-0 py-8 flex-wrap gap-8 md:gap-28 items-center px-14 md:px-36 w-full md:h-[650px] bg-[#fff]">
        <div className="flex justify-center px-8  md:px-24 py-6 bg-[#F3F3F3] rounded-xl ">
          <img
            src="assets/iphone.svg"
            className="md:min-w-[220px] min-w-[150px] min-h-[300px] md:min-h-[480px]"
            alt="iphone"
          />
        </div>
        <div className="flex flex-col gap-5">
          <div className="text-[26px] md:text-[34px] font-semibold text-[#000] w-full md:w-[500px]">
            Start building your crypto portfolio in 3 steps
          </div>
          <div className="text-[16px] font-semibold text-[#000] w-full md:w-[400px] px-4 border-l-4">
            Step 1
            <div className="mt-2 text-[16px] font-normal">
              Download the app, keep your documents handy & complete the KYC
            </div>
          </div>
          <div className="text-[16px] font-semibold text-[#000] w-full md:w-[400px] px-4 border-l-4">
            Step 2
            <div className="mt-2 text-[16px] font-normal">
              Deposit INR by choosing from one of our many payment methods.
            </div>
          </div>
          <div className="text-[16px] font-semibold text-[#000] w-full md:w-[400px] px-4 border-l-4">
            Step 3
            <div className="mt-2 text-[16px] font-normal">
              Start investing inBitcoin, Ethereum &100+ other cryptos
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-h-fit">
        <div className="text-[24px] font-[600] text-center py-12">
          Frequently Asked Questions
        </div>

        {faq.map((item, i) => (
          <div
            key={i}
            onClick={() => setFreqIndex(i)}
            className={`${
              freqIndex === i && "bg-[#22262D]"
            } rounded-xl w-[70%] mx-auto p-4 my-2 cursor-pointer`}
          >
            <div className="flex justify-between">
              <span className="font-semibold text-[16px] flex items-center gap-5">
                <span className="w-6 h-6 text-[12px] flex items-center justify-center border-[1px] border-[#747474] rounded p-1 ">
                  {i + 1}
                </span>
                {item?.que}
              </span>
              <span
                className={`flex items-center justify-center ${
                  freqIndex === i
                    ? "bg-[#9D6CFF] text-[#000] text-[32px]"
                    : "text-[20px]"
                }   rounded-full  w-8 h-8`}
              >
                {freqIndex === i ? "-" : "+"}
              </span>
            </div>
            {freqIndex === i && (
              <div className="text-[14px] font-normal px-11 whitespace-pre-line">
                {item?.ans}
                {/* <span className="text-[#9D6CFF] font-semibold">
                  Cryptocurrency
                </span>{" "}
                exchanges are digital marketplaces that enable users to buy and
                sell cryptocurrencies like{" "}
                <span className="text-[#9D6CFF] font-semibold">Bitcoin</span> ,{" "}
                <span className="text-[#9D6CFF] font-semibold">Ethereum</span>{" "}
                and <span className="text-[#9D6CFF] font-semibold">Tether</span>
                . . The Binance exchange is the largest crypto exchange by trade
                volume. */}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="h-52 w-full"></div>
      <div className="relative md:absolute mb-8 md:mb-0 -mt-32 flex gap-5 justify-center md:justify-between flex-wrap  mx-auto md:left-[50%] md:-translate-x-[50%] w-[70%] min-h-fit  bg-[#3D4143] rounded-[32px] shadow-lg py-10 px-16">
        <div className=" w-[240px] ">
          <img
            src="/assets/headphone.png"
            alt="head phone"
            className="w-20 h-20 flex mx-auto "
          />
          <div className="my-4 font-semibold text-[16px] text-center">
            Best in industry support
          </div>
          <div className="mt-2 text-[10px] text-[#bfbfbf] text-center">
            Getting stuck?
          </div>
          <div className=" text-[10px] text-[#bfbfbf] text-center">
            Contact us on email and chat for 24x7 support
          </div>
          <button className="flex mx-auto mt-4 bg-[#fff] rounded-lg shadow-sm py-2 px-5 text-[#000] font-bold text-sm">
            React us
          </button>
        </div>

        <div className=" w-[245px] ">
          <img
            src="/assets/persons.png"
            alt="head phone"
            className="w-20 h-20 flex mx-auto "
          />
          <div className="my-4 font-semibold text-[16px] text-center">
            Join the AslCoins Community
          </div>
          <div className="mt-2 text-[10px] text-[#bfbfbf] text-center">
            Want to know what other investors are up to?
          </div>
          <div className=" text-[10px] text-[#bfbfbf] text-center">
            Engage with the official AslCoins community.
          </div>
          <button className="flex mx-auto mt-4 bg-[#fff] rounded-lg shadow-sm py-2 px-5 text-[#000] font-bold text-sm">
            Join the Community
          </button>
        </div>

        <div className=" w-[240px] ">
          <img
            src="/assets/4squre.png"
            alt="head phone"
            className="w-20 h-20 flex mx-auto "
          />
          <div className="my-4 font-semibold text-[16px] text-center">
            Download App
          </div>
          <div className="mt-2 text-[10px] text-[#bfbfbf] text-center">
            Join us to build the Indian Crypto
          </div>
          <div className=" text-[10px] text-[#bfbfbf] text-center">
            Ecosystem together
          </div>
          <button className="flex mx-auto mt-4 bg-[#fff] rounded-lg shadow-sm py-2 px-5 text-[#000] font-bold text-sm">
            Download Now
          </button>
        </div>
      </div>
      <div className="hidden md:block w-full h-[180px] bg-[#fff] text-[#000]" />

      <div className="w-full pt-8 pb-2  bg-[#fff] text-[#000]">
        <div className="flex flex-wrap pt-2 justify-center mx-auto  text-center w-[80%] md:w-[400px] text-[24px] font-semibold">
          Trust of 1.4Cr+ registered users Download AslCoins
          <div className="flex flex-wrap  justify-around w-full md:w-[360px] pt-10 pb-6">
            <div className="flex gap-3 items-center h-[65px] w-[150px] px-4 rounded-lg shadow-xl border border-[#f1f1f1]">
              <img
                src="/assets/apple.svg"
                alt="qrcode"
                width={24}
                height={24}
              />
              <div>
                <div className="font-semibold text-[8px]">Download on it</div>
                <div className="font-semibold text-[13px]">Apple Store</div>
              </div>
            </div>
            <div className="h-[65px] w-[150px] flex gap-3 items-center px-4 rounded-lg shadow-xl border border-[#f1f1f1]">
              <img
                src="/assets/playstore.svg"
                alt="qrcode"
                width={24}
                height={24}
              />
              <div>
                <div className="font-semibold text-[8px]">Get it on</div>
                <div className="font-semibold text-[13px]">Play Store</div>
              </div>
            </div>
          </div>
          <img src="/assets/qrcode.svg" alt="qrcode" width={162} height={162} />
        </div>
      </div>
    </div>
  );
};

export default Home;
