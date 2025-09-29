import React from "react";
import Inputs from "../../components/common/Input/Input";
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
                />

            </section>
        </main>  
     )
}

export default RegisterPage;