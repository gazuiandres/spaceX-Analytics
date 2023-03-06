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
const general_1 = __importDefault(require("./general"));
const falcon9_1 = __importDefault(require("./falcon9"));
const falconHeavy_1 = __importDefault(require("./falconHeavy"));
(() => __awaiter(void 0, void 0, void 0, function* () {
    Promise.allSettled([(0, general_1.default)(), (0, falcon9_1.default)(), (0, falconHeavy_1.default)()])
        .then(() => {
        console.log("SCRAPPER SUCCESS");
    })
        .catch((err) => {
        console.log(err);
    });
}))();
