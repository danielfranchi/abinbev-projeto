import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReducerUser } from "../../store/ducks/reducerUser/types";
import { ReducerProduct } from "../../store/ducks/reducerProducts/types";
import { getProducts } from "../../store/ducks/reducerProducts/action";
import { getUser } from "../../store/ducks/reducerUser/action";
import { StoreToken } from "../../store/ducks/userLogin/types";

import Header from "../../components/Header/Header";
import axios from "axios";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  const totalProducts = useSelector(
    (state: ReducerProduct) => state.product.arrayProduct.length
  );
  const totalUser = useSelector(
    (state: ReducerUser) => state.user.arrayUser.length
  );

  const { email, role } = useSelector((state: StoreToken) => state.dateToken);

  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/beers", { headers: headers })
      .then((resposta) => dispatch(getProducts(resposta.data)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    axios
      .get("http://localhost:4000/users?role=admin&role=editor", {
        headers: headers,
      })
      .then((resposta) => dispatch(getUser(resposta.data)));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Header />

      <div className="text-user">
        <div>
          <p>
            {" "}
            <strong>User:</strong> {email}
          </p>
          <p style={{ color: role === "admin" ? "black" : "red" }}>
            <span style={{ color: "black" }}>
              {" "}
              <strong>Nível:</strong>{" "}
            </span>{" "}
            {role}
          </p>
        </div>
      </div>

      <div className="overview-home">
        <div className="overview-list">
          <div className="overview">
            <h3>Usuarios</h3>
            <span>{totalUser}</span>
          </div>

          <div className="overview">
            <h3>Produtos</h3>
            <span>{totalProducts}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
