import { Company } from "../../models/company";
import { Vacancy } from "../../models/vacancy";

export namespace CreateCompanyDTO {
  export type IParams = {
    name: string;
    city: string;
    state: string;
    address: string;
    foundedAt: Date;
    description: string;
    token: string;
  };
  export type IResponse = Company;
}

export namespace UpdateCompanyDTO {
  export type IParams = {
    id: string;
    name?: string;
    city?: string;
    state?: string;
    address?: string;
    foundedAt?: Date;
    description?: string;
    token: string;
  };
  export type IResponse = Company;
}

export namespace GetCompanyDTO {
  export type IParams = {
    id: string;
    token: string;
  };
  export type IResponse = Company & {
    vacancies: Vacancy[];
  };
}

export namespace DeleteCompanyDTO {
  export type IParams = {
    id: string;
    token: string;
  };
  export type IResponse = {
    response: string;
  };
}

export namespace GetCompaniesDTO {
  export type IParams = { token: string };
  export type IResponse = {
    company: Company & { vacancies: Vacancy[] };
  }[];
}
