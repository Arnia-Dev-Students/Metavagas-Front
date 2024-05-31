export const ADMIN_ONLY = ["admin"];
export const USERS_ONLY = ["advertiser", "candidate"];
export const ADVERTISER_ONLY = ["advertiser"];
export const CANDIDATE_ONLY = ["candidate"];

export const LOCALSTORAGE_TOKEN_KEY = "metavagas-token";
export const LOCALSTORAGE_SEARCH_KEY = "searches";

//Mínimo 8 caracteres, pelo menos uma letra, um número e um caracter especial (@$!%*#?&)
export const PASSWORD_REGEX =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
