import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


import "./Input.css";

const Inputs = ({
  inputs = [],
  variant = "primary",
  buttonText = "",
  hasCheckbox = false,
}) => {
  const [aceito, setAceito] = useState(false);
  const [showPasswords, setShowPasswords] = useState(inputs.map(() => false));
  const [values, setValues] = useState(
    inputs.reduce((acc, item) => {
      acc[item.inputName] = "";
      return acc;
    }, {})
  );

  function toggleIcon(index) {
    setShowPasswords((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  function handleChange(e, name) {
    const { value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event){
    try {
    const { token } = await getToken(appCheck, false);

    await fetch("/api/meu-endpoint", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Firebase-AppCheck": token,
      },
      body: JSON.stringify(values),
    });

    console.log("Enviado com sucesso");
  } catch (err) {
    console.error("Erro ao enviar:", err);
  }

    e.preventDefault();
    if (!aceito) {
      alert("Você precisa aceitar os termos!");
      return;
    }
    console.log("Formulário enviado!");
    event.preventDefault();
    console.log(values);
  };

  return (
    <section className="input-component">
      <form onSubmit={handleSubmit}>
        <label className="form-inputs">
          {inputs.map((item, index) => (
            <div key={index} className="input-wrapper">
              <p>{item.inputName}</p>
              <div className="field-name">
                <input
                  className={`input-${variant}`}
                  type={
                    item.type === "password" && showPasswords[index]
                      ? "text"
                      : item.type
                  }
                  placeholder={item.placeholder}
                  value={values[item.inputName]}
                  onChange={(e) => handleChange(e, item.inputName)}
                />
                {item.eye && (
                  <FontAwesomeIcon
                    onClick={() => toggleIcon(index)}
                    icon={showPasswords[index] ? faEyeSlash : faEye}
                    className="icon-input-component"
                  />
                )}
              </div>
            </div>
          ))}
          <button
            className="btn btn-login"
            type="submit"
            onClick={handleSubmit}
          >
            {buttonText}
          </button>
        </label>
        <label className="input-checkbox" style={{ display: hasCheckbox ? "flex" : "none" }}>
          <input
            type="checkbox"
            checked={aceito}
            onChange={(e) => setAceito(e.target.checked)}
            required
          />
          <p>Concordo com os <a href="">Termos de Serviço</a></p>
        </label>
      </form>
    </section>
  );
};

export default Inputs;