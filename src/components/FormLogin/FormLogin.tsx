import { token } from "../../store/ducks/userLogin/action";
import React, { useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { decodeToken } from "react-jwt";

import axios from "axios";

import "./FormLogin.css";

const FormLogin = () => {
  const dispatch = useDispatch();

  const [loginUser, setLoginUser] = React.useState<any>(false);

  const [user, setUser] = React.useState<any>({});

  useEffect(() => {
    if (user.sub !== undefined) {
      axios.get(`http://localhost:4000/users/${user.sub}`).then((resposta) => {
        dispatch(token(resposta.data));

        if (resposta.status === 200 || resposta.status === 201) {
          setLoginUser(true);
        }
      });
    }
  }, [user]); // eslint-disable-line react-hooks/exhaustive-deps

  const email = useRef<HTMLInputElement>(null);
  const senha = useRef<HTMLInputElement>(null);

  const login = (e: any) => {
    e.preventDefault();
    const requisicao = {
      email: email.current?.value,
      password: senha.current?.value,
    };

    // if (email.current?.value === "" || senha.current?.value === "") {
    //   toast.error("Usuario Invalido");
    // }

    axios
      .post("http://localhost:4000/login", requisicao)
      .then((resposta) => {
        setUser(decodeToken(resposta.data.accessToken));
        localStorage.setItem("token", resposta.data.accessToken);
      })
      .catch((erro) => {
        console.log(erro);
        toast.error("Usuário ou senha invalido");
      });
  };

  return (
    <>
      <div>
        <Toaster position="top-center" reverseOrder={true} />
      </div>

      <div className="login-box">
        <form>
          <h1>Login</h1>

          <div className="textbox">
            <input
              name="email"
              type="email"
              ref={email}
              placeholder="e-mail"
              required
            />
          </div>

          <div className="textbox">
            <input
              name="password"
              type="password"
              ref={senha}
              placeholder="senha"
              autoComplete="off"
            />
          </div>

          <br />
          <button onClick={login}>Entrar</button>
        </form>

        {loginUser ? <Redirect to="/home" /> : null}
      </div>
    </>
  );
};

export default FormLogin;
