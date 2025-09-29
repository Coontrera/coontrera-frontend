import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./Input.css";

const Inputs = ({
  inputs = [],
  variant = "primary",
  buttonText = "",
  hasCheckbox = false,
  onSubmit,
  values,
  setValues,
}) => {
  const [aceito, setAceito] = useState(false);
  const [showPasswords, setShowPasswords] = useState(inputs.map(() => false));

  function toggleIcon(index) {
    setShowPasswords((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  function handleChange(e, name) {
    const { value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event){
    event.preventDefault();

    if (hasCheckbox && !aceito) {
      alert("Você precisa aceitar os termos!");
      return;
    }

    if (onSubmit) {
        onSubmit(values);
    }
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