// src/components/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Login.css";

function Login({ setIsAuth }) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!email.includes("@")) {
      setError("Veuillez entrer un email valide.");
      setSuccess(false);
      return;
    }

    if (password.length < 6) {
      setError("Le mot de passe doit contenir au moins 6 caractères.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);

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
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="exemple@email.com"
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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