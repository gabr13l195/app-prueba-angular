import { Component } from '@angular/core';

@Component({
  selector: 'app-tabla',
  imports: [],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  
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
