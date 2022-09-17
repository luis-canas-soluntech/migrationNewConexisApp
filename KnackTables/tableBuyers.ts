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
  client_contact_name = "field_2_raw", //'John Clark'
  client_contact_email = "field_3_raw",
  client_contact_phone = "field_5_raw",
  client_mailings_address = "field_4_raw",
  client_agreement = "field_6_raw",
  client_agreement_2 = "field_1060_raw",
  client_agreement_3 = "field_1061_raw",
  client_agreement_4 = "field_1062_raw",
  contract_expiry = "field_8_raw", //'02/01/2020'
  client_coi = "field_7_raw",
  coi_expiry_date = "field_9_raw", //'02/01/2020'
  work_week_definition = "field_372",
  currency = "field_432",
  tax = "field_433",
  Vat_gsh_hsg_input = "field_616_raw",
  sales_tax_state_provintial_input = "field_617_raw",
  other_tax_input = "field_618_raw",
  vat_gst_hst = "field_434_raw",
  sales_tax_state_provintial = "field_471_raw",
  other_tax = "field_523_raw",
  payment_terms = "field_546",
  created_on = "field_587_raw",
  created_by = "field_588_raw",
  proof_of_inc = "field_619_raw",
  onboarding_activity_1 = "field_629_raw",
  onboarding_activity_2 = "field_630_raw",
  onboarding_activity_3 = "field_631_raw",
  onboarding_activity_4 = "field_632_raw",
  onboarding_activity_5 = "field_633_raw",
  onboarding_activity_6 = "field_740_raw",
  onboarding_activity_7 = "field_853_raw",
  onboarding_activity_8 = "field_854_raw",
  onboarding_activity_9 = "field_855_raw",
  onboarding_activity_10 = "field_856_raw",
  bypass_requisition_aproval_step_for_buyer = "field_744_raw",
  bypass_proposal_aproval_step_for_buyer = "field_1204_raw",
  remit_to_default = "field_821_raw",
  contrax_logo = "field_822_raw",
  legacy_name_for_invoicing = "field_848_raw",
  blank_update_field = "field_1074_raw",
  contrax_acccount_owner = "field_1199_raw",
  contrax_acccount_email = "field_1201_raw",
  account_payable_contact_name = "field_1216_raw",
  account_payable_contact_email = "field_1217_raw",
  acces_to_applicant_tracking_module = "field_1219_raw",
  require_final_contract_approval_for_buyer = "field_1416_raw",
  final_approval_status_cr = "field_1600_raw",
  bulk_create_contract_status_cr = "field_2054_raw",
  contracts_require_final_approval_by = "field_1418_raw",
  contracts_require_final_approval_by_email_cr = "field_1544_raw",
  accenture_cr = "field_1501_raw",
  enviromental_policy = "field_1534_raw",
  exhibit_j = "field_1535_raw",
  gl_code = "field_1548_raw",
  cost_centre = "field_1549_raw",
  custom_tax_rates = "field_1581_raw",
  custom_tax_rates_only_ascenture_as_919 = "field_1582_raw",
  overpay_allowed = "field_1710_raw",
  payment_terms_to_number_of_days = "field_1718_raw",
  self_serve = "field_1763_raw",
  tax_id = "field_1781_raw",
  vat_tax_id = "field_1913_raw",
  prov_state_tax_id = "field_1914_raw",
  other_tax_id = "field_1915_raw",
  work_week_definition_to_number_cr = "field_1948_raw",
  exclude_from_report = "field_2203_raw",
  is_using_amendments = "field_2223_raw",
  updated_on = "field_2260_raw",
}

export interface Knackbuyers {
  [buyersEnum.record_id]: string;
  [buyersEnum.client_company_name]: string;
  [buyersEnum.buyer_id]: number;
  [buyersEnum.contrax_account_manager]: name;
  [buyersEnum.client_contact_name]: name;
  [buyersEnum.client_contact_email]: email;
  [buyersEnum.client_contact_phone]: phone;
  [buyersEnum.client_mailings_address]: address;
  [buyersEnum.client_agreement]: file;
  [buyersEnum.client_agreement_2]: file;
  [buyersEnum.client_agreement_3]: file;
  [buyersEnum.client_agreement_4]: file;
  [buyersEnum.contract_expiry]: dateTime;
  [buyersEnum.client_coi]: file;
  [buyersEnum.coi_expiry_date]: dateTime;
  [buyersEnum.work_week_definition]: string;
  [buyersEnum.currency]: string;
  [buyersEnum.tax]: string;
  [buyersEnum.Vat_gsh_hsg_input]: number;
  [buyersEnum.sales_tax_state_provintial_input]: number;
  [buyersEnum.other_tax_input]: number;
  [buyersEnum.vat_gst_hst]: number;
  [buyersEnum.sales_tax_state_provintial]: number;
  [buyersEnum.other_tax]: number;
  [buyersEnum.payment_terms]: string;
  [buyersEnum.created_on]: dateTime;
  [buyersEnum.created_by]: connection;
  [buyersEnum.proof_of_inc]: file;
  [buyersEnum.onboarding_activity_1]: string;
  [buyersEnum.onboarding_activity_2]: string;
  [buyersEnum.onboarding_activity_3]: string;
  [buyersEnum.onboarding_activity_4]: string;
  [buyersEnum.onboarding_activity_5]: string;
  [buyersEnum.onboarding_activity_6]: string;
  [buyersEnum.onboarding_activity_7]: string;
  [buyersEnum.onboarding_activity_8]: string;
  [buyersEnum.onboarding_activity_9]: string;
  [buyersEnum.onboarding_activity_10]: string;
  [buyersEnum.bypass_requisition_aproval_step_for_buyer]: boolean;
  [buyersEnum.bypass_proposal_aproval_step_for_buyer]: boolean;
  [buyersEnum.remit_to_default]: string;
  [buyersEnum.contrax_logo]: string;
  [buyersEnum.legacy_name_for_invoicing]: string;
  [buyersEnum.blank_update_field]: string;
  [buyersEnum.contrax_acccount_owner]: connection;
  [buyersEnum.contrax_acccount_email]: email;
  [buyersEnum.account_payable_contact_name]: name;
  [buyersEnum.account_payable_contact_email]: email;
  [buyersEnum.acces_to_applicant_tracking_module]: yesNo;
  [buyersEnum.require_final_contract_approval_for_buyer]: yesNo;
  [buyersEnum.final_approval_status_cr]: string;
  [buyersEnum.bulk_create_contract_status_cr]: string;
  [buyersEnum.contracts_require_final_approval_by]: connection;
  [buyersEnum.contracts_require_final_approval_by_email_cr]: email;
  [buyersEnum.accenture_cr]: yesNo;
  [buyersEnum.enviromental_policy]: yesNo;
  [buyersEnum.exhibit_j]: file;
  [buyersEnum.gl_code]: string;
  [buyersEnum.cost_centre]: string;
  [buyersEnum.custom_tax_rates]: yesNo;
  [buyersEnum.custom_tax_rates_only_ascenture_as_919]: number;
  [buyersEnum.overpay_allowed]: yesNo;
  [buyersEnum.payment_terms_to_number_of_days]: number;
  [buyersEnum.self_serve]: yesNo;
  [buyersEnum.tax_id]: string;
  [buyersEnum.vat_tax_id]: string;
  [buyersEnum.prov_state_tax_id]: string;
  [buyersEnum.other_tax_id]: string;
  [buyersEnum.work_week_definition_to_number_cr]: number;
  [buyersEnum.exclude_from_report]: yesNo;
  [buyersEnum.is_using_amendments]: yesNo;
  [buyersEnum.updated_on]: dateTime;
}

//* response of the get to knack
//let res:Knackbuyers =//fetch()
//console.log(res[buyersEnum.client_company_name])

//*how to make the object to inset values into postgres from the knack response
// export const buyerTable = {
//   client_company_name : res[buyersEnum.client_company_name],
// }

//buyerTable[buyersEnum.client_company_name] = buyersEnum.client_company_name;
