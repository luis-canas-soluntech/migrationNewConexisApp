"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyersMigrate = void 0;
const objectIDs_1 = require("../KnackTables/objectIDs");
const Buyers_1 = require("../KnackTables/Buyers");
const fetchRest_1 = __importDefault(require("../util/fetchRest"));
const winstonLogger_1 = __importDefault(require("../util/winstonLogger"));
const baseUrl = `https://api.knack.com/v1/objects/${objectIDs_1.objectTables.Buyers}/records`;
const getOptions = {
    method: "GET",
    headers: {
        "X-Knack-Application-ID": "583da0c358256f6a2ee5887d",
        "X-Knack-REST-API-Key": "7c433960-b653-11e6-85b4-a3aef326e6fd",
    },
};
let buyers_rule_list = {
    "7251246CanadaInc.": "migrate",
    AcmeMSP: "ignore",
    "A.CLighting": "archive",
    "ACMETradingCompany(SS)": "ignore",
    "AccentureInc(Canada)CAD": "ignore",
    "AccentureInc(Canada)USD": "ignore",
    "AccentureLLP(USA)": "ignore",
    AdvanTec: "migrate",
    AlbanyPackaging: "migrate",
    "ApotexInc(Canada)": "migrate",
    ApotexPharmachem: "migrate",
    "AramarkLtd(Canada)": "archive",
    Atos: "migrate",
    AvanadeCanada: "migrate",
    BagelBoyBakery: "ignore",
    Belron: "migrate",
    BGIS: "migrate",
    "CanadaGooseInc.": "ignore",
    CDS: "migrate",
    Conexis: "ignore",
    ConexisVMSDemo: "ignore",
    ContraxVMS: "migrate",
    "CTMCoatings|PAREXConstructionChemicalsCanadaInc.": "archive",
    DENSO: "migrate",
    EclipseClient: "migrate",
    EdgeLogistics: "migrate",
    "FieldServicesInc.": "ignore",
    "FlynnCanadaLtd.": "migrate",
    "GroupEcho(Canada)": "migrate",
    "HomeDepot(Canada)": "ignore",
    IncrementOne: "migrate",
    IntelcomCourierCanada: "migrate",
    iPlaceUSA: "ignore",
    "Johnson&Johnson": "migrate",
    KICanada: "migrate",
    KPMIndustries: "archive",
    KPMGCanada: "ignore",
    "L’ORÉALCANADAINC.": "migrate",
    "MSIExpress,Inc.": "ignore",
    NationalTireDistributors: "archive",
    "NationalTireDistributors-Services": "archive",
    Nilfisk: "migrate",
    OntarioMD: "migrate",
    PencharzConsulting: "ignore",
    "Plug.com": "ignore",
    "ProgistixSolutionInc.": "migrate",
    "PublicHealthOntario(PHO)": "migrate",
    R3DInternational: "ignore",
    Resilience: "migrate",
    "Rothman,Benson&Hedges": "migrate",
    "Sarah'sCompany": "ignore",
    "SCILogisticsLtd.": "migrate",
    Scotiabank: "migrate",
    "Securefact(INACTIVECLIENT)": "archive",
    ShockinglyDifferent: "ignore",
    SIKAGroup: "archive",
    SoluntechTest: "ignore",
    SPICYBOYS: "ignore",
    Synovos: "migrate",
    "TestBuyer(SCI)": "ignore",
    BAGELBOYS: "ignore",
    THEBAGELBOYS: "ignore",
    TheBankofNovaScotia: "migrate",
    THESEARCHGROUP: "migrate",
    THESPICYBOYS: "ignore",
    Turolight: "migrate",
    "Workspend(INACTIVECLIENT)": "archive",
};
let filters = {
    rules: [],
};
const buyersMigrate = async () => {
    try {
        let url = baseUrl +
            "?filters=" +
            encodeURIComponent(JSON.stringify(filters)) +
            "&page=" +
            1 +
            "&rows_per_page=" +
            1000;
        let res = await (0, fetchRest_1.default)(url, getOptions, 4);
        let records = res.records;
        let count = 0;
        if (records.length) {
            for (let index = 0; index < records.length; index++) {
                const record = records[index];
                if (true) {
                    console.log(record[Buyers_1.buyersEnum.client_company_name]);
                    winstonLogger_1.default.info(`migrating ${record[Buyers_1.buyersEnum.client_company_name]} to postgres`);
                    winstonLogger_1.default.info(` action ${buyers_rule_list[record[Buyers_1.buyersEnum.client_company_name]]}`);
                    if (record[Buyers_1.buyersEnum.client_company_name] &&
                        buyers_rule_list[record[Buyers_1.buyersEnum.client_company_name].replace(/\s/g, "")]) {
                        console.log(buyers_rule_list[record[Buyers_1.buyersEnum.client_company_name].replace(/\s/g, "")]);
                        let currentRule = buyers_rule_list[record[Buyers_1.buyersEnum.client_company_name].replace(/\s/g, "")];
                        if (currentRule === "migrate") {
                            console.log("migrate");
                        }
                        else if (currentRule === "ignore") {
                            console.log("ignore");
                        }
                        else if (currentRule === "archive") {
                            console.log("archive");
                        }
                    }
                    else {
                        winstonLogger_1.default.error(` ${record[Buyers_1.buyersEnum.client_company_name]} no rule for this buyer record`);
                        console.log(` ${record[Buyers_1.buyersEnum.client_company_name]} no rule for this buyer record`);
                    }
                }
                count += 1;
            }
        }
        console.log("count of recors page 1  ", count);
        winstonLogger_1.default.info("count of recors page 1 " + count);
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    catch (error) {
        console.log("catch error", error);
        winstonLogger_1.default.error(error);
    }
};
exports.buyersMigrate = buyersMigrate;
//# sourceMappingURL=buyersMigration.js.map