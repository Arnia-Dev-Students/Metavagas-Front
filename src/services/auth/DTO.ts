

export namespace MeDTO {
    export interface IParams {
      token: string;
    }
    export interface IResponse {
      id: number;
      name: string;
      email: string;
      role: "admin" | "advertiser" | "candidate";
      deletedAt: Date;
      createdAt: Date;
      updatedAt: Date;
      photo_url: string;
    }
  }