import { useEffect, useState } from "react";
import { Technology } from "../../models/technology";
import { GetTechnologies } from "../../services/technology";

type State = {
  technologies: undefined | Technology[];
};

const INITIAL_STATE = {
  technologies: undefined,
};

export const useGetTechnologies = () => {
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchTechnologies = async () => {
    const { technologies } = await GetTechnologies({});

    setState({ technologies });
  };

  useEffect(() => {
    fetchTechnologies();
  }, []);

  return {
    technologies: state.technologies,
  };
};
