import React, { useEffect, useState } from "react";
import ProgressBar from "../components/common/progressBar";
import axios from "axios";
import SparklineChart from "../components/home/SparklineChart";

const TodayPrice = () => {
  const [selectCrypto, setSelectCrypto] = useState(0);
  const [coinsData, setCoinsData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const tableHeading = [
    "#",
    "Coin",
    "Price",
    "24h%",
    "Market Cap",
    "Volume (24h)",
    " ",
    " ",
    "+",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fetchData = async (orderBy, orderDirection, sname = "") => {
    const url = "https://coinranking1.p.rapidapi.com/coins";
    const params = {
      referenceCurrencyUuid: "yhjMzLPhuIDl",
      timePeriod: "24h",
      "tiers[0]": "1",
      orderBy: orderBy,
      orderDirection: orderDirection,
      search: sname,
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

  const filteredTopics = coinsData?.filter(
    (item) =>
      item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log("coinsData", coinsData);
  return (
    <div className=" overflow-x-hidden px-2">
      <div className="text-center my-8 text-[25px]">Today's Crypto Price</div>
      <div
        className={` max-w-[full] md:max-w-[85%] shadow-pinkshadow  border border-[#141320] relative z-10 text-center  py-9 px-8  bg-[#11101E] rounded-[25px] mx-auto my-8`}
      >
        <div className="flex justify-between flex-wrap gap-5 pb-8 px-4">
          <div className="flex gap-5">
            {["All crypto coins", "Top Gainers", "Top Losers"].map(
              (item, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (item === "All crypto coins") {
                      fetchData("marketCap", "desc");
                    } else if (item === "Top Gainers") {
                      fetchData("change", "desc");
                    } else if (item === "Top Losers") {
                      fetchData("change", "asc");
                    }
                    setSelectCrypto(i);
                  }}
                  className={`${
                    selectCrypto === i
                      ? "border border-[#9D6CFF] text-[#9D6CFF] bg-[#9D6CFF26]"
                      : "border border-[#3D4143] text-[#8F98A1]"
                  } px-5 py-2 h-[39px] text-xs font-semibold rounded-[12px]`}
                >
                  {item}
                </button>
              )
            )}
          </div>
          <div className="flex px-4 w-[398px] h-[50px] rounded-3xl bg-[#12181F]">
            <img width={24} height={24} src="/assets/search.svg" alt="arrow" />
            <input
              type="text"
              className="flex-1 rounded-3xl px-4 text-sm text-[#fff] bg-[#12181F] placeholder:text-[#C2C2C2] focus:ring-0 focus:border-0 focus:outline-none"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="table-container overflow-x-scroll">
          <div className="w-[1000px] md:w-full overflow-x-auto">
            <table className="w-[1000px] md:w-full table-auto">
              <thead>
                <tr>
                  {tableHeading.map((item, i) => (
                    <th
                      className={`text-xs pb-3 border-b border-[#242D3999] ${
                        tableHeading.length - 1 === i
                          ? "flex justify-end w-[50px]"
                          : "font-normal px-2"
                      }`}
                      key={i}
                    >
                      {tableHeading.length - 1 === i ? (
                        <img
                          width={30}
                          height={30}
                          src={"/assets/todaysPrice/Add.svg"}
                          alt="line"
                        />
                      ) : (
                        <div className="flex gap-1">
                          {item}
                          {(i === 1 ||
                            i === 2 ||
                            i === 3 ||
                            i === 4 ||
                            i === 5 ||
                            i === 6) && (
                            <img
                              width={16}
                              height={16}
                              src={"/assets/Arrows.svg"}
                              alt="line"
                            />
                          )}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredTopics.map((coin, i) => (
                  <tr key={i} className="text-[14px] font-normal">
                    <td className="mr-1 py-4 text-center text-xs text-[#A4A8AB]">
                      {i}
                    </td>
                    <td className="mr-1 py-4 text-center  flex justify-center">
                      <div className="flex items-center gap-2 text-center">
                        <img
                          width={32}
                          height={32}
                          src={coin.iconUrl}
                          alt={coin.name}
                        />
                        <div className="text-[15px] font-semibold text-start">
                          {coin.name}
                          <div className="text-xs text-[#A4A8AB]">
                            {coin.symbol}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="mr-1 py-4 text-center">
                      {coin.price.toString().split(".")[0]}.
                      {coin.price.toString().split(".")[1].substring(0, 2)}
                    </td>
                    <td className="mr-1 py-4 ">
                      <div
                        className={`items-center border rounded-xl py-1 px-2 gap-1 h-[32px] w-[66px] mx-auto flex justify-center ${
                          i % 2 === 0 ? "text-[#01AF1D]" : "text-[#AF0101]  "
                        }`}
                      >
                        <img
                          width={7}
                          src={
                            i % 2 === 0
                              ? "/assets/green_triangle.svg"
                              : "/assets/red_triangle.svg"
                          }
                          alt="arrow"
                        />{" "}
                        {coin.change}
                      </div>
                    </td>

                    <td className="mr-1 py-4 ">{coin.marketCap}</td>
                    <td className="mr-1 py-4 "> {coin["24hVolume"]}</td>

                    <td className="mr-1 py-4 w-[80px]">
                      <SparklineChart
                        data={coin.sparkline}
                        width="70px"
                        height="40px"
                      />
                    </td>
                    <td className="mr-1 py-4 ">
                      <div
                        className={`border border-[#363B47] rounded-xl py-1 px-2 gap-1 h-[32px] w-[66px]} text-[#C2C2C2]`}
                      >
                        Trade
                      </div>
                    </td>
                    <td className="flex justify-end mr-1 py-4  w-[50px]">
                      <img
                        width={16}
                        height={16}
                        src={"/assets/Star.svg"}
                        alt="start"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="gradientBoxPink -mt-[300px] md:-mt-[500px] -ml-64 "></div>
      <div className="gradientBoxPink hidden md:block  -mt-28 ml-[1050px] "></div>
      <div className="text-center -mt-5 text-[25px]">Latest</div>

      <div className="flex w-[85%] mx-auto my-10 flex-wrap relative z-10 gap-10 justify-center">
        {["c1", "c2", "c3"].map((item, i) => (
          <div key={i} className="w-[310px]">
            <img
              src={`/assets/blog/${item}.png`}
              alt="history"
              className="w-[310px] h-[198px] rounded-lg"
            />

            {i === 0 && (
              <div className="relative -mt-[198px] z-30 w-[310px] h-[198px] rounded-lg bg-[#0000008C] flex justify-center items-center">
                <span className="w-[220px] text-center">
                  A beginner’s guide to crypto trading
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="gradientBoxPink  -mt-[300px] -ml-[500px] "></div>
    </div>
  );
};

export default TodayPrice;
