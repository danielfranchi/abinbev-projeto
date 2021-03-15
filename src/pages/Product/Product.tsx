import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import FormProduct from "../../components/FornProduct/FornProduct";
import Header from "../../components/Header/Header";

function Product() {
  return (
    <div>
      <Header />
      <FormProduct />
      <ProductList />
    </div>
  );
}

export default Product;
