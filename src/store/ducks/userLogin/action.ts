import { action } from 'typesafe-actions'
import { TypesToken, Token } from './types'

export const token = (payload: Token) => action(TypesToken.GET_TOKEN, payload)