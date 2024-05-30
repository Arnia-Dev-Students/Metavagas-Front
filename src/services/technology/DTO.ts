import { Technology } from "../../models/technology";

export namespace CreateTechnologyDTO {
  export type IParams = {
    tecName: string;
    creatorsName: string;
    token: string;
  };
  export type IResponse = Technology;
}

export namespace UpdateTechnologyDTO {
  export type IParams = {
    id: string;
    tecName?: string;
    creatorsName?: string;
    token: string;
  };
  export type IResponse = Technology;
}

export namespace GetTechnologyDTO {
  export type IParams = {
    id: string;
    token: string;
  };
  export type IResponse = Technology;
}

export namespace DeleteTechnologyDTO {
  export type IParams = {
    id: string;
    token: string;
  };
  export type IResponse = {
    response: string;
  };
}

export namespace GetTechnologiesDTO {
  export type IParams = {};
  export type IResponse = Technology[];
}
