import { PaginationRequestType } from "../RequestType";

export type VendorListFiltersType = {
  uuid?: string;
  name?: string;
  address?: string;
  unit_id?: string;
} & PaginationRequestType