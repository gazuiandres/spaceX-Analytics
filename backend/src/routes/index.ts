import { Express } from "express";

import launchesRouter from "./luanches";

export default (app: Express) => {
  app.use("/api/launches", launchesRouter);
};
