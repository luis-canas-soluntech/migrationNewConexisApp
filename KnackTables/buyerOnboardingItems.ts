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
  client_company_name = "field_1_raw",
  buyer_id = "field_30_raw",
  contrax_account_manager = "field_85_raw",
}

export interface Knackbuyers {
  [buyersEnum.record_id]: string;
  [buyersEnum.client_company_name]: string;
}
