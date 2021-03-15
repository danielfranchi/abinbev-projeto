import React, { useState, useEffect } from "react";
import {
  ReducerProduct,
  ItemProduct,
} from "../../store/ducks/reducerProducts/types";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../store/ducks/reducerProducts/action";
import { StoreToken } from "../../store/ducks/userLogin/types";

import axios from "axios";

import "./ProductList.css";

const ProductList = () => {
  const roleRemove = useSelector((state: StoreToken) => state.dateToken.role);
  const [adminRemove, setAdminRemove] = useState(false);

  const dispatch = useDispatch();
  const products = useSelector(
    (state: ReducerProduct) => state.product.arrayProduct
  );

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (roleRemove === "admin") {
      setAdminRemove(true);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const remove = (id: any) => {
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .delete(`http://localhost:4000/beers/${id}`, { headers: headers })
      .then((resposta) => {
        if (resposta.status === 200 || resposta.status === 201) {
          dispatch(deleteProduct(id));
        }
      });
  };

  return (
    <div className="home">
      <div className="beers-list">
        {products !== undefined &&
          products.map((item: ItemProduct) => (
            <div key={item.id} className="beer">
              <img src={item.image} alt={item.title} />
              <h3>{item.description}</h3>
              <span>{item.title}</span>
              <small>{item.price}</small>
              <br />
              {adminRemove && (
                <button onClick={() => remove(item.id)}>Remover</button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
