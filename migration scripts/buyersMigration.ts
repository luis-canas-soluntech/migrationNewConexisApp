"use strict";

//file to migrate the buyers table from knack to postgres

import { objectTables } from "../KnackTables/objectIDs";
import { buyersEnum } from "../KnackTables/tableBuyers";
import prisma from "../prismaClient";
import fetchRest from "../util/fetchRest";
import logger from "../util/winstonLogger";

const baseUrl = `https://api.knack.com/v1/objects/${objectTables.Buyers}/records`;

const getOptions = {
  method: "GET",
  headers: {
    "X-Knack-Application-ID": "583da0c358256f6a2ee5887d",
    "X-Knack-REST-API-Key": "7c433960-b653-11e6-85b4-a3aef326e6fd",
  },
  // body: JSON.stringify(data)
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

export const buyersMigrate = async () => {
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
