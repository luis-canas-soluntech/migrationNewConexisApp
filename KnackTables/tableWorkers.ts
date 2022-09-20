import {
  address,
  connection,
  dateTime,
  email,
  file,
  name,
  phone,
  profile_keys,
  userRoles,
  yesNo,
} from "./types";

//* name of the table in knack followed by the field name in knack

export enum accountWorker {
  record_id = "id",
  account_status = "account_status",
  approval_status = "approval_status",
  profile_keys = "profile_keys_raw",
  worker_auto_increment = "field_658",
  name = "field_303_raw",
  email = "field_304_raw",
  password = "field_305_raw",
  status = "field_306",
  user_roles = "field_307_raw",
  supplier = "field_315_raw",
  created_on = "field_318",
  created_by = "field_320_raw",
  worker_status = "field_720",
  status_attachment = "field_1208_raw",
  mailing_addres = "field_1220_raw",
  work_phone = "field_1221_raw",
  home_phone = "field_1222_raw",
  cell_phone = "field_1223_raw",
  personal_email = "field_1224_raw",
  avaliable_date = "field_1225_raw",
  pay_rate = "field_1226_raw",
  salary = "field_1227_raw",
  years_experience = "field_1228_raw",
  rehire = "field_1229_raw",
  rating = "field_1230_raw",
  skill_category = "field_1231",
  primary_skills_separated_by_commas = "field_1232_raw",
  worker_summary = "field_1233_raw",
  resume_attachment = "field_1234_raw",
  resume_text = "field_1235_raw",
  buyer_atm_ss = "field_1236_raw",
  buyer_or_contrax_apliccant = "field_1237",
  passport_set = "field_1241_raw",
  created_from_new_worker_profile = "field_1342_raw",
  talent_pool = "field_1373_raw",
  enviromental_policy_reviewed = "field_1547_raw",
  enviromental_policy_attachment = "field_1546_raw",
  enter_email_or_password = "field_1588_raw",
  bussiness_unit = "field_1987_raw",
  import_notes = "field_2143_raw",
  pin_number = "field_2248_raw",
}

export interface KnackAccountWorker {
  record_id: string;
  account_status: string;
  approval_status: string;
  profile_keys: profile_keys;
  worker_auto_increment: number;
  name: name;
  email: email;
  password: string;
  status: string;
  user_roles: userRoles;
  supplier: connection;
  created_on: dateTime;
  created_by: connection;
  worker_status: string;
  status_attachment: file;
  mailing_addres: address;
  work_phone: phone;
  home_phone: phone;
  cell_phone: phone;
  personal_email: email;
  avaliable_date: dateTime;
  pay_rate: string;
  salary: string;
  years_experience: number;
  rehire: yesNo;
  rating: string;
  skill_category: string;
  primary_skills_separated_by_commas: string;
  worker_summary: string;
  resume_attachment: file;
  resume_text: string;
  buyer_atm_ss: connection;
  buyer_or_contrax_apliccant: string;
  passport_set: yesNo;
  created_from_new_worker_profile: yesNo;
  talent_pool: connection;
  enviromental_policy_reviewed: yesNo;
  enviromental_policy_attachment: file;
  enter_email_or_password: yesNo;
  bussiness_unit: connection;
  import_notes: string;
  pin_number: string;
}
