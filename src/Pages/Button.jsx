import "../style/Button.css";

const Button = ({ onChange }) => {
  return (
    <div className="button-container">
      <label htmlFor="profile-image">
        Importez une image
      </label>

      <input
        id="profile-image"
        type="file"
        name="image"
        accept="image/png,image/jpeg,image/webp"
        onChange={onChange}
        className="custom-button"
      />
    </div>
  );
};

export default Button;