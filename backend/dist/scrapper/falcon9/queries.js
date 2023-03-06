"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalFalcon9FailsQuery = exports.generalFalcon9Query = void 0;
exports.generalFalcon9Query = {
    query: {
        rocket: "5e9d0d95eda69973a809d1ec",
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
exports.generalFalcon9FailsQuery = {
    query: {
        rocket: "5e9d0d95eda69973a809d1ec",
        success: false,
    },
    options: {
        limit: 0,
    },
};
