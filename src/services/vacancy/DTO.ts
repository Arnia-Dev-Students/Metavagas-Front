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

export namespace GetAllVacanciesDTO {
  export type IParams = {};
  export type IResponse = {
    vacancy: Vacancy & { company: Company, advertiser: User, technologies: Technology[] };
  }[];
}