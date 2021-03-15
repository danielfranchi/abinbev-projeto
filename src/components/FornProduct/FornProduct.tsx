import React, { useRef } from "react";
import { postRegister } from "../../store/ducks/reducerProducts/action";
import { useDispatch } from "react-redux";
import axios from "axios";

import "./FornProduct.css";

const FormProduct = () => {
  const dispatch = useDispatch();

  const inputTitle = useRef<HTMLInputElement>(null);
  const inputPrice = useRef<HTMLInputElement>(null);
  const inputDescription = useRef<HTMLInputElement>(null);
  const InputImage = useRef<HTMLInputElement>(null);

  const cleanForm = () => {
    if (inputTitle && inputTitle.current) {
      inputTitle.current.value = "";
    }

    if (inputPrice && inputPrice.current) {
      inputPrice.current.value = "";
    }

    if (inputDescription && inputDescription.current) {
      inputDescription.current.value = "";
    }

    if (InputImage && InputImage.current) {
      InputImage.current.value = "";
    }
  };

  const register = () => {
    interface Input {
      title: string | undefined;
      price: string | undefined;
      description: string | undefined;
      image: string | undefined;
    }
    const requisicao: Input = {
      title: inputTitle.current?.value,
      price: inputPrice.current?.value,
      description: inputDescription.current?.value,
      image: InputImage.current?.value,
    };

    if (
      requisicao.title !== "" ||
      requisicao.price !== "" ||
      requisicao.description !== "" ||
      requisicao.image !== ""
    ) {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      axios
        .post("http://localhost:4000/beers", requisicao, { headers: headers })
        .then((resposta) => dispatch(postRegister(resposta.data)));

      cleanForm();
    }
  };

  return (
    <div className="form">
      <p>Cadastrar Produto</p>

      <input type="text" placeholder="titulo" ref={inputTitle} />
      <input type="text" placeholder="preço" ref={inputPrice} />
      <input
        type="text"
        placeholder="Digite uma descrição"
        ref={inputDescription}
      />
      <input type="text" placeholder="Cole a url da imagem" ref={InputImage} />

      <button onClick={register}>Cadastrar</button>
    </div>
  );
};

export default FormProduct;
