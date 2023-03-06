"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const orderDataForCharts_1 = __importDefault(require("../utils/orderDataForCharts"));
const router = (0, express_1.Router)();
router.get("/general", (req, res) => {
    const data = JSON.parse(fs_1.default.readFileSync("data/general.json", "utf-8"));
    const dataForCharts = (0, orderDataForCharts_1.default)(data.totalLaunchesByYear, "year", "total");
    data.totalByYearsForCharts = dataForCharts;
    res.json(data);
});
router.get("/falcon9", (req, res) => {
    const data = JSON.parse(fs_1.default.readFileSync("data/falcon9.json", "utf-8"));
    const dataForCharts = (0, orderDataForCharts_1.default)(data.totalLaunchesByYear, "year", "total");
    data.totalByYearsForCharts = dataForCharts;
    res.json(data);
});
router.get("/falconheavy", (req, res) => {
    const data = JSON.parse(fs_1.default.readFileSync("data/falconheavy.json", "utf-8"));
    const dataForCharts = (0, orderDataForCharts_1.default)(data.totalLaunchesByYear, "year", "total");
    data.totalByYearsForCharts = dataForCharts;
    res.json(data);
});
exports.default = router;
