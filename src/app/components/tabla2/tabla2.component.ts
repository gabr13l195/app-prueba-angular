import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla2',
  imports: [],
  templateUrl: './tabla2.component.html',
  styleUrl: './tabla2.component.css'
})
export class Tabla2Component {

  series = [
    {
      nombre: "The Boys",
      plataforma: "Prime",
      genero: "Accion"
    },
    {
      nombre: "Juego de Calamar",
      plataforma: "Netflix",
      genero: "Accion"
    },
    {
      nombre: "Breaking Bad",
      plataforma: "Netflix",
      genero: "Drama"
    },
    {
      nombre: "Game of Thrones",
      plataforma: "HBO",
      genero: "Accion"
    },
    {
      nombre: "Mr Robot",
      plataforma: "Prime",
      genero: "Drama"
    },
  ]


}
