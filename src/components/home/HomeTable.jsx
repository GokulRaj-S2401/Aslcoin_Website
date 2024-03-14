import React, { useEffect, useState } from "react";
import Table from "../common/Table";

const HomeTable = () => {
  const [coinsData, setCoinsData] = useState([]);
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
  const tableHeading = ["SR No.", "Name", "Price", "24h", "Volume 24h"];

  return (
    <div className="table-container scrollbar-hide">
      <Table tableHeading={tableHeading} height={"450px"}>
        {coinsData.map((coin, i) => (
          <tr key={i} className="text-[14px] font-semibold">
            <td className="mr-1 py-4 text-center text-[20px]">{i}</td>
            <td className="mr-1 py-4 text-center  flex justify-center">
              <div className="flex items-center gap-4 text-center">
                <img
                  width={36}
                  height={36}
                  src={coin.iconUrl}
                  alt={coin.name}
                />
                {coin.name}
              </div>
            </td>
            <td className="mr-1 py-4 font-mediu text-center">
              ${coin.price.toString().split(".")[0]}.
              {coin.price.toString().split(".")[1].substring(0, 2)}
            </td>
            <td
              className={`mr-1 py-4 text-center flex justify-center ${
                i % 2 === 0 ? "text-[#01AF1D]" : "text-[#AF0101]"
              }`}
            >
              <div className="flex gap-1.5 text-center">
                <img
                  width={14}
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
            <td className="mr-1 py-4 text-center">${coin["24hVolume"]}</td>
          </tr>
        ))}
      </Table>
    </div>
  );
};

export default HomeTable;
