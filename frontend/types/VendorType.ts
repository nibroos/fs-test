export type VendorType = {
  id?: number | null;
  uuid?: string | null;
  name: string;
  address?: string;
  unit_id?: number | string | null;
  created_at?: Date;
  updated_at?: Date;
}