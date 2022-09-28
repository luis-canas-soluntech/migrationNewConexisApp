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

//* multiple choise fileds should be selected from filed without raw, because sometimes raw brings weird random values

export enum countriesEnum {
  record_id = "id",
  creation_date = "field_2255_raw",
  //created_by = "field_1646_raw",
  last_time_updated = "field_2274_raw",
  country_name = "field_701_raw",
}

export interface Knackcountries {
  [countriesEnum.record_id]: string;
  [countriesEnum.creation_date]: dateTime;
  // [countriesEnum.created_by]: connection;
  [countriesEnum.last_time_updated]: dateTime;
  [countriesEnum.country_name]: string;
}

export enum stateProvincesEnum {
  record_id = "id",
  creation_date = "field_2255_raw",
  //created_by = "field_1646_raw",
  last_time_updated = "field_2274_raw",
  state_province_name = "field_702_raw",
  abreviation = "field_703_raw",
  country = "field_708_raw",
  state_province_tax = "field_704_raw",
}

export interface KnackstateProvinces {
  [stateProvincesEnum.record_id]: string;
  [stateProvincesEnum.creation_date]: dateTime;
  // [stateProvincesEnum.created_by]: connection;
  [stateProvincesEnum.last_time_updated]: dateTime;
  [stateProvincesEnum.state_province_name]: string;
  [stateProvincesEnum.abreviation]: string;
  [stateProvincesEnum.country]: connection;
  [stateProvincesEnum.state_province_tax]: number;
}
