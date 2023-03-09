import { MenuItem } from "primeng/api";

export interface FoodCategory {
  food_category_id: string;
  food_category_name: string;
  description: string;
  location: string;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
}
export interface FoodDetails {
  food_detail_id: string;
  food_category_id: string;
  reastraunt_id: string;
  food_name: string;
  description: string;
  image: string;
  price: string;
  discount: string;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string | null;
}
