import React, {Component} from "react";
import "../assets/css/CV.css";


class Cursos extends Component {

    render(){

        return(
<>
<hr class="hr2" />
<section class="layoutone">
          <div class="topborder">
            <h5 class="card-title cyc">CERTIFICACIÓN</h5><br></br>
            <p class="card-text exp">- Scrum Foundation Professional Certificate (SFPC)</p>
          </div>
          <div class="borderone"></div>
          <div class="topborder">
            <h5 class="card-title cyc">CURSOS</h5><br></br>
            <p class="card-text exp">- Google Tag Manager</p>
            <p class="card-text exp">- Experiencia de usuario (UX) avanzado</p>
            <p class="card-text exp">- Google Analytics esencial</p>
            <p class="card-text exp">- React esencial</p>
          </div>
        </section>
        </>
        );


    }

}

export default Cursos;