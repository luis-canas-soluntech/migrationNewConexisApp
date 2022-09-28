"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generalMigration_1 = require("./migration scripts/generalMigration");
const winstonLogger_1 = __importDefault(require("./util/winstonLogger"));
const init = async () => {
    const MY_NAMESPACE = "1b671a64-40d5-491e-99b0-da01ff1f3341";
    try {
        await (0, generalMigration_1.generalMigrate)();
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    catch (error) {
        console.log("catch error", error);
        winstonLogger_1.default.error(error);
    }
};
init();
//# sourceMappingURL=app.js.map