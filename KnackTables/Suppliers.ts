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

export enum supplierEnum {
  record_id = "id",
  supplier_company_name = "field_10_raw",
  buyers = "field_20_raw",
  supplier_status = "field_86",
  buyer_relationship_contact_name = "field_12_raw",
  date_supplier_asigned_by_client = "field_24_raw",
  date_supplier_signed_agreement = "field_25_raw",
  suppplier_mailing_address = "field_11_raw",
  supplier_contact_name = "field_13_raw",
  supplier_contact_email = "field_14_raw",
  supplier_contact_phone = "field_15_raw",
  comments = "field_26_raw",
  inmigration_workplace_compliance = "field_885_raw",
  supplier_agreement = "field_16_raw",
  ammendment_1 = "field_831_raw",
  ammendment_2 = "field_832_raw",
  ammendment_3 = "field_833_raw",
  ammendment_4 = "field_834_raw",
  ammendment_5 = "field_835_raw",
  redline_backup_1 = "field_836_raw",
  redline_backup_2 = "field_837_raw",
  redline_backup_3 = "field_838_raw",
  redline_backup_4 = "field_839_raw",
  redline_backup_5 = "field_840_raw",
  sva_amendment = "field_739_raw",
  contract_concessions = "field_34",
  supplier_agreement_expiry = "field_19_raw",
  supplier_coi = "field_17_raw",
  coi_expiry_date = "field_18_raw",
  supplier_id = "field_31_raw",
  rating = "field_173_raw",
  geographic_coverage = "field_174",
  work_categories_covered = "field_175",
  dunn_and_bradstreet_number = "field_176_raw",
  supplier_information = "field_177_raw",
  created_on = "field_591_raw",
  created_by = "field_592_raw",
  tax_id = "field_628_raw",
  proof_of_inc = "field_689_raw",
  non_resident_supplier = "field_690",
  diversity_certifications = "field_738",
  eft_ach_info = "field_741_raw",
  buyer_contact_name = "field_826_raw",
  buyer_contact_email = "field_827_raw",
  current_eft_ach = "field_828_raw",
  past_eft_ach = "field_829_raw",
  past_eft_ach_changed_date = "field_830_raw",
  legal_name_for_invoicing = "field_847_raw",
  background_check_sign_up = "field_886_raw",
  application_rating = "field_887_raw",
  application_status = "field_888_raw",
  date_appilcation_filled_out = "field_889_raw",
  do_you_aprove_or_reject_this_application = "field_890",
  if_no_buyers_select_await_buyer = "field_891_raw",
  rejection_reason = "field_892_raw",
  manual_admin_name = "field_893_raw",
  manual_admin_email = "field_894_raw",
  random_pw = "field_895_raw",
  how_would_you_like_to_create_supplier_first_admin_user = "field_898_raw",
  internal_comments = "field_899_raw",
  welcome_note = "field_900_raw",
  application_review_by = "field_901_raw",
  application_review_date = "field_902_raw",
  admin_contact_email_final = "field_903_raw",
  admin_contact_name_final = "field_904_raw",
  it_number_placements_made_in_last_three_months = "field_906",
  administrative_number_of_placements_made_in_las_three_months = "field_905",
  light_industrial_number_of_placements_made_in_last_three_months = "field_907",
  engineering_number_of_placements_made_in_last_three_months = "field_908",
  finantial_number_of_placements_made_in_last_three_months = "field_909",
  sales_marketing_number_of_placements_made_in_last_three_months = "field_910",
  other_number_of_placements_made_in_last_three_months = "field_911",
  ontario_number_of_placements_made_in_last_three_months = "field_912",
  quebec_number_of_placements_made_in_last_three_months = "field_913",
  maritimes_number_of_placements_made_in_last_three_months = "field_914",
  manitoba_number_of_placements_made_in_last_three_months = "field_915",
  saskatchewan_number_of_placements_made_in_last_three_months = "field_916",
  alberta_number_of_placements_made_in_last_three_months = "field_917",
  bc_number_of_placements_made_in_last_three_months = "field_918",
  yukon_number_of_placements_made_in_last_three_months = "field_919",
  nwt_number_of_placements_made_in_last_three_months = "field_920",
  nunuvak_number_of_placements_made_in_last_three_months = "field_921",
  canada_number_of_placements_made_in_last_three_months = "field_922",
  us_north_east_number_of_placements_made_in_last_three_months = "field_923",
  us_south_east_number_of_placements_made_in_last_three_months = "field_924",
  us_midwest_number_of_placements_made_in_last_three_months = "field_925",
  us_south_west_number_of_placements_made_in_last_three_months = "field_926",
  industries = "field_927",
  communications_and_high_tech_number_of_placements_made_in_last_three_months = "field_928",
  finantial_services_number_of_placements_made_in_last_three_months = "field_929",
  consumer_products_number_of_placements_made_in_last_three_months = "field_930",
  resourecs_and_energy_number_of_placements_made_in_last_three_months = "field_931",
  public_sector_number_of_placements_made_in_last_three_months = "field_932",
  health_care_number_of_placements_made_in_last_three_months = "field_933",
  top_client_1 = "field_934_raw",
  top_client_2 = "field_935_raw",
  top_client_3 = "field_936_raw",
  top_client_1_number_of_placements_made_in_last_three_months = "field_937",
  top_client_2_number_of_placements_made_in_last_three_months = "field_938",
  top_client_3_number_of_placements_made_in_last_three_months = "field_939",
  send_rejection_email = "field_946_raw",
  offerings = "field_952",
  application_attachment = "field_1207_raw",
  accounts_recievable_contact_name = "field_1214_raw",
  accounts_recievable_contact_email = "field_1215_raw",
  supplier_contact_email_2 = "field_1412_raw",
  supplier_contact_email_3 = "field_1413_raw",
  inmigration_and_worksite_compliance = "field_1538_raw",
  supplier_admins_to_recieve_new_req_email = "field_1595_raw",
  rebate_1_percent = "field_1815_raw",
  rebate_2_percent = "field_1816_raw",
  rebate_3_percent = "field_1817_raw",
  rebate_1_start_price = "field_1819_raw",
  rebate_2_start_price = "field_1820_raw",
  rebate_3_start_price = "field_1821_raw",
  payroll_days_after_week_end = "field_1901_raw",
  buyer_selected_during_review = "field_1991_raw",
  supplier_code = "field_2249_raw",
  updated_on = "field_2261_raw",
}

export interface KnackSupplier {
  id: string;
  field_10_raw: string;
  field_20_raw: connection;
  field_86: string;
  field_12_raw: name;
  field_24_raw: dateTime;
  field_25_raw: dateTime;
  field_11_raw: address;
  field_13_raw: name;
  field_14_raw: email;
  field_15_raw: phone;
  field_26_raw: string;
  field_885_raw: file;
  field_16_raw: file;
  field_831_raw: file;
  field_832_raw: file;
  field_833_raw: file;
  field_834_raw: file;
  field_835_raw: file;
  field_836_raw: file;
  field_837_raw: file;
  field_838_raw: file;
  field_839_raw: file;
  field_840_raw: file;
  field_739_raw: file;
  field_34: string;
  field_19_raw: dateTime;
  field_17_raw: file;
  field_18_raw: dateTime;
  field_31_raw: number;
  field_173_raw: number;
  field_174: string;
  field_175: string;
  field_176_raw: string;
  field_177_raw: file;
  field_591_raw: dateTime;
  field_592_raw: connection;
  field_628_raw: string;
  field_689_raw: file;
  field_690: string;
  field_738: string;
  field_741_raw: file;
  field_826_raw: name;
  field_827_raw: email;
  field_828_raw: file;
  field_829_raw: file;
  field_830_raw: dateTime;
  field_847_raw: string;
  field_886_raw: yesNo;
  field_887_raw: number;
  field_888_raw: string;
  field_889_raw: dateTime;
  field_890: string;
  field_891_raw: yesNo;
  field_892_raw: string;
  field_893_raw: name;
  field_894_raw: email;
  field_895_raw: number;
  field_898_raw: string;
  field_899_raw: string;
  field_900_raw: string;
  field_901_raw: connection;
  field_902_raw: dateTime;
  field_903_raw: email;
  field_904_raw: name;
  field_906: string; //maybe number
  field_905: string; //maybe number
  field_907: string; //maybe number
  field_908: string; //maybe number
  field_909: string; //maybe number
  field_910: string; //maybe number
  field_911: string; //maybe number
  field_912: string; //maybe number
  field_913: string; //maybe number
  field_914: string; //maybe number
  field_915: string; //maybe number
  field_916: string; //maybe number
  field_917: string; //maybe number
  field_918: string; //maybe number
  field_919: string; //maybe number
  field_920: string; //maybe number
  field_921: string; //maybe number
  field_922: string; //maybe number
  field_923: string; //maybe number
  field_924: string; //maybe number
  field_925: string; //maybe number
  field_926: string; //maybe number
  field_927: string;
  field_928: string; //maybe number
  field_929: string; //maybe number
  field_930: string; //maybe number
  field_931: string; //maybe number
  field_932: string; //maybe number
  field_933: string; //maybe number
  field_934_raw: connection;
  field_935_raw: connection;
  field_936_raw: connection;
  field_937: string; //maybe number
  field_938: string; //maybe number
  field_939: string; //maybe number
  field_946_raw: yesNo;
  field_952: string;
  field_1207_raw: file;
  field_1214_raw: name;
  field_1215_raw: email;
  field_1412_raw: email;
  field_1413_raw: email;
  field_1538_raw: yesNo;
  field_1595_raw: connection;
  field_1815_raw: number;
  field_1816_raw: number;
  field_1817_raw: number;
  field_1819_raw: string;
  field_1820_raw: string;
  field_1821_raw: string;
  field_1901_raw: number;
  field_1991_raw: connection;
  field_2249_raw: string;
  field_2261_raw: dateTime;
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
