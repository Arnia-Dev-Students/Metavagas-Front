import { useEffect, useState } from "react";
import { Company } from "../../models/company";
import { Technology } from "../../models/technology";
import { User } from "../../models/user";
import { Vacancy } from "../../models/vacancy";
import { getAllVacanciesPublic } from "../../services/vacancy";

/*type VacancyData = {
    vacancy: Vacancy & {
      company: Company;
      advertiser: User;
      technologies: Technology[];
    };
  };*/

type State = {
    vacancies: undefined | {
        vacancy: Vacancy & { company: Company, advertiser: User, technologies: Technology[] };
      }[];
    }

;

const INITIAL_STATE = {
    vacancies: undefined,

};

export const useGetVacancyPublic = () => {

    const [state, setState] = useState<State>(INITIAL_STATE)

    const fetchVacancies = async () => {
        const {vacancies} = await getAllVacanciesPublic({})
        if(!vacancies){
            return 'error'
        }
        setState({vacancies})
    }

    useEffect(() => {
        fetchVacancies()
    }, [])

    return {

        vacancies: state.vacancies

    }
}