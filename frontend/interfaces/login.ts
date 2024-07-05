export interface Login {
  status: null;
  message: string | null;
  access_token: string | null;
  username: string | null;
  role: Role;
  permission: [] | permission;
  // roles : Role[];
}

export interface Role {
  id: number | null;
  name: string | null;
}

export interface permission {
  group_name: string | null;
  name: string | null;
}
