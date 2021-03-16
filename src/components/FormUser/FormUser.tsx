import React, { useRef, useState, useEffect } from "react";
import { postUser } from "../../store/ducks/reducerUser/action";
import { useDispatch } from "react-redux";
import { decodeToken } from "react-jwt";

import axios from "axios";

import "./FormUser.css";

const FormUser = () => {
  const dispatch = useDispatch();

  const [userForm, setUserForm] = useState<any>({});

  const inputMail = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);
  const inputName = useRef<HTMLInputElement>(null);
  const inputRole = useRef<HTMLInputElement>(null);

  const cleanUser = () => {
    if (inputMail && inputMail.current) {
      inputMail.current.value = "";
    }

    if (inputPassword && inputPassword.current) {
      inputPassword.current.value = "";
    }

    if (inputName && inputName.current) {
      inputName.current.value = "";
    }

    if (inputRole && inputRole.current) {
      inputRole.current.value = "";
    }
  };

  useEffect(() => {
    if (userForm.sub !== undefined) {
      axios
        .get(`http://localhost:4000/users/${userForm.sub}`)
        .then((resposta) => {
          dispatch(postUser(resposta.data));
        });
    }
  }, [userForm]); // eslint-disable-line react-hooks/exhaustive-deps

  const registerUser = () => {
    interface Input {
      email: string | undefined;
      password: string | undefined;
      name: string | undefined;
      role: string | undefined;
    }
    const requisicao: Input = {
      email: inputMail.current?.value,
      password: inputPassword.current?.value,
      name: inputName.current?.value,
      role: inputRole.current?.value,
    };

    if (
      requisicao.email !== "" ||
      requisicao.password !== "" ||
      requisicao.name !== "" ||
      requisicao.role !== ""
    ) {
      axios.post("http://localhost:4000/users", requisicao).then((resposta) => {
        setUserForm(decodeToken(resposta.data.accessToken));
        localStorage.setItem("token", resposta.data.accessToken);
      });

      cleanUser();
    }
  };

  return (
    <div className="form">
      <p>Cadastrar Usuario</p>
      <input type="email" placeholder="e-mail" ref={inputMail} />
      <input type="password" placeholder="senha" ref={inputPassword} />
      <input type="text" placeholder="nome" ref={inputName} />
      <input type="text" placeholder="role" ref={inputRole} />

      <button onClick={registerUser}>Cadastrar</button>
    </div>
  );
};

export default FormUser;
