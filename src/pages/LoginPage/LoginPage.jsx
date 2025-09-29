import React, { useState } from "react";
import Inputs from "../../components/common/Input/Input";

import "./LoginPage.css";


const inputData = [
  {
    inputName: "Telefone",
    type: "text",
    placeholder: "Seu telefone cadastrado",
    eye: false,
  },
  {
    inputName: "Senha",
    type: "password",
    placeholder: "Sua senha",
    eye: true,
  },
]

const LoginPage = () => {
  const [values, setValues] = useState({
    Telefone: "",
    Senha: "",
  });

  return (
    <div className="container-login">
      <section className="section-login">
        <div className="top-content">
          <div className="logo">
            <img src="../../../public/images/logo.svg" alt="Logo Coontrera" />
          </div>
          <h1>Acesse sua conta</h1>
          <p>Bem-vindo(a) de volta! Faça login para continuar.</p>
        </div>
          <Inputs
            variant="primary"
            inputs={inputData}
            buttonText="Entrar"
            values={values}
            setValues={setValues}
          />
          <div className="forget-password">
            <a className="" href="/">
              Esqueceu a senha?
            </a>
          </div>
        <div className="register">
          <p>
            Não tem uma conta?<a href="registro"> Cadastre-se agora</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;