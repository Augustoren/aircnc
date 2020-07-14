import React, { useState } from "react";
import api from "../../services/api";

function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/sessions", { email });
      const { _id } = response.data;
      localStorage.setItem("user", _id);
      history.push("/dashboard");
    } catch (err) {
      alert("Falha ao conectar, tente novamente.");
    }
  }

  return (
    <>
      <p>
        Ofereca <strong>spots</strong> para programadores e encontre{" "}
        <strong>talentos</strong> para sua empresa
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor e-mail"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button to="/Dashboard" className="btn" type="submit">
          Entrar
        </button>
      </form>
    </>
  );
}

export default Login;
