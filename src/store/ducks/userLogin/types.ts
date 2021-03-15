export enum TypesToken {
  GET_TOKEN = "GET_TOKEN",
}

export interface Token {
  email: string;
  id: number;
  role: string;
}

export interface StoreToken {
  dateToken: Token;
}
