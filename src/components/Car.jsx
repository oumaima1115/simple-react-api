import { Component } from "react";

class Car extends Component {
  constructor(props) {
    super(props);

    // Initialisation des données
    this.state = { // state est un objet qui contient les données de notre composant et this est une référence à l'instance de notre composant
      matricule: "123 TU 2026",
      color: "Rouge",
      type: "Électrique",
      counter: 0,
    };
  }

  // Après affichage du composant
  componentDidMount() {
    console.log("La voiture est affichée");
  }

  // Après modification du state
  componentDidUpdate() {
    console.log("Les informations de la voiture ont changé");
  }

  // Avant suppression du composant
  componentWillUnmount() {
    console.log("La voiture va être supprimée");
  }

  // Ajouter +1 au compteur
  increaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h2 className="card-title">Informations de la voiture</h2>

          <p className="card-text">
            <strong>Matricule :</strong> {this.state.matricule}
          </p>

          <p className="card-text">
            <strong>Couleur :</strong> {this.state.color}
          </p>

          <p className="card-text">
            <strong>Type :</strong> {this.state.type}
          </p>

          <p className="card-text">
            <strong>Compteur :</strong> {this.state.counter}
          </p>

          <button
            className="btn btn-primary"
            onClick={this.increaseCounter}
          >
            Augmenter le compteur
          </button>
        </div>
      </div>
    );
  }
}

export default Car;