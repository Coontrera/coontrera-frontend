import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "../../components/common/Input/Input";
import { useAuth } from "../../contexts/AuthContext";

import "./LoginPage.css";

const inputData = [
  {
    inputName: "Email",
    type: "email",
    placeholder: "Seu email cadastrado",
    eye: false,
  },
  {
    inputName: "Senha",
    type: "password",
    placeholder: "Sua senha",
    eye: true,
  },
];

const LoginPage = () => {
  const [values, setValues] = useState({ Email: "", Senha: "" });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (formValues) => {
    if (!formValues.Email || !formValues.Senha) {
      return setError("Por favor, preencha o email e a senha.");
    }

    try {
      setError("");
      await login(formValues.Email, formValues.Senha);

      navigate("/");
    } catch (err) {
      console.error("Erro no login:", err);
      setError(err.message || "Falha ao entrar. Verifique suas credenciais.");
    }
  };  

  return (
    <div className="container-login">
      <section className="section-login">
        <div className="top-content">
          <div className="logo">
            <img src="../images/logo.svg" alt="Logo Coontrera" />
          </div>
          <h1>Acesse sua conta</h1>
          <p>Bem-vindo(a) de volta! Faça login para continuar.</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
        <Inputs
          variant="primary"
          inputs={inputData}
          buttonText="Entrar"
          values={values}
          setValues={setValues}
          onSubmit={handleLogin}
        />
        <div className="forget-password">
          <a className="" href="/">
            Esqueceu a senha?
          </a>
        </div>
        <div className="register">
          <p>
            Não tem uma conta?<a href="/registro"> Cadastre-se agora</a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;