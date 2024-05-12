import { User } from "../../models/user";

export namespace MeDTO {
  export type IParams = {
    token: string;
  };
  export type IResponse = User;
}
