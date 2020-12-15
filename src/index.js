import React, { Component } from "react";
import ReactDOM from "react-dom";
import { SeasonDisplay } from "./SeasonDisplay";

// Petite app de météo en fonction de la géolocalisation
//composant App et SeasonDetail
// MDN : navigator.geolocation
// résultat d'une API de géoloc du navigateur dans componentDidMount
// framework Bulma
// communication entre parent et fils pour transmettre infos. Comm DESC, du parent (local localisation, mois en cours) vers son fils

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: null,
    };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
        });
      },
      (err) => {
        this.setState({
          errorMessage: err.message,
        });
      }
    );
  }

  render() {
    if (this.state.latitude) {
      return (
        <SeasonDisplay
          latitude={this.state.latitude}
          month={new Date().getMonth()}
        />
      );
    }
    if (this.state.errorMessage) {
      return <div>Error : {this.state.errorMessage}</div>;
    }
    return <div>Chargement des données... </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
