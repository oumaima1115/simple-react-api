
export default function Profile() {
  const email = localStorage.getItem("email");
  console.log("email:", email);

  return (
    <div>
      <h2>Profile</h2>
      <p>Voici les informations de votre profil.</p>

      <ul>
        <li>Nom</li>
        <li>Email: {email}</li>
      </ul>

      <form>
        <label htmlFor="name">Nom :</label>
        <input id="name" name="name" type="text" />
        <button type="submit">Enregistrer</button>
      </form>

    </div>
  );
}