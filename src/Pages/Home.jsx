import "../style/Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  const { isAuth, setIsAuth } = props;
  const Logout = () => {
    setIsAuth(false)
    localStorage.removeItem("token");
  }
  
  const token = localStorage.getItem("token")
  console.log("token:", token)

  return (
    <main className="home">
      <h1>Bienvenue sur mon site {token}</h1>

      <p>Ceci est la page d’accueil.</p>

      <nav>
        <Link to="/products">Voir les produits</Link>
      </nav>

      {isAuth ? (
        <button onClick={Logout}>
          LogOut
        </button>
      ) : (
        <Link to="/login" className="login-button">
          LogIn
        </Link>
      )}
    </main>
  );
}

export default Home;