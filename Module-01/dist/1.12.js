"use strict";
const carSpeed = (value) => {
    if (typeof value === "number") {
        const meterPerSecond = (value * 1000) / 3600;
        console.log(meterPerSecond, "ms^-1");
    }
    if (typeof value === "string") {
        const [result, unit] = value.split(" ");
        const meter = parseInt(result) * 1000;
        const meterPerSecond = meter / 3600;
        console.log(meterPerSecond, "ms^-1");
    }
};
carSpeed("1000 kmh^-1");
const throughError = (errMsg) => {
    throw new Error(errMsg);
};
throughError("Dise Haiga!!! 404");
