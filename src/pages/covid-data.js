import { React, useState, useEffect } from "react";
import axios from "axios";
// const getDetails = () => {
//   return axios.get("https://data.covid19india.org/v4/min/data.min.json");
// };
const CovidData = () => {
//   const [covidData, setCovidData] = useState("");
//   const [openDistricts, setOpenDistricts] = useState(false);
//   useEffect(() => {
//     getDetails().then((response) => {
//       console.log("response === ", response);
//       const { data } = response;
//       const dataArr = Object.entries(data);
//       console.log("dataArr === ", dataArr);
//       setCovidData(dataArr);
//     });
//   }, []);
//   const handleClick = () => {
//     setOpenDistricts(!openDistricts);
//   };
  return (
    <>
      <div className="flex">
        <div className="inline-grid grid-cols-7">
          <div className="cursor-default contents">
            <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-700">
              <div className="text-white">State/UT</div>
            </div>
            <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-700">
              <div className="text-white">Confirmed</div>
            </div>
            <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-700">
              <div className="text-white">Recovered</div>
            </div>
            <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-700">
              <div className="text-white">Deceased</div>
            </div>
            <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-700">
              <div className="text-white">Tested</div>
            </div>
            <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-700">
              <div className="text-white">Vaccinated (1 Dose)</div>
            </div>
            <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-700">
              <div className="text-white">Fully Vaccinated</div>
            </div>
          </div>
          {/* {covidData.map((item, index) => {
            return (
              <>
                <div
                  className="cursor-pointer contents"
                  onClick={handleClick}
                  key={index}
                >
                  <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-50 hover:bg-gray-300">
                    {item[0]}
                  </div>
                  <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-50 hover:bg-gray-300">
                    {item[1].total.confirmed}
                  </div>
                  <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-50 hover:bg-gray-300">
                    {item[1].total.recovered}
                  </div>
                  <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-50 hover:bg-gray-300">
                    {item[1].total.deceased}
                  </div>
                  <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-50 hover:bg-gray-300">
                    {item[1].total.tested}
                  </div>
                  <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-50 hover:bg-gray-300">
                    {item[1].total.vaccinated1}
                  </div>
                  <div className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-50 hover:bg-gray-300">
                    {item[1].total.vaccinated2}
                  </div>
                </div>
                {openDistricts ? (
                  <>
                    <div className="h-5 bg-blue-400 cursor-pointer contents">
                      {item[1].districts.map((district, index) => {
                        return (
                          <>
                            <div
                              className="flex flex-row items-center px-5 py-3 text-base font-semibold text-left bg-gray-50 hover:bg-gray-300"
                              key={index}
                            >
                              {district.name}
                            </div>
                          </>
                        );
                      })}
                    </div>
                  </>
                ) : null}
              </>
            );
          })} */}
        </div>
        {/* <table className="w-full">
          <thead>
            <tr>
              <th className="text-left">State/UN</th>
              <th className="text-left">Confirmed</th>
              <th className="text-left">Recovered</th>
              <th className="text-left">Deceased</th>
              <th className="text-left">Tested</th>
              <th className="text-left">Vaccinated (1 Dose)</th>
              <th className="text-left">Fully Vaccinated</th>
            </tr>
          </thead>
          <tbody>
            {covidData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item[0]}</td>
                  <td>{item[1].total.confirmed}</td>
                  <td>{item[1].total.recovered}</td>
                  <td>{item[1].total.deceased}</td>
                  <td>{item[1].total.tested}</td>
                  <td>{item[1].total.vaccinated1}</td>
                  <td>{item[1].total.vaccinated2}</td>
                </tr>
              );
            })}
          </tbody>
        </table> */}
      </div>
    </>
  );
};

export default CovidData;
