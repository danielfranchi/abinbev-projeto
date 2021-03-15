import { TypesToken, Token } from "./types";

const initialStateToken: Token = {
  email: "",
  id: 0,
  role: "",
};

function reducerToken(state = initialStateToken, action: any) {
  switch (action.type) {
    case TypesToken.GET_TOKEN:
      return {
        email: action.payload.email,
        id: action.payload.id,
        role: action.payload.role,
      };
    default:
      return state;
  }
}

export default reducerToken;
