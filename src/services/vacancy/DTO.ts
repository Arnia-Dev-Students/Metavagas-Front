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
  export type IParams = {};
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

export namespace GetAllVacanciesPublicDTO {
  export type IParams = {};
  export type IResponse = {
    vacancy: Vacancy & {
      company: Company;
      advertiser: User;
      technologies: Technology[];
    };
  }[];
}
