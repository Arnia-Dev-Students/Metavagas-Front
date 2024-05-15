type RoleEnum = "admin" | "advertiser" | "candidate";

export interface User {
  id: number;
  name: string;
  email: string;
  role: RoleEnum;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
