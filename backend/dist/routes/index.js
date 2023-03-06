"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const luanches_1 = __importDefault(require("./luanches"));
exports.default = (app) => {
    app.use("/api/launches", luanches_1.default);
};
