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

export enum supplierFlowdownsEnum {
  record_id = "id",
  client_name = "field_27_raw",
  date_flowdown_signed = "field_28_raw",
  signed_flowdown = "field_29_raw",
  supplier = "field_33_raw",
  status = "field_125",
  buyer = "field_844_raw",
  client_flowdown = "field_843_raw",
  project_name = "field_1758_raw",
  client_name_project_name = "field_1760_raw",
  attachment_1 = "field_1830_raw",
  attachment_2 = "field_1831_raw",
  created_on = "field_2252_raw",
  updated_on = "field_2263_raw",
}

export interface KnacksupplierFlowdowns {
  [supplierFlowdownsEnum.record_id]: string;
  [supplierFlowdownsEnum.client_name]: string;
  [supplierFlowdownsEnum.date_flowdown_signed]: dateTime;
  [supplierFlowdownsEnum.signed_flowdown]: file;
  [supplierFlowdownsEnum.supplier]: connection;
  [supplierFlowdownsEnum.status]: string;
  [supplierFlowdownsEnum.buyer]: connection;
  [supplierFlowdownsEnum.client_flowdown]: connection;
  [supplierFlowdownsEnum.project_name]: string;
  [supplierFlowdownsEnum.client_name_project_name]: string;
  [supplierFlowdownsEnum.attachment_1]: file;
  [supplierFlowdownsEnum.attachment_2]: file;
  [supplierFlowdownsEnum.created_on]: dateTime;
  [supplierFlowdownsEnum.updated_on]: dateTime;
}
