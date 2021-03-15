import { TypesUser, arrayUsertList, ItemUser } from "./types";

const initialStateToken: arrayUsertList = {
  arrayUser: [],
};

function reducerUser(state = initialStateToken, action: any) {
  switch (action.type) {
    case TypesUser.GET_USER:
      return {
        arrayUser: action.payload,
      };

    case TypesUser.POST_REGISTER_USER:
      const newUser = [...state.arrayUser, action.payload];

      return {
        arrayUser: newUser,
      };

    case TypesUser.DELETE_USER:
      const id = action.payload;

      const newArrayUser = [...state.arrayUser].filter((item: ItemUser) => {
        return item.id !== id;
      });

      return {
        arrayUser: newArrayUser,
      };
    default:
      return state;
  }
}

export default reducerUser;
