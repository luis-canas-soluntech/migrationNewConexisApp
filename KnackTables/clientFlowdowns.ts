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

export enum clienFlowdownsEnum {
  record_id = "id",

  client_name = "field_21_raw",
  template_flowdown = "field_737_raw",
  signed_flowdown = "field_22_raw",
  date_signed = "field_23_raw",
  buyer = "field_736_raw",
  project_name = "field_1757_raw",
  attachment_1 = "field_1832_raw",
  attachment_2 = "field_1833_raw",
  created_on = "field_2259_raw",
  updated_on = "field_2262_raw",
}

export interface KnackclientFlowdowns {
  [clienFlowdownsEnum.record_id]: string;
  [clienFlowdownsEnum.client_name]: string;
  [clienFlowdownsEnum.template_flowdown]: file;
  [clienFlowdownsEnum.signed_flowdown]: file;
  [clienFlowdownsEnum.date_signed]: dateTime;
  [clienFlowdownsEnum.buyer]: connection;
  [clienFlowdownsEnum.project_name]: string;
  [clienFlowdownsEnum.attachment_1]: file;
  [clienFlowdownsEnum.attachment_2]: file;
  [clienFlowdownsEnum.created_on]: dateTime;
  [clienFlowdownsEnum.updated_on]: dateTime;
}
