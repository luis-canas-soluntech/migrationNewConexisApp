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
//record {
//   id: '62c659cf363428001fc725ab',
//   account_status: 'active',
//   approval_status: 'approved',
//   profile_keys: 'Worker',
//   profile_keys_raw: [ { id: 'profile_30', identifier: 'Worker' } ],
//   field_35: 'Barbara ',
//   field_35_raw: { first: 'Barbara', last: '', formatted_value: 'Barbara ' },
//   field_36: '',
//   field_37: '',
//   field_38: 'active',
//   field_38_raw: 'active',
//   field_39: '<span class="profile_30">Worker</span>',
//   field_39_raw: [ 'profile_30' ],
//   field_657: 'No',
//   field_657_raw: false,
//   field_1037: 'No',
//   field_1037_raw: false,
//   field_953: 'No',
//   field_953_raw: false,
//   field_1063: '',
//   field_1337: 'No',
//   field_1337_raw: false,
//   field_1715: '',
//   field_2056: 'No',
//   field_2056_raw: false,
//   field_2057: '',
//   field_2071: 'No',
//   field_2071_raw: false,
//   field_2075: '07/06/2022 11:58pm',
//   field_2075_raw: {
//     date: '07/06/2022',
//     date_formatted: '07/06/2022',
//     hours: '11',
//     minutes: '58',
//     am_pm: 'PM',
//     unix_timestamp: 1657151880000,
//     iso_timestamp: '2022-07-06T23:58:00.000Z',
//     timestamp: '07/06/2022 11:58 pm',
//     time: 1438
//   },
//   field_2076: 117126,
//   field_2076_raw: 117126,
//   field_2094: ''
// }
export enum accountEnum {
  record_id = "id",
  account_name = "field_35_raw",
  account_email = "field_36",
}

export interface KnackAccount {
  // [buyersEnum.record_id]: string;
  // [buyersEnum.supplier_company_name]: string;
  // [buyersEnum.buyers]: connection;
  // [buyersEnum.supplier_status]: string;
  // [buyersEnum.buyer_relationship_contact_name]: name;
  // [buyersEnum.date_supplier_assigned_by_client]: dateTime;
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

//* name of the table in knack followed by the field name in knack

export enum accountMspAdmin {
  record_id = "id",
  account_status = "account_status",
  approval_status = "approval_status",
  profile_keys_raw = "profile_keys_raw",
  name = "field_579_raw",
  email = "field_580_raw",
  password = "field_581_raw",
  status = "field_582",
  user_roles = "field_583_raw",
  created_by = "field_614_raw",
  creoated_on = "field_584_raw",
}

export interface KnackMspAdmin {
  [accountMspAdmin.record_id]: string;
  [accountMspAdmin.account_status]: string;
  [accountMspAdmin.approval_status]: string;
  [accountMspAdmin.profile_keys_raw]: profile_keys;
  [accountMspAdmin.name]: name;
  [accountMspAdmin.email]: email;
  [accountMspAdmin.password]: string;
  [accountMspAdmin.status]: string;
  [accountMspAdmin.user_roles]: userRoles;
  [accountMspAdmin.created_by]: connection;
  [accountMspAdmin.creoated_on]: dateTime;
}

//* name of the table in knack followed by the field name in knack
export enum accountBuyerAdmin {
  record_id = "id",
  account_status = "account_status",
  approval_status = "approval_status",
  profile_keys_raw = "profile_keys_raw",
  name = "field_198_raw",
  buyer = "field_439_raw",
  email = "field_199_raw",
  password = "field_200_raw",
  status = "field_201",
  user_roles = "field_202_raw",
  created_on = "field_589_raw",
  created_by = "field_590_raw",
  update_account_buyer = "field_1528_raw",
}

export interface KnackMspAdmin {
  [accountBuyerAdmin.record_id]: string;
  [accountBuyerAdmin.account_status]: string;
  [accountBuyerAdmin.approval_status]: string;
  [accountBuyerAdmin.profile_keys_raw]: profile_keys;
  [accountBuyerAdmin.name]: name;
  [accountBuyerAdmin.buyer]: connection;
  [accountBuyerAdmin.email]: email;
  [accountBuyerAdmin.password]: string;
  [accountBuyerAdmin.status]: string;
  [accountBuyerAdmin.user_roles]: userRoles;
  [accountBuyerAdmin.created_on]: dateTime;
  [accountBuyerAdmin.created_by]: connection;
  [accountBuyerAdmin.update_account_buyer]: connection;
}

//* name of the table in knack followed by the field name in knack

export enum accountRequester {
  record_id = "id",
  account_status = "account_status",
  approval_status = "approval_status",
  profile_keys_raw = "profile_keys_raw",
  name = "field_178_raw",
  email = "field_179_raw",
  password = "field_180_raw",
  status = "field_181",
  user_roles = "field_182_raw",
  buyer = "field_310_raw",
  created_on = "field_562_raw",
  created_by = "field_563_raw",
  assign_additional_user_roles = "field_564_raw",
  buyer_admin = "field_665_raw",
  approver = "field_665_raw",
  view_only_user_records = "field_1065_raw",
  add_approver_role = "field_2018_raw",
  add_finance_role = "field_2019_raw",
  add_buyer_admin_role = "field_2020_raw",
}

export interface KnackAccountResquester {
  [accountRequester.record_id]: string;
  [accountRequester.account_status]: string;
  [accountRequester.approval_status]: string;
  [accountRequester.profile_keys_raw]: profile_keys;
  [accountRequester.name]: name;
  [accountRequester.email]: email;
  [accountRequester.password]: string;
  [accountRequester.status]: string;
  [accountRequester.user_roles]: userRoles;
  [accountRequester.buyer]: connection;
  [accountRequester.created_on]: dateTime;
  [accountRequester.created_by]: connection;
  [accountRequester.assign_additional_user_roles]: string;
  [accountRequester.buyer_admin]: connection;
  [accountRequester.approver]: connection;
  [accountRequester.view_only_user_records]: yesNo;
  [accountRequester.add_approver_role]: yesNo;
  [accountRequester.add_finance_role]: yesNo;
  [accountRequester.add_buyer_admin_role]: yesNo;
}

//* name of the table in knack followed by the field name in knack
export enum accountApprover {
  record_id = "id",
  account_status = "account_status",
  approval_status = "approval_status",
  profile_keys_raw = "profile_keys_raw",
  name = "field_183_raw",
  email = "field_184_raw",
  password = "field_185_raw",
  status = "field_186",
  user_roles = "field_187_raw",
  buyer = "field_311_raw",
  created_by = "field_437_raw",
  created_on = "field_438_raw",
  assign_additional_user_roles = "field_566",
  buyer_admin = "field_663_raw",
  add_requester_roles = "field_2015_raw",
  add_finance_role = "field_2016_raw",
  add_buyer_admin_role = "field_2017_raw",
}

export interface KnackAccountApprover {
  [accountApprover.record_id]: string;
  [accountApprover.account_status]: string;
  [accountApprover.approval_status]: string;
  [accountApprover.profile_keys_raw]: profile_keys;
  [accountApprover.name]: name;
  [accountApprover.email]: email;
  [accountApprover.password]: string;
  [accountApprover.status]: string;
  [accountApprover.user_roles]: userRoles;
  [accountApprover.buyer]: connection;
  [accountApprover.created_on]: dateTime;
  [accountApprover.created_by]: connection;
  [accountApprover.assign_additional_user_roles]: string;
  [accountApprover.buyer_admin]: connection;
  [accountApprover.add_requester_roles]: yesNo;
  [accountApprover.add_finance_role]: yesNo;
  [accountApprover.add_buyer_admin_role]: yesNo;
}

//* name of the table in knack followed by the field name in knack

export enum accountProposer {
  record_id = "id",
  account_status = "account_status",
  approval_status = "approval_status",
  profile_keys_raw = "profile_keys_raw",
  name = "field_193_raw",
  email = "field_194_raw",
  password = "field_195_raw",
  status = "field_196",
  user_roles = "field_197_raw",
  permissioned_buyer = "field_1392_raw",
  supplier = "field_314_raw",
  created_on = "field_577_raw",
  created_by = "field_578_raw",
  assign_additional_user_roles = "field_593",
  supplier_admin = "field_669_raw",
  supplier_finance = "field_671_raw",
  view_only_user_proposals = "field_1209_raw",
  permission_access_multiple_buyers = "field_1401_raw",
  buyer = "field_1994_raw",
}

export interface KnackAccountProposer {
  [accountProposer.record_id]: string;
  [accountProposer.account_status]: string;
  [accountProposer.approval_status]: string;
  [accountProposer.profile_keys_raw]: profile_keys;
  [accountProposer.name]: name;
  [accountProposer.email]: email;
  [accountProposer.password]: string;
  [accountProposer.status]: string;
  [accountProposer.user_roles]: userRoles;
  [accountProposer.permissioned_buyer]: connection;
  [accountProposer.supplier]: connection;
  [accountProposer.created_on]: dateTime;
  [accountProposer.created_by]: connection;
  [accountProposer.assign_additional_user_roles]: string;
  [accountProposer.supplier_admin]: connection;
  [accountProposer.supplier_finance]: connection;
  [accountProposer.view_only_user_proposals]: yesNo;
  [accountProposer.permission_access_multiple_buyers]: yesNo;
  [accountProposer.buyer]: connection;
}
