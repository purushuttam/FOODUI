

export interface RestrauntMaster {
    restraunt_id: string;
    restraunt_name: string;
    latitute: string;
    longitute: string;
    address: string;
    city_code: string;
    state_code: string;
    country_code: string;
    mobile_no: string;
    email_id: string;
    open_time: Date;
    close_time: Date;
    is_active: boolean;
    created_on: string;
    created_by: string;
    updated_on: string;
    updated_by: string;
    restraunt_phots: RestrauntPhoto[];
}
export interface RestrauntPhoto {
  restraunt_photo_id: string;
  restraunt_id: string;
  image: string;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
export interface RestrauntCredential {
  restraunt_credential_id: string;
  restraunt_id: string;
  username: string;
  password: string;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
export interface RestrauntDailyLogin {
  restraunt_daily_login_id: string;
  restraunt_id: string;
  login_time: string;
  logout_time: string;
  total_orders: number;
  total_orders_value: number;
  total_completed_order: number;
  total_completed_orders_value: number;
  total_cancelled_orders: number;
  total_cancelled_orders_value: number;
  total_unconfirmed_orders: number;
  rating: string;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
export interface FoodRating {
  food_rating_id: string;
  restraunt_food_detail_id: string;
  customer_id: string;
  description: string;
  image: string;
  star: number;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
