import api from "../api";
import {
  CreateVacancyDTO,
  DeleteVacancyDTO,
  GetAllVacanciesDTO,
  GetAllVacanciesPublicDTO,
  GetVacancyDTO,
  UpdateVacancyDTO,
} from "./DTO";
import { SUCCESSFUL_MESSAGE } from "../../utils/enums/successful-message";
import { HttpStatusCode, isAxiosError } from "axios";
import { EXCEPTION_MESSAGE } from "../../utils/enums/exception-message";

export const CreateVacancy = async (params: CreateVacancyDTO.IParams) => {
  try {
    const { token, ...rest } = params;
    const response = await api.post<CreateVacancyDTO.IResponse>(
      "/vacancies",
      rest,
      { headers: { Authorization: `Bearer ${token}` } }
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
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};

export const GetVacancies = async (params: GetAllVacanciesDTO.IParams) => {
  try {
    const { token } = params;
    const response = await api.get<GetAllVacanciesDTO.IResponse>("/vacancies", {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.GET_VACANCIES,
      vacanciesList: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};

export const GetVacancy = async (params: GetVacancyDTO.IParams) => {
  try {
    const { id, token } = params;
    const response = await api.get<GetVacancyDTO.IResponse>(
      `/vacancies/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
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
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};

export const UpdateVacancy = async (params: UpdateVacancyDTO.IParams) => {
  try {
    const { id, token, ...rest } = params;
    const response = await api.patch<UpdateVacancyDTO.IResponse>(
      `/vacancies/${id}`,
      rest,
      { headers: { Authorization: `Bearer ${token}` } }
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
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};

export const DeleteVacancy = async (params: DeleteVacancyDTO.IParams) => {
  try {
    const { id, token } = params;
    const response = await api.delete<DeleteVacancyDTO.IResponse>(
      `/vacancies/${id}`,
      { params, headers: { Authorization: `Bearer ${token}` } }
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
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};

export const getAllVacanciesPublic = async (
  params: GetAllVacanciesPublicDTO.IParams
) => {
  try {
    const response = await api.get<GetAllVacanciesPublicDTO.IResponse>(
      "/vacancies/public",
      {
        params,
      }
    );
    
    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.GET_VACANCIES,
      vacancies: response.data,
    };
  } catch (error) {
    if (isAxiosError(error)) {
      return {
        success: false,
        message: error.message,
        code: error.code,
      };
    }
    return {
      success: false,
      message: EXCEPTION_MESSAGE.INTERNAL_SERVER_ERROR,
      code: HttpStatusCode.InternalServerError,
    };
  }
};
