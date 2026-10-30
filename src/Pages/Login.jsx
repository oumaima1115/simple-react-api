// src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";
import axios from "axios";

function Login({ setIsAuth }) {

  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState(
    {
      email: "",
      password: ""
    }
  )
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(
      `${BASE_URL}/users/signin`,
      formData
    )
    localStorage.setItem("token", response.data.token)

    setError("");
    setSuccess(true);


    // localStorage.setItem("email", email);

    // localStorage.setItem(
    //   "user",
    //   JSON.stringify({ id: 1, name: "Oumaima", email: "oumaima@example.com" })
    // );

    // Simulation d'une connexion réussie
    setIsAuth(true);

    // Redirection après connexion
    navigate("/");

  }

  return (
    <main className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Connexion</h1>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="exemple@email.com"
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Votre mot de passe"
          required
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">Connexion réussie !</p>}

        <button type="submit">Se connecter</button>
      </form>
    </main>
  );
}

export default Login;