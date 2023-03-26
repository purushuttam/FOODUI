export interface RazorPayRs {
  accept_partial: boolean
  amount: number
  amount_paid: number
  callback_method: string
  callback_url: string
  cancelled_at: number
  created_at: number
  currency: string
  customer: Customer
  description: string
  expire_by: number
  expired_at: number
  first_min_partial_amount: number
  id: string
  notes: Notes
  notify: Notify
  payments: any
  reference_id: string
  reminder_enable: boolean
  reminders: any[]
  short_url: string
  status: string
  updated_at: number
  upi_link: boolean
  user_id: string
}

export interface Customer {
  contact: string
  email: string
  name: string
}

export interface Notes {
  policy_name: string
}

export interface Notify {
  email: boolean
  sms: boolean
  whatsapp: boolean
}

export interface PaymentRzPay{
  razorpay_payment_id:string
  session_id:string
}
