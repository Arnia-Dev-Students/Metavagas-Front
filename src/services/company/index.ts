import api from "../api";
import {
  GetCompanyDTO,
  GetCompaniesDTO,
  CreateCompanyDTO,
  UpdateCompanyDTO,
  DeleteCompanyDTO,
} from "./DTO";
import { SUCCESSFUL_MESSAGE } from "../../utils/enums/successful-message";
import { HttpStatusCode, isAxiosError } from "axios";
import { EXCEPTION_MESSAGE } from "../../utils/enums/exception-message";

export const GetCompany = async (params: GetCompanyDTO.IParams) => {
  try {
    const { id, token } = params;
    const response = await api.get<GetCompanyDTO.IResponse>(
      `/companies/${id}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.GET_COMPANY,
      company: response.data,
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

export const GetCompanies = async (params: GetCompaniesDTO.IParams) => {
  try {
    const { token } = params;
    const response = await api.get<GetCompaniesDTO.IResponse>("/companies", {
      headers: { Authorization: `Bearer ${token}` },
    });

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.GET_COMPANIES,
      companies: response.data,
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

export const CreateCompany = async (params: CreateCompanyDTO.IParams) => {
  try {
    const { token, ...rest } = params;
    const response = await api.post<CreateCompanyDTO.IResponse>(
      "/companies",
      rest,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.POST_COMPANY,
      company: response.data,
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

export const UpdateCompany = async (params: UpdateCompanyDTO.IParams) => {
  try {
    const { id, token, ...rest } = params;
    const response = await api.patch<UpdateCompanyDTO.IResponse>(
      `/companies/${id}`,
      rest,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.PATCH_COMPANY,
      company: response.data,
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

export const DeleteCompany = async (params: DeleteCompanyDTO.IParams) => {
  try {
    const { id, token } = params;
    const response = await api.delete<DeleteCompanyDTO.IResponse>(
      `/companies/${id}`,
      { params, headers: { Authorization: `Bearer ${token}` } }
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.DELETE_COMPANY,
      company: response.data,
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
