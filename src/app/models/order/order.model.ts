export interface Order {
  order_id: string;
  customer_id: string;
  restraunt_id: string;
  order_details: string;
  total_price: number;
  discount: string;
  delivery_address: string;
  notes: string;
  delivery_by: string;
  executive_id: string;
  order_status: number;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
export interface OrderCancellation {
  order_cancellation_id: string;
  order_id: string;
  cancellation_by: number;
  reason: string;
  cancellation_time: string;
  is_food_prepared: boolean;
  cancellation_duration: string;
}
export interface UpdateOrderStatus {
  order_id: string;
  order_status: number;
}
