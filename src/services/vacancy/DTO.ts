import { Company } from "../../models/company";
import { Technology } from "../../models/technology";
import { User } from "../../models/user";
import { Vacancy } from "../../models/vacancy";

export namespace CreateVacancyDTO {
  export type IParams = {
    companyId: number;
    vacancyRole: string;
    wage: number;
    location: string;
    vacancyType: string;
    vacancyDescription: string;
    level: string;
    token: string;
  };
  export type IResponse = Vacancy;
}

type VacancyData = Vacancy & {
  company: Company;
  advertiser: User;
  technologies: Technology[];
};

export namespace GetAllVacanciesDTO {
  export type IParams = {
    vacancyRole?: string
    technologyIds?: number[]
    vacancyTypes?: string[]
    wageMin?: number,
    wageMax?: number,
    location?: string,
    page?: number,
    limit?: number
  };
  export type IResponse = {
    vacancies: VacancyData[];
    page: number;
    limit: number;
    totalPage: number;
    totalCount: number;
  };
}

export namespace GetVacancyDTO {
  export type IParams = {
    id: string;
    token: string;
  };
  export type IResponse = Vacancy;
}

export namespace UpdateVacancyDTO {
  export type IParams = {
    id: string;
    companyId: number;
    vacancyRole: string;
    wage?: number;
    location?: string;
    vacancyType?: string;
    vacancyDescription?: string;
    level?: string;
    token: string;
  };
  export type IResponse = Vacancy;
}

export namespace DeleteVacancyDTO {
  export type IParams = {
    id: string;
    token: string;
  };
  export type IResponse = {
    response: string;
  };
}
