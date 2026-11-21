import "../style/Home.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Home({ isAuth, setIsAuth }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const Logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    setUser(null);
    setError("");
    setIsAuth(false);
  };

  useEffect(() => {
    if (!isAuth) {
      setUser(null);
      setLoading(false);
      return;
    }

    const id = localStorage.getItem("userId");

    if (!id) {
      setError("No user ID found. Please log in again.");
      setLoading(false);
      return;
    }

    let ignore = false;

    async function fetchUser() {
      setLoading(true);
      setError("");

      try {
        const response = await axios.get(
          `https://restaurantbackend-x8cr.onrender.com/api/users/${id}`
        );

        if (!ignore) {
          setUser(response.data);
        }
      } catch (err) {
        if (!ignore) {
          setError(
            err.response?.data?.message ||
              "Could not load your profile."
          );
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    fetchUser();

    return () => {
      ignore = true;
    };
  }, [isAuth]);

  return (
    <main className="home">
      <h1>Bienvenue sur mon site</h1>

      <p>Ceci est la page d’accueil.</p>

      {isAuth && loading && <p>Chargement du profil...</p>}

      {error && <p className="error-message">{error}</p>}

      {isAuth && user && (
        <section className="user-profile">
          <h2>Bonjour, {user.name}</h2>
          <p>{user.email}</p>

          {user.image && (
            <img
              src={user.image}
              alt={`Profil de ${user.name}`}
              width={150}
              height={150}
              style={{
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
          )}
        </section>
      )}

      <nav>
        <Link to="/products">Voir les produits</Link>
      </nav>

      {isAuth ? (
        <button onClick={Logout}>LogOut</button>
      ) : (
        <Link to="/login" className="login-button">
          LogIn
        </Link>
      )}
    </main>
  );
}

export default Home;