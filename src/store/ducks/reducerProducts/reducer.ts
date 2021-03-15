import { TypesProduct, arrayProductList, ItemProduct } from "./types";

const initialStateToken: arrayProductList = {
  arrayProduct: [],
};

function reducerProduct(state = initialStateToken, action: any) {
  switch (action.type) {
    case TypesProduct.GET_PRODUCTS:
      return {
        arrayProduct: action.payload,
      };

    case TypesProduct.POST_REGISTER_PRODUCTS:
      const newProduct = [...state.arrayProduct, action.payload];

      return {
        arrayProduct: newProduct,
      };

    case TypesProduct.DELETE_PRODUCTS:
      const id = action.payload;

      const newArrayProduct = [...state.arrayProduct].filter(
        (item: ItemProduct) => {
          return item.id !== id;
        }
      );

      return {
        arrayProduct: newArrayProduct,
      };
    default:
      return state;
  }
}

export default reducerProduct;
