import { action } from 'typesafe-actions'
import { TypesProduct, arrayProductList } from './types'

export const getProducts = (payload: arrayProductList) => action(TypesProduct.GET_PRODUCTS, payload)

export const postRegister = (payload: arrayProductList) => action(TypesProduct.POST_REGISTER_PRODUCTS, payload)

export const deleteProduct = (payload: any) => action(TypesProduct.DELETE_PRODUCTS, payload)