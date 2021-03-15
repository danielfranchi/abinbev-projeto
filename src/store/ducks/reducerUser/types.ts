export enum TypesUser {
  GET_USER = "GET_USER",
  POST_REGISTER_USER = "POST_REGISTER_USER",
  DELETE_USER = "DELETE_USER",
}

export interface ItemUser {
  email: string;
  password: string;
  name: string;
  role: string;
  id: number;
}

export interface arrayUsertList {
  arrayUser: ItemUser[];
}

export interface ReducerUser {
  user: arrayUsertList;
}
