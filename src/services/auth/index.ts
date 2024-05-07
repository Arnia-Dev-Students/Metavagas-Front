import api from "../api";
import { MeDTO } from "./DTOI";
import { SUCCESSFUL_MESSAGE } from "../../utils/enums/successful-message";
import { HttpStatusCode, isAxiosError } from "axios";
import { EXCEPTION_MESSAGE } from "../../utils/enums/exception-message";

export const Me = async (params: MeDTO.IParams) => {
    try {
      const { token } = params;
      const response = await api.post<MeDTO.IResponse>("/users/me", {
        headers: { Authorization: token },
      });
  
      return {
        success: true,
        message: SUCCESSFUL_MESSAGE.ME_ROUTE_SUCESS,
        user: response.data,
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