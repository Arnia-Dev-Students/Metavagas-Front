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
  fetchVacancies: () => void;
};

const INITIAL_STATE = {
  vacanciesList: undefined,
  fetchVacancies: () => {},
};

type AxiosProps = {
  vacancyRole?: string;
  technologyIds?: number[];
  vacancyTypes?: string[];
  wageMin?: number;
  wageMax?: number;
  location?: string;
};

type Props = {
  vacancyRole?: string;
  location?: string;
};

export const useVacancyList = ({ location, vacancyRole}: Props) => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchVacancies = async (props: AxiosProps) => {
    const { vacanciesList } = await GetVacancies(props);

    if (!vacanciesList) {
      return "error";
    }

    setState((prevState) => ({
      ...prevState,
      vacanciesList: vacanciesList,
    }));
  };

  useEffect(() => {
    fetchVacancies({location, vacancyRole});
  }, []);

  return {
    vacanciesList: state.vacanciesList,
    fetchVacancies: fetchVacancies,
  };
};