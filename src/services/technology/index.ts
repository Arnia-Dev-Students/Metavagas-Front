import { isAxiosError } from "axios";
import { SUCCESSFUL_MESSAGE } from "../../utils/enums/successful-message";
import api from "../api";
import { CreateTechnologyDTO, DeleteTechnologyDTO, GetTechnologiesDTO, GetTechnologyDTO, UpdateTechnologyDTO } from "./DTO";

export const GetTechnology = async (params: GetTechnologyDTO.IParams) => {
    try {
      const { id, token } = params;
      const response = await api.get<GetTechnologyDTO.IResponse>(
        `/technologies/${id}`,
        { headers: { Authorization: token } }
      );
  
      return {
        success: true,
        message: SUCCESSFUL_MESSAGE.GET_TECHNOLOGY,
        technology: response.data,
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

  export const GetTechnologies = async (params: GetTechnologiesDTO.IParams) => {
    try {
      const response = await api.get<GetTechnologiesDTO.IResponse>("/technologies", {
        params,
      });
  
      return {
        success: true,
        message: SUCCESSFUL_MESSAGE.GET_TECHNOLOGY,
        technologies: response.data,
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

  export const CreateTecnology = async (params: CreateTechnologyDTO.IParams) => {
    try {
      const { token, ...rest } = params;
      const response = await api.post<CreateTechnologyDTO.IResponse>(
        "/technologies",
        rest,
        { headers: { Authorization: token } }
      );
  
      return {
        success: true,
        message: SUCCESSFUL_MESSAGE.POST_TECHNOLOGY,
        technology: response.data,
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


  export const UpdateTechnology = async (params: UpdateTechnologyDTO.IParams) => {
    try {
      const { id, token, ...rest } = params;
      const response = await api.patch<UpdateTechnologyDTO.IResponse>(
        `/technologies/${id}`,
        rest,
        { headers: { Authorization: token } }
      );
  
      return {
        success: true,
        message: SUCCESSFUL_MESSAGE.PATCH_TECHNOLOGY,
        technology: response.data,
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


  export const DeleteTechnology = async (params: DeleteTechnologyDTO.IParams) => {
    try {
      const { id, token } = params;
      const response = await api.delete<DeleteTechnologyDTO.IResponse>(
        `/technologies/${id}`,
        { params, headers: { Authorization: token } }
      );
  
      return {
        success: true,
        message: SUCCESSFUL_MESSAGE.DELETE_TECHNOLOGY,
        technology: response.data,
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


