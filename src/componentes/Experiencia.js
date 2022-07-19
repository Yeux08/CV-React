import React, { Component } from "react";
import "../assets/css/CV.css";

class Experiencia extends Component {
  render() {
    return (
      <div>
        <h5 class="card-title explab">EXPERIENCIA LABORAL</h5>

        <section class="layoutone">
          <div class="topborder">
            <h5 class="card-title">IPROSPECT</h5>
            <p class="card-text exp">Bogotá</p>
            <p class="card-text exp mar">Ago. 2020 - Actualmente</p>
          </div>
          <div class="borderone"></div>
          <div class="topborder">
            <h5 class="card-title">Web Content</h5>
            <p class="card-text exp">Tareas realizadas</p>
            <p class="card-text exp">- Desarrollo frontend</p>
            <p class="card-text exp mar">
              - Administrador CMS (Content Management System) GM Chevrolet.
            </p>
          </div>
        </section>
        <section class="layoutone">
          <div class="topborder">
            <h5 class="card-title">TUSCANY SOUTH AMERICA</h5>
            <p class="card-text exp">Bogotá</p>
            <p class="card-text exp mar">dic. 2017 - abr. 2020</p>
          </div>
          <div class="borderone"></div>
          <div class="topborder">
            <h5 class="card-title">Analista de programación Junior</h5>
            <p class="card-text exp">Tareas realizadas</p>
            <p class="card-text exp mar">
              - Programación ASP.NET Full stack.
              <br />
              - Desarrollo CMS (Content Management System).
              <br />
              - Creacion plantillas HTML y CSS.
              <br />
              - Manejo SQL Server.
              <br />
              - Manejo Microso Power BI.
              <br />- Administración Sharepoint OnLine.
            </p>
          </div>
        </section>
        <section class="layoutone">
          <div class="topborder">
            <h5 class="card-title">TUSCANY SOUTH AMERICA</h5>
            <p class="card-text exp">Bogotá</p>
            <p class="card-text exp mar">oct. 2017 - dic. 2017</p>
          </div>
          <div class="borderone"></div>
          <div class="topborder">
            <h5 class="card-title">Programador Junior</h5>
            <p class="card-text exp">Tareas realizadas</p>
            <p class="card-text exp mar">
              - Programación ASP.NET Full stack.
              <br />
              - Administración SharePoint OnLine.
              <br />
              - Manejo SQL Server.
              <br />- Creacion plantillas HTML y CSS.
            </p>
          </div>
        </section>
        <section class="layoutone">
          <div class="topborder">
            <h5 class="card-title">TUSCANY SOUTH AMERICA</h5>
            <p class="card-text exp">Bogotá</p>
            <p class="card-text exp mar">mar. 2017 - sep. 2017</p>
          </div>
          <div class="borderone"></div>
          <div class="topborder">
            <h5 class="card-title">Aprendiz Sena Aplicaciones</h5>
            <p class="card-text exp">Tareas realizadas</p>
            <p class="card-text exp mar">- Programación ASP.NET Full stack</p>
          </div>
        </section>
        <hr class="hr2" />
      </div>
    );
  }
}

export default Experiencia;
