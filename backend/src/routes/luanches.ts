import { Router } from "express";
import fs from "fs";
import { LaunchesAnalitycs, LaunchsForCharts } from "../types";
import orderDataForCharts from "../utils/orderDataForCharts";
const router = Router();

router.get("/general", (req, res) => {
  const data: LaunchesAnalitycs = JSON.parse(
    fs.readFileSync("data/general.json", "utf-8")
  );
  const dataForCharts: LaunchsForCharts[] = orderDataForCharts(
    data.totalLaunchesByYear,
    "year",
    "total"
  );

  data.totalByYearsForCharts = dataForCharts;
  res.json(data);
});

router.get("/falcon9", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data/falcon9.json", "utf-8"));
  const dataForCharts: LaunchsForCharts[] = orderDataForCharts(
    data.totalLaunchesByYear,
    "year",
    "total"
  );

  data.totalByYearsForCharts = dataForCharts;
  res.json(data);
});

router.get("/falconheavy", (req, res) => {
  const data = JSON.parse(fs.readFileSync("data/falconheavy.json", "utf-8"));
  const dataForCharts: LaunchsForCharts[] = orderDataForCharts(
    data.totalLaunchesByYear,
    "year",
    "total"
  );

  data.totalByYearsForCharts = dataForCharts;
  res.json(data);
});

export default router;
