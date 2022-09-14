import React, { useState, useEffect } from "react";
import axios from "axios";

import arrows from "../../assets/arrows.png";


export function Newsletter() {

  const [fieldErrors, setFieldErrors] = useState({});
  const validationRules = {
    email: val => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
  };

  const validate = () => {

    let errors = {};
    let hasErrors = false;

    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }
    setFieldErrors(prev => ({ ...prev, ...errors }));
    return !hasErrors;
  };

  const renderFieldError = field => {

    if (fieldErrors[field]) {
      return <p className="errorMsg">Please enter a valid {field}.</p>;
    }
  };

   
   const [inputs, setInputs] = useState({
    email: ""
  });

  useEffect(() => {
    
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
  }, [inputs]);
  

  const handleOnChange = event => {
    event.persist();
    setInputs(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }));
  };

 
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        email: "",
      });
    }
  };
  
  const handleOnSubmit = event => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: "POST",
      url: "https://formspree.io/xaykqgqq",
      data: inputs
    })
      .then(r => {
        handleServerResponse(true, "");
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error);
      });
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit} noValidate>
        <div className="form_section">
        <input
          id="email"
          type="email"
          name="email"
          size={63}
          placeholder="Ingresa tu email"
          onChange={handleOnChange}
          value={inputs.email}
          className={fieldErrors.email ? "error" : ""}
        />
        {renderFieldError("email")}
        <button type="submit" disabled={serverState.submitting}>
          <img src={arrows} alt="arrowImg" style={{width: "12px"}} className="btnForm" />
        </button>
        </div>
        
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </form>
    </div>
  );
};