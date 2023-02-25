export interface RestrauntFoodDetails {
  restraunt_food_detail_id: string;
  reastraunt_id: string;
  food_category_id: string;
  food_name: string;
  description: string;
  image: string;
  price: string;
  discount: string;
  is_active: boolean;
  created_on: string;
  created_by: string;
  updated_on: string;
  updated_by: string;
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
export interface RestrauntRating {
  restraunt_rating_id: string;
  restraunt_id: string;
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
