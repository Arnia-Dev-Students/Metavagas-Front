import api from "../api";
import { RegisterDTO, LoginDTO } from "./DTO";
import { SUCCESSFUL_MESSAGE } from "../../utils/enums/successful-message";
import { HttpStatusCode, isAxiosError } from "axios";
import { EXCEPTION_MESSAGE } from "../../utils/enums/exception-message";

export const Register = async (params: RegisterDTO.IParams) => {
  try {
    const response = await api.post<RegisterDTO.IResponse>(
      "/auth/register",
      params
    );

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.REGISTER,
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

export const Login = async (params: LoginDTO.IParams) => {
  try {
    const response = await api.post<LoginDTO.IResponse>("/auth/login", params);

    return {
      success: true,
      message: SUCCESSFUL_MESSAGE.LOGIN,
      code: "CODIGO",
      token: response.data,
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
