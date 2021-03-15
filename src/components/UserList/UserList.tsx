import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../store/ducks/reducerUser/action";
import { ReducerUser, ItemUser } from "../../store/ducks/reducerUser/types";

import axios from "axios";

import "./UserList.css";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: ReducerUser) => state.user.arrayUser);

  const token = localStorage.getItem("token");

  const removeUser = (id: any) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .delete(`http://localhost:4000/users/${id}`, { headers: headers })
      .then((resposta) => {
        if (resposta.status === 200 || resposta.status === 201) {
          dispatch(deleteUser(id));
        }
      });
  };

  return (
    <div className="home">
      <div className="beers-list">
        {users !== undefined &&
          users.map((item: ItemUser) => (
            <div key={item.id} className="beer">
              <h3>{item.name}</h3>
              <span>{item.email}</span>
              <small>
                {" "}
                <strong
                  style={{ color: item.role === "editor" ? "red" : "black" }}
                >
                  {item.role}
                </strong>{" "}
              </small>
              <br />
              <button onClick={() => removeUser(item.id)}>Remover</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserList;
