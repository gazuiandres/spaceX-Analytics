"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (data, mainKeyName, mainTotalKey) => {
    const dataOrdered = [];
    for (const key in data) {
        const object = {};
        object[mainKeyName] = key;
        object[mainTotalKey] = data[key];
        dataOrdered.push(object);
    }
    return dataOrdered;
};
