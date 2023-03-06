"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const fs_1 = __importDefault(require("fs"));
const globalVariables_1 = require("../globalVariables");
const queries_1 = require("./queries");
const groupAndCountByYear_1 = __importDefault(require("../utils/groupAndCountByYear"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const generalData = yield axios_1.default.post(globalVariables_1.LAUNCHES_URL_API, queries_1.generalFalconHeavyQuery);
    const failsData = yield axios_1.default.post(globalVariables_1.LAUNCHES_URL_API, queries_1.falconHeavyFailsQuery);
    const totalLaunchByYear = (0, groupAndCountByYear_1.default)(generalData.data.docs);
    const totalItems = generalData.data.totalDocs;
    const totalFailItems = failsData.data.totalDocs;
    const jsonData = {
        totalLaunches: totalItems,
        totalLaunchesByYear: totalLaunchByYear,
        totalFailLaunches: totalFailItems,
        totalSuccessLaunches: totalItems - totalFailItems,
    };
    fs_1.default.writeFileSync("data/falconHeavy.json", JSON.stringify(jsonData, null, 4));
});
