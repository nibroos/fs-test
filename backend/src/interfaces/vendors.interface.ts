export interface Vendor {
  id?: number;
  uuid: string;
  name: string;
  address?: string;
  unit_id?: number | string;
  created_at?: Date;
  updated_at?: Date;
}
