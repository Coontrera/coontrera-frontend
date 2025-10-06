import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Inputs from "../../components/common/Input/Input";
import { useAuth } from "../../contexts/AuthContext";

import './RegisterPage.css'

const inputData = [
  { inputName: "Nome", type: "text", placeholder: "Seu nome", eye: false, },
  { inputName: "Telefone", type: "tel", placeholder: "Seu telefone", eye: false, },
  { inputName: "Email", type: "email", placeholder: "Seu email", eye: false, },
  { inputName: "Senha", type: "password", placeholder: "Sua senha", eye: true, },
  { inputName: "Confirme sua senha", type: "password", placeholder:"Confirme sua senha", eye: true, }
];

const RegisterPage = () => {
    const [values, setValues] = useState({
        Nome: "",
        Telefone: "",
        Email: "",
        Senha: "",
        "Confirme sua senha": "",
    });
    const [error, setError] = useState("");
    const { register } = useAuth();
    const navigate = useNavigate();

    const handleRegister = async (formValues) => {
        if (formValues.Senha !== formValues["Confirme sua senha"]) {
            return setError("As senhas não coincidem!");
        }

        try {
            setError("");
            await register(formValues.Nome, formValues.Email, formValues.Senha);
            navigate("/");
        } catch (err) {
            setError("Erro ao criar a conta. Verifique os dados.");
        }
    };

    return (
        <main className="container-registro">
            <section className="section-registro">
                <div className="logo">
                    <img src="../../../public/images/logo.svg" alt="Logo Coontrera" />
                </div>
                <h1>Crie sua conta</h1>
                <p>Bem-vindo(a)! Crie sua conta para continuar!</p>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <Inputs
                    variant="registro"
                    buttonText="Cadastrar"
                    inputs={inputData}
                    hasCheckbox={true}
                    onSubmit={handleRegister}
                    values={values}
                    setValues={setValues}
                />
            </section>
        </main>
     )
}

export default RegisterPage;