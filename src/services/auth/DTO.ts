/* eslint-disable @typescript-eslint/no-namespace */
import { User } from "../../models/user";

export namespace LoginDTO {
  export type IParams = {
    email: string;
    password: string;
  };
  export type IResponse = {
    token: string;
  };
}

type RoleEnum = "admin" | "advertiser" | "candidate";

export namespace RegisterDTO {
  export type IParams = {
    id: number;
    name: string;
    email: string;
    role: RoleEnum;
  };
  export type IResponse = User & {
    password: string;
  };
}

export namespace DEFINIR_DTO {
  export type IParams = {};
  export type IResponse = {};
}
