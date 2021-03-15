export enum TypesProduct {
  GET_PRODUCTS = "GET_PRODUCTS",
  POST_REGISTER_PRODUCTS = "POST_REGISTER_PRODUCTS",
  DELETE_PRODUCTS = "DELETE_PRODUCTS",
}

export interface ItemProduct {
  id: number;
  image: string;
  description: string;
  title: string;
  price: string;
}

export interface arrayProductList {
  arrayProduct: ItemProduct[];
}

export interface ReducerProduct {
  product: arrayProductList;
}
