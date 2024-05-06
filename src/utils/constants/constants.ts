export const ADMIN_ONLY = ["admin"];
export const USERS_ONLY = ["advertiser", "candidate"];
export const ADVERTISER_ONLY = ["advertiser"];
export const CANDIDATE_ONLY = ["candidate"];

//Mínimo 8 caracteres, pelo menos uma letra, um número e um caracter especial (@$!%*#?&)
export const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
