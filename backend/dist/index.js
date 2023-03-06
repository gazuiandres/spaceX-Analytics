"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
const routes_1 = __importDefault(require("./routes"));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    const message = {
        message: "WELCOME TO MY SPACE X API PROJECT",
        routesAvailable: {
            launches: [
                "/api/launches/general",
                "/api/launches/falcon9",
                "/api/launches/falconheavy",
            ],
        },
    };
    res.json(message);
});
(0, routes_1.default)(app);
app.listen(process.env.PORT || 3000, () => {
    console.log(`API WORKING ON PORT: ${process.env.PORT || 3000}`);
});
module.exports = app;
