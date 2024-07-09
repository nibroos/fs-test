import { PaginationRequestType } from "../RequestType";

export type UserListFiltersType = {
  uuid?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
} & PaginationRequestType