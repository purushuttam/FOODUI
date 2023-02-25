export interface CustomerMaster {
  customer_id: string;
  customer_name: string;
  email: string;
  mobile: string;
  is_signup: boolean;
  password: string;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
export interface CustomerAddress {
  customer_address_id: string;
  customer_id: string;
  address_type: number;
  address: string;
  city_code: string;
  state_code: string;
  country_code: string;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
