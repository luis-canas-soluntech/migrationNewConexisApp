"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tables_1 = require("./KnackTables/tables");
const fetchRest_1 = __importDefault(require("./util/fetchRest"));
const winstonLogger_1 = __importDefault(require("./util/winstonLogger"));
const baseUrl = `https://api.knack.com/v1/objects/${tables_1.objectTables.buyers}/records`;
const getOptions = {
    method: "GET",
    headers: {
        "X-Knack-Application-ID": "583da0c358256f6a2ee5887d",
        "X-Knack-REST-API-Key": "7c433960-b653-11e6-85b4-a3aef326e6fd",
    },
};
let filters = {
    rules: [],
};
const init = async () => {
    try {
        let url = baseUrl +
            "?filters=" +
            encodeURIComponent(JSON.stringify(filters)) +
            "&page=" +
            1 +
            "&rows_per_page=" +
            1000;
        let res = await (0, fetchRest_1.default)(url, getOptions, 4);
        let count = 0;
        if (res.records.length) {
            for (let index = 0; index < res.records.length; index++) {
                const record = res.records[index];
                if (true) {
                    console.log("record", record);
                }
                count += 1;
            }
        }
        console.log("count of recors page 1  ", count);
        winstonLogger_1.default.info("count of recors page 1 " + count);
        if (res["total_pages"] > 1) {
            for (let pages = 2; pages <= res["total_pages"]; pages++) {
                let url = baseUrl +
                    "?filters=" +
                    encodeURIComponent(JSON.stringify(filters)) +
                    "&page=" +
                    pages +
                    "&rows_per_page=" +
                    1000;
                res = await (0, fetchRest_1.default)(url, getOptions, 4);
                let count = 0;
                if (res.records.length) {
                    for (let index = 0; index < res.records.length; index++) {
                        const record = res.records[index];
                        if (true) {
                            console.log("record", record);
                        }
                        count += 1;
                    }
                }
                console.log("page: ", pages, "count ", count);
                winstonLogger_1.default.info("page: " + pages + "count " + count);
            }
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    catch (error) {
        console.log("catch error", error);
        winstonLogger_1.default.error(error);
    }
};
init();
//# sourceMappingURL=app.js.map