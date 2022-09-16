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
export enum buyersEnum {
  record_id = "id",
  supplier_company_name = "field_10_raw",
  buyers = "field_20_raw",
  supplier_status = "field_86",
  buyer_relationship_contact_name = "field_12_raw",
  date_supplier_assigned_by_client = "field_24_raw",
}

export interface Knackbuyers {
  [buyersEnum.record_id]: string;
  [buyersEnum.supplier_company_name]: string;
  [buyersEnum.buyers]: connection;
  [buyersEnum.supplier_status]: string;
  [buyersEnum.buyer_relationship_contact_name]: name;
  [buyersEnum.date_supplier_assigned_by_client]: dateTime;
}

//* response of the get to knack
// let res:Knackbuyers ={
//   field_1: 4
// }

//*how to make the object to inset values into postgres from the knack response
// export const buyerTable = {
//   client_company_name : res[buyersEnum.client_company_name],
// }

//buyerTable[buyersEnum.client_company_name] = buyersEnum.client_company_name;
