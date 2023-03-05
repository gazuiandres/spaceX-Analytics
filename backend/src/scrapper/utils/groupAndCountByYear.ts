import { Launch } from "../types";

type YearCount = Record<string, number>;

export default (data: Launch[]) => {
  const orderedData: YearCount = {};

  data.forEach(({ date_utc }) => {
    const year = new Date(date_utc).getFullYear();
    if (orderedData[year] >= 1) {
      orderedData[year]++;
      return;
    }
    orderedData[year] = 1;
  });

  return orderedData;
};
