import {
  address,
  connection,
  dateTime,
  email,
  file,
  name,
  phone,
  yesNo,
} from "./types";

//* multiple create an enum that has the values of the fields in the comment above, in the same order

export enum costCenterEnum {
  record_id = "id",

  costCenterNumber = "field_252_raw",
  activeOrInactive = "field_253",
  buyer = "field_254_raw",
  buyerCostCenter = "field_255_raw",
  blankUpdateField = "field_256_raw",
  created_on = "field_1690_raw",
  updated_on = "field_2267_raw",
}

export interface KnackCostCenter {
  [costCenterEnum.record_id]: string;
  [costCenterEnum.costCenterNumber]: string;
  [costCenterEnum.activeOrInactive]: string;
  [costCenterEnum.buyer]: connection;
  [costCenterEnum.buyerCostCenter]: string;
  [costCenterEnum.blankUpdateField]: string;
  [costCenterEnum.created_on]: dateTime;
  [costCenterEnum.updated_on]: dateTime;
}
