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

export enum rateCardsEnum {
  record_id = "id",

  rateCardID = "field_575_raw",
  role = "field_259_raw",
  titleAndDescription = "field_1059_raw",
  experience = "field_261",
  location = "field_262_raw",
  notToExceedRate = "field_263_raw",
  skillSets = "field_269_raw",
  buyer = "field_312_raw",
  rateCardAutoIncrement = "field_264_raw",
  createdBy = "field_595_raw",
  createdOn = "field_596_raw",
  updatedOn = "field_2302_raw",
}

export interface KnackRateCards {
  [rateCardsEnum.record_id]: string;
  [rateCardsEnum.rateCardID]: string;
  [rateCardsEnum.role]: string;
  [rateCardsEnum.titleAndDescription]: string;
  [rateCardsEnum.experience]: string;
  [rateCardsEnum.location]: string;
  [rateCardsEnum.notToExceedRate]: string;
  [rateCardsEnum.skillSets]: connection;
  [rateCardsEnum.buyer]: connection;
  [rateCardsEnum.rateCardAutoIncrement]: number;
  [rateCardsEnum.createdBy]: connection;
  [rateCardsEnum.createdOn]: dateTime;
  [rateCardsEnum.updatedOn]: dateTime;
}
