"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generalFailsQuery = exports.generalQuery = void 0;
exports.generalQuery = {
    query: {},
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
exports.generalFailsQuery = {
    query: {
        success: false,
    },
    options: {
        limit: 0,
    },
};
