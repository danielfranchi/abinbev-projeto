import { action } from 'typesafe-actions'
import { TypesUser, arrayUsertList } from './types'

export const getUser = (payload: arrayUsertList) => action(TypesUser.GET_USER, payload)

export const postUser = (payload: arrayUsertList) => action(TypesUser.POST_REGISTER_USER, payload)

export const deleteUser = (payload: any) => action(TypesUser.DELETE_USER, payload)