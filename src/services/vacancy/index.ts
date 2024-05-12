import api from "../api";
import { CreateVacancyDTO } from "./DTO";
import { SUCCESSFUL_MESSAGE } from "../../utils/enums/successful-message";
import { HttpStatusCode, isAxiosError } from "axios";
import { EXCEPTION_MESSAGE } from "../../utils/enums/exception-message";

export const CreateVacancy = async (params: CreateVacancyDTO.IParams) => {
  try {
    const { token, ...rest } = params;
    const response = await api.post<CreateVacancyDTO.IResponse>(
      "/vacancies",
      rest,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.POST_VACANCY,
      vacancy: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: "MESSAGE",
        code: "CODIGO",
      };
    }
    return {
      success: false,
      message: "MESSAGE",
      code: "CODIGO",
    };
  }
};
