import api from "../api";
import { CreateVacancyDTO, DeleteVacancyDTO, GetAllVacanciesDTO, GetVacancyDTO, UpdateVacancyDTO } from "./DTO";
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

export const GetVacancies = async (params: GetAllVacanciesDTO.IParams) => {
  try {
    const response = await api.get<GetAllVacanciesDTO.IResponse>("/vacancies", {
      params,
    });

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.GET_VACANCIES,
      vacancies: response.data,
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

export const GetVacancy = async (params: GetVacancyDTO.IParams) => {
  try {
    const { id, token } = params;
    const response = await api.get<GetVacancyDTO.IResponse>(
      `/vacancies/${id}`,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.GET_VACANCY,
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


export const UpdateVacancy = async (params: UpdateVacancyDTO.IParams) => {
  try {
    const { id, token, ...rest } = params;
    const response = await api.patch<UpdateVacancyDTO.IResponse>(
      `/vacancies/${id}`,
      rest,
      { headers: { Authorization: token } }
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.PATCH_VACANCY,
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


export const DeleteVacancy = async (params: DeleteVacancyDTO.IParams) => {
  try {
    const { id, token } = params;
    const response = await api.delete<DeleteVacancyDTO.IResponse>(
      `/vacancies/${id}`,
      { params, headers: { Authorization: token } }
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.DELETE_VACANCY,
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




