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

export enum glCodesEnum {
  record_id = "id",
  gl_code = "field_1628_raw",
  buyer = "field_1635_raw",
  created_by = "field_1633_raw",

  createdOn = "field_1634_raw",
  updatedOn = "field_2282_raw",
}

export interface KnackGlCodes {
  [glCodesEnum.record_id]: string;
  [glCodesEnum.gl_code]: string;
  [glCodesEnum.buyer]: connection;
  [glCodesEnum.created_by]: connection;

  [glCodesEnum.createdOn]: dateTime;
  [glCodesEnum.updatedOn]: dateTime;
}
