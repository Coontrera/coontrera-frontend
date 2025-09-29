import React from "react";
import Inputs from "../../components/common/Input/Input";
import { registerUser } from "../../services/authService";
import './RegisterPage.css'

const inputData = [
  {
    inputName: "Nome",
    type: "text",
    placeholder: "Seu nome",
    eye: false,
  },
  {
    inputName: "Telefone",
    type: "tel",
    placeholder: "Seu telefone",
    eye: false,
  },
  {
    inputName: "Email",
    type: "email",
    placeholder: "Seu email",
    eye: false,
  },
  {
    inputName: "Senha",
    type: "password",
    placeholder: "Sua senha",
    eye: true,
  },
  {
    inputName: "Confirme sua senha",
    type: "password",
    placeholder:"Confirme sua senha",
    eye: true,
  }
]

const RegisterPage = () => {
    const [values, setValues] = React.useState({
        Nome: "",
        Telefone: "",
        Email: "",
        Senha: "",
        "Confirme sua senha": "",
    });

    const handleRegister = async (formValues) => {
        if (formValues.Senha !== formValues["Confirme sua senha"]) {
            alert("As senhas não coincidem!");
            return;
        }

        const { success, error } = await registerUser(formValues.Email, formValues.Senha);

        if (success) {
            alert("Usuário cadastrado com sucesso!");
        } else {
            alert(`Erro ao cadastrar: ${error}`);
        }
    };

    return (
        <main className="container-registro">
            <section className="section-registro">
                <div className="top-content">

                </div>
                <div className="logo">
                    <img src="../../../public/images/logo.svg" alt="Logo Coontrera" />
                </div>
                <h1>Crie sua conta</h1>
                <p>Bem-vindo(a)! Crie sua conta para continuar!</p>
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