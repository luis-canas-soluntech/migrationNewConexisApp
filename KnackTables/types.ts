//types of name , address, xxx etc..s

export type file =
  | {
      id: string;
      application_id: string;
      s3: boolean;
      type: string;
      filename: string;
      url: string; //knack url
      thumb_url: string;
      size: number;
      field_key: string;
    }
  | "";

export type name = { first: string; last: string };

export type address = {
  street: string;
  street2: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
};

export type email = { email: string };

export type phone = {
  formatted: string; //(416) 483-2200
  full: string; //'4164832200'
  number: string; // "4832200";
  area: string; //420
};

export type dateTime = {
  date: string; //'02/01/2020',
  date_formatted: string; //'02/01/2020',
  hours: string; //'12',
  minutes: string; //'00',
  am_pm: string; // 'AM',
  unix_timestamp: number; // 1580515200000,
  iso_timestamp: string; //'2020-02-01T00:00:00.000Z',
  timestamp: string; //'02/01/2020 12:00 am',
  time: number; // 720
};

export type yesNo = boolean;

export type connection = {
  id: string; //"59107c47f34acf2f78e59cb9";
  identifier: string; //"Kieran Storton";
}[];

export type userRoles = string[];

export type profile_keys = { id: string; identifier: string };
[];
