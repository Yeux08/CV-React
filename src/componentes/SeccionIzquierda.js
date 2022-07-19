import React, { Component } from "react";
import "../assets/css/CV.css";
import ProgressBar from "./ProgressBar";
import foto from "../assets/images/foto.jpg";

class SeccionIzquierda extends Component {
  state = {
    archivosRestantes: 0,
    porcentaje: 0.0,
  };

  simular = async () => {
    await this.setState({ archivosRestantes: 8 });
    const archivosTotales = this.state.archivosRestantes;
    var porcentajeUnitario = 100 / this.state.archivosRestantes;
    const self = this;
    for (let i = 0; i < this.state.archivosRestantes; i++) {
      await setTimeout(function timer() {
        self.setState({
          porcentaje: self.state.porcentaje + porcentajeUnitario,
          archivosRestantes: self.state.archivosRestantes - 1,
        });

        if (i == archivosTotales - 1) {
          self.setState({ porcentaje: 0.0 });
        }
      }, 2000 * i);
    }
  };

  render() {
    return (
      <div>
        <div class="div1">
          <div class="card card1">
            <img src={foto} class="card-img-top" alt="..." />
            <div class="card-body card2">
              <p class="card-text div1i">SOBRE MÍ</p>
              <p class="card-text div2i">
                Desarrollador Frontend, apasionado por el diseño y la
                maquetación de páginas web. Tengo 6 años de experiencia en el
                desarrollo de Landing page, y en mantener un buen funcionamiento
                y buenas prácticas en el contenido que se publica en cada una de
                ellas. Cree las interfaces usadas en las páginas web de los
                dealers de Chevrolet a nivel Colombia.
              </p>

              <hr class="hr1" />

              <p class="card-text div1i">REFERENCIAS</p>

              <p class="card-text div2i">
                WENDY PUELLO <br />
                WEB MASTER<br />
                TEL: 3023372079
                <br />
              </p>
              <p class="card-text div2i">
              INGRID RODRIGUEZ <br />
              ASISTENTE DE GERENCIA <br />
                TEL: 3023372079
                <br />
              </p>

              <hr class="hr1" />
              <p class="card-text div1i">IDIOMAS</p>
              <div className="App">
                <ProgressBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeccionIzquierda;
