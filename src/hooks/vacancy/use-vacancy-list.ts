import { useEffect, useState } from "react";
import { Company } from "../../models/company";
import { Technology } from "../../models/technology";
import { User } from "../../models/user";
import { Vacancy } from "../../models/vacancy";
import { GetVacancies } from "../../services/vacancy";

type VacancyData = Vacancy & {
  company: Company;
  advertiser: User;
  technologies: Technology[];
};

type VacanciesList = {
  vacancies: VacancyData[];
  page: number;
  limit: number;
  totalPage: number;
  totalCount: number;
};

type State = {
  vacanciesList: undefined | VacanciesList;
};

const INITIAL_STATE = {
  vacanciesList: undefined,
};

export const useVacancyList = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchVacancies = async () => {
    const { vacanciesList } = await GetVacancies({});

    if (!vacanciesList) {
      return "error";
    }

    setState({ vacanciesList });
  };

  useEffect(() => {
    fetchVacancies();
  }, []);

  return {
    vacanciesList: state.vacanciesList,
  };
};
