"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buyersMigrate = void 0;
const objectIDs_1 = require("../KnackTables/objectIDs");
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
let buyers = {
    "7251246CanadaInc.": "migrate",
    AcmeMSP: "ignore",
    "A.CLighting": "archive",
    "ACMETradingCompany(SS)": "ignore",
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
    KPMIndustries: "migrate",
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
            return;
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
exports.buyersMigrate = buyersMigrate;
//# sourceMappingURL=generalMigration.js.map