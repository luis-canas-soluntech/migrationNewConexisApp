"use strict";

//file to migrate the buyers table from knack to postgres

import { objectTables } from "../KnackTables/objectIDs";
import { buyersEnum } from "../KnackTables/Buyers";
import prisma from "../prismaClient";
import fetchRest from "../util/fetchRest";
import logger from "../util/winstonLogger";

const baseUrl = `https://api.knack.com/v1/objects/${objectTables.rateCards}/records`;

const getOptions = {
  method: "GET",
  headers: {
    "X-Knack-Application-ID": "583da0c358256f6a2ee5887d",
    "X-Knack-REST-API-Key": "7c433960-b653-11e6-85b4-a3aef326e6fd",
  },
  // body: JSON.stringify(data)
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
  //match: "and",
  rules: [
    // {
    //   field: "field_2248", //pin number
    //   operator: "is blank",
    //   // value: "Dodgit",
    // },
    // {
    //   field: "field_315", ///suplier
    //   operator: "is",
    //   value: 'xxx',
    // },
    // {
    //   field: "field_303", ///name
    //   operator: "is not blank",
    // },
  ],
};

export const generalMigrate = async () => {
  try {
    // Request route

    // for (let index = 0; index < tables.length; index++) {
    //  const supplier = suppliers[index];

    // Add filters and pagination to route
    let url =
      baseUrl +
      "?filters=" +
      encodeURIComponent(JSON.stringify(filters)) +
      "&page=" +
      1 +
      "&rows_per_page=" +
      1000;

    //console.log(supplier, url);

    let res = await fetchRest(url, getOptions, 4);

    // console.log(res);

    let count = 0;
    if (res.records.length) {
      for (let index = 0; index < res.records.length; index++) {
        const record = res.records[index];

        if (true) {
          console.log("record", record);

          //TODO: INSERT TO POSTGRES the records

          // const createMany = await prisma.buyers.createMany({
          //   data: [
          //     {
          //       name: res[buyersEnum.client_company_name],
          //       email: res[buyersEnum.client_company_name],
          //     },
          //     {
          //       name: res[buyersEnum.client_company_name],
          //       email: res[buyersEnum.client_company_name],
          //     }, // Duplicate unique key!
          //     {
          //       name: res[buyersEnum.client_company_name],
          //       email: res[buyersEnum.client_company_name],
          //     },
          //   ],
          //   //skipDuplicates: true, // Skip 'Bobo'
          // });
        }
        count += 1;
      }
    }

    console.log("count of recors page 1  ", count);
    logger.info("count of recors page 1 " + count);

    if (res["total_pages"] > 1) {
      return; //TODO: DELETE RETURN AFTER TESTING
      for (let pages = 2; pages <= res["total_pages"]; pages++) {
        let url =
          baseUrl +
          "?filters=" +
          encodeURIComponent(JSON.stringify(filters)) +
          "&page=" +
          pages +
          "&rows_per_page=" +
          1000;

        res = await fetchRest(url, getOptions, 4);

        let count = 0;

        if (res.records.length) {
          for (let index = 0; index < res.records.length; index++) {
            const record = res.records[index];

            if (true) {
              console.log("record", record);
              //TODO: INSERT TO POSTGRES
            }

            count += 1;
          }
        }

        console.log("page: ", pages, "count ", count);
        logger.info("page: " + pages + "count " + count);
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //  }
  } catch (error) {
    console.log("catch error", error);
    logger.error(error);
  }
};
