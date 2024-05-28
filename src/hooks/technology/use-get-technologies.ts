import { useEffect, useState } from "react";
import { Technology } from "../../models/technology";
import { GetTechnologies } from "../../services/technology";
import { useUserContext } from "../user/use-user-context";

type State = {
  technologies: undefined | Technology[];
};

const INITIAL_STATE = {
  technologies: undefined,
};

export const useGetTechnologies = () => {
  const { token } = useUserContext();
  const [state, setState] = useState<State>(INITIAL_STATE);

  const fetchTechnologies = async () => {
    if (!token) {
      return;
    }

    const { technologies } = await GetTechnologies({ token });

    if (!technologies) {
      return "error";
    }

    setState({ technologies });
  };

  useEffect(() => {
    fetchTechnologies();
  }, [token]);

  return {
    technologies: state.technologies,
  };
};
