import { Launch } from "./scrapper/types";

export interface LaunchsForCharts {
  year: string;
  total: number;
}

export interface LaunchesAnalitycs {
  totalByYearsForCharts?: LaunchsForCharts[];
  totalLaunchesByYear: Record<string, number>;
  totalLaunches: Number;
  totalFailLaunches: Number;
  totalSuccessLaunches: Number;
}
