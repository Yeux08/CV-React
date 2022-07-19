import logo from "./assets/images/logo.svg";
/*import "./assets/css/App.css";*/
import Experiencia from "./componentes/Experiencia";
import Educacion from "./componentes/Educacion";
import DatosPersonales from "./componentes/DatosPersonales";
import SeccionIzquierda from "./componentes/SeccionIzquierda";
import Cursos from "./componentes/Cursos";




function App() {
  return (
    <div className="App">
      <header className="App-header">

      <section class="layout" id="cbgcv">

      <div class="div1">
        <section className="componentes">
           <SeccionIzquierda />
        </section>

      </div>
      <div class="div2">

      <section className="componentes">
      <DatosPersonales />
            <Experiencia />
            <Educacion />
            <Cursos />


      </section>
      </div>

      </section>


      </header>
    </div>
  );
}

export default App;
