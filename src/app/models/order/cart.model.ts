export interface Cart {
  session_id: string
  food_details: Cartitem[]
  json_food_details: string
  total_amount:number
  is_active: boolean
  created_on: string
  created_by: string
  updated_on: string
  updated_by: string
  address:string
  mobile:string
}

export interface Cartitem {
  food_detail_id: string
  restraunt_id: string
  food_name: string
  food_type: string
  image: string
  price: number
  discount: string
  quantity: number
}
