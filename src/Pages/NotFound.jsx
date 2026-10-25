import { Link } from "react-router-dom";
import "../style/NotFound.css"

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>La page que vous recherchez n’existe pas.</p>

      <Link to="/" className="back-home-button">
        Back To Home
      </Link>
    </div>
  );
}