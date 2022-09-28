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

export enum skillSetEnum {
  record_id = "id",

  skillSet = "field_99_raw",

  created_on = "field_2253_raw",
  updated_on = "field_2267_raw",
}

export interface KnackSkillSet {
  [skillSetEnum.record_id]: string;
  [skillSetEnum.skillSet]: string;
  [skillSetEnum.created_on]: dateTime;
  [skillSetEnum.updated_on]: dateTime;
}
