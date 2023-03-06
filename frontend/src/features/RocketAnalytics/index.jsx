import { useState } from "react";
import ShowAnalytics from "./ShowAnalytics";

const RocketAnalytics = ({ falcon9Data, falconHeavyData }) => {
  const [rocket, setRocket] = useState("falcon9");

  const changeRocket = (event) => {
    setRocket(event.target.dataset.name);
  };

  return (
    <>
      <div className=" w-11/12 xs md:w-3/5 lg:w-2/5 mx-auto flex justify-between mb-20 lg:mb-32">
        <button
          data-name="falcon9"
          onClick={changeRocket}
          className=" border-2 border-solid border-gray-500 py-1 px-8 text-center rounded-2xl bg-black bg-opacity-40"
        >
          Falcon 9
        </button>
        <button
          data-name="falconHeavy"
          onClick={changeRocket}
          className=" border-2 border-solid border-gray-500 py-1 px-8 text-center rounded-2xl bg-black bg-opacity-40"
        >
          Falcon Heavy
        </button>
      </div>

      <ShowAnalytics
        analytics={rocket === "falcon9" ? falcon9Data : falconHeavyData}
      />
    </>
  );
};

export default RocketAnalytics;
