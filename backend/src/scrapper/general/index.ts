import axios from "axios";
import fs from "fs";

import { LAUNCHES_URL_API } from "../globalVariables";
import { generalQuery, generalFailsQuery } from "./queries";

import groupAndCountByYear from "../utils/groupAndCountByYear";

export default async () => {
  const generalData = await axios.post(LAUNCHES_URL_API, generalQuery);
  const failsData = await axios.post(LAUNCHES_URL_API, generalFailsQuery);

  const totalLaunchByYear = groupAndCountByYear(generalData.data.docs);
  const totalItems = generalData.data.totalDocs;
  const totalFailItems = failsData.data.totalDocs;

  const jsonData = {
    totalLaunches: totalItems,
    totalLaunchesByYear: totalLaunchByYear,
    totalFailLaunches: totalFailItems,
    totalSuccessLaunches: totalItems - totalFailItems,
  };

  fs.writeFileSync("data/general.json", JSON.stringify(jsonData, null, 4));
};
