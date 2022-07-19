import react, { Component } from "react";

class imprimir extends Component {





  render() {
    return (
      <div>
        <button id="btnCapturar" class="btn btn-dark">
          Descargar CV imagen
        </button>
        <button onclick="makepdf()" class="btn btn-dark">
          Descargar CV pdf
        </button>
      </div>
    );
  }
}

export default imprimir;
