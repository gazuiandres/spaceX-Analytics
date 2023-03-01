import axios from "axios";
import fs from "fs";

import { LAUNCHES_URL_API } from "../globalVariables";
import { generalFalconHeavyQuery, falconHeavyFailsQuery } from "./queries";

import groupAndCountByYear from "../utils/groupAndCountByYear";

export default async () => {
  const generalData = await axios.post(
    LAUNCHES_URL_API,
    generalFalconHeavyQuery
  );
  const failsData = await axios.post(
    LAUNCHES_URL_API,
    falconHeavyFailsQuery
  );

  const totalLaunchByYear = groupAndCountByYear(
    generalData.data.docs
  );
  const totalItems = generalData.data.totalDocs;
  const totalFailItems = failsData.data.totalDocs;

  const jsonData = {
    totalLaunches: totalItems,
    totalLaunchesByYear: totalLaunchByYear,
    totalFailLaunches: totalFailItems,
    totalSuccessLaunches: totalItems - totalFailItems,
  };

  fs.writeFileSync("data/falconHeavy.json", JSON.stringify(jsonData, null, 4));
};
