"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data) => {
    const orderedData = {};
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
