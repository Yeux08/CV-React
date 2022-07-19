import React from 'react';
import '../assets/css/ProgressBar.css';

function ProgressBar(props) {
    return (
        <div className="contenedorProgressBar">
            
            <p class="card-text div2i">INGLES</p>
            <div className="progress">
                <div className="progress-bar"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "30%"}}>
                </div>
            </div>
            <hr class="hr1" />
            <p class="card-text div1i">HABILIDADES</p>
              <p class="card-text div2i">HTML</p>
            <div className="progress">
                <div className="progress-bar"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "90%"}}>
                </div>
            </div>
            <p class="card-text div2i">CSS</p>
            <div className="progress">
                <div className="progress-bar"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "80%"}}>
                </div>
            </div>
            <p class="card-text div2i">JAVASCRIPT</p>
            <div className="progress">
                <div className="progress-bar"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "60%"}}>
                </div>
            </div>
            <p class="card-text div2i">BOOTSTRAP</p>
            <div className="progress">
                <div className="progress-bar"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "80%"}}>
                </div>
            </div>
            <p class="card-text div2i">REACT JS</p>
            <div className="progress">
                <div className="progress-bar"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "50%"}}>
                </div>
            </div>
            <p class="card-text div2i">SQL SERVER</p>
            <div className="progress">
                <div className="progress-bar"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "80%"}}>
                </div>
            </div>
            <p class="card-text div2i">MySQL</p>
            <div className="progress">
                <div className="progress-bar"
                role="progressbar"
                style={{width: props.porcentaje ? props.porcentaje +"%": "70%"}}>
                </div>
            </div>
            
        </div>
    );
}

export default ProgressBar;