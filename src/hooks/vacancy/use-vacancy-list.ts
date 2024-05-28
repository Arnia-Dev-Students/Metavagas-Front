import { useEffect, useState } from "react";
import { Company } from "../../models/company";
import { Technology } from "../../models/technology";
import { User } from "../../models/user";
import { Vacancy } from "../../models/vacancy";
import { GetVacancies } from "../../services/vacancy";
import { useUserContext } from "../user/use-user-context";

type VacanciesList = {
  vacancies: {
    vacancy: Vacancy & {
      company: Company;
      advertiser: User;
      technologies: Technology[];
    };
  }[];
  page: number;
  limit: number;
  totalPage: number;
  totalCount: number;
};

type State = {
  vacanciesList: undefined | VacanciesList
};

const INITIAL_STATE = {
  vacanciesList: undefined,
};

export const useVacancyList = () => {
  const { token } = useUserContext();
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchVacancies = async () => {
    if (!token) {
      return;
    }
    const { vacanciesList } = await GetVacancies({ token });

    if (!vacanciesList) {
      return "error";
    }

    setState({ vacanciesList });
  };

  useEffect(() => {
    fetchVacancies();
  }, [token]);

  return {
    vacanciesList: state.vacanciesList,
  };
};
