export interface RestrauntComplain {
  restraunt_complain_id: string;
  restraunt_id: string;
  customer_id: string;
  order_id: string;
  complain_description: string;
  rating: number;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
export interface RiderComplain {
  rider_complain_id: string;
  rider_id: string;
  customer_id: string;
  order_id: string;
  complain_description: string;
  rating: number;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}

