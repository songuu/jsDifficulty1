export interface ManagerProps {
  account: string;
  avatar_url: string;
  caller: number;
  created_at: string;
  crm_role: string;
  customer_capacity: number;
  customer_used: number;
  deleted_at?: string;
  group: string;
  id: number;
  lead_capacity: number;
  lead_used: number;
  leader_id: number;
  name: string;
  password: string;
  phone: string;
  region: string;
  role: number;
  section: number;
  sub_group: string;
  token: string;
  type: number;
  updated_at?: string;
  updater_id?: number;
}

export interface UserInfo {
  Account: string;
  CrmRole: string;
  CustomerCap: number;
  CustomerUsed: number;
  LeadCap: number;
  LeadUsed: number;
  Name: string;
}
