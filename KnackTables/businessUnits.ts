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
// ID	autoincremental			field_1565
// creation_date	timestamp			field_1564
// created_by	user (MSP Administrator or Buyer Administrator)			field_1646
// last_time_updated	timestamp			field_2281
// buyer	buyer			field_1627
// business_title	Text			field_1563
// business_unit_number	Text			field_1557
// region	Text	see options here		field_1556
// first_name	Text			field_1560
// last_name	Text			field_1561
// primary_email	Text			field_1562
// primary_phone	Text			field_1558
// address	Text			field_1559
// location	Text			field_1555
// regional_director_name	Text			field_1575
// regional_director_email	Text			field_1577

export enum bussinessUnitsEnum {
  record_id = "id",
  creation_date = "field_1564_raw",
  created_by = "field_1646_raw",
  last_time_updated = "field_2281_raw",
  buyer = "field_1627_raw",
  business_title = "field_1563_raw",
  business_unit_number = "field_1557_raw",
  region = "field_1556",
  first_name = "field_1560_raw",
  last_name = "field_1561_raw",
  primary_email = "field_1562_raw",
  primary_phone = "field_1558_raw",
  address = "field_1559_raw",
  location = "field_1555_raw",
  regional_director_name = "field_1575_raw",
  regional_director_email = "field_1577_raw",
}

export interface KnackBussinessUnits {
  [bussinessUnitsEnum.record_id]: string;
  [bussinessUnitsEnum.creation_date]: string;
  [bussinessUnitsEnum.created_by]: connection;
  [bussinessUnitsEnum.last_time_updated]: dateTime;
  [bussinessUnitsEnum.buyer]: connection;
  [bussinessUnitsEnum.business_title]: string;
  [bussinessUnitsEnum.business_unit_number]: string;
  [bussinessUnitsEnum.region]: string;
  [bussinessUnitsEnum.first_name]: string;
  [bussinessUnitsEnum.last_name]: string;
  [bussinessUnitsEnum.primary_email]: email;
  [bussinessUnitsEnum.primary_phone]: phone;
  [bussinessUnitsEnum.address]: address;
  [bussinessUnitsEnum.location]: string;
  [bussinessUnitsEnum.regional_director_name]: name;
  [bussinessUnitsEnum.regional_director_email]: email;
}
