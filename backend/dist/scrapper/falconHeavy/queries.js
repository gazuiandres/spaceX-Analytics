"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.falconHeavyFailsQuery = exports.generalFalconHeavyQuery = void 0;
exports.generalFalconHeavyQuery = {
    query: {
        rocket: "5e9d0d95eda69974db09d1ed",
    },
    options: {
        pagination: false,
        sort: {
            date_utc: "asc",
        },
        select: {
            date_utc: 1,
        },
    },
};
exports.falconHeavyFailsQuery = {
    query: {
        rocket: "5e9d0d95eda69974db09d1ed",
        success: false,
    },
    options: {
        limit: 0,
    },
};
