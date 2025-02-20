import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  imports: [RouterLink],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {
  
  series = [
    {
      id: 1,
      nombre: "The Boys",
      plataforma: "Prime",
      genero: "Accion"
    },
    {
      id:2,
      nombre: "Juego de Calamar",
      plataforma: "Netflix",
      genero: "Accion"
    },
    {
      id:3,
      nombre: "Breaking Bad",
      plataforma: "Netflix",
      genero: "Drama"
    },
    {
      id:4,
      nombre: "Game of Thrones",
      plataforma: "HBO",
      genero: "Accion"
    },
    {
      id:5,
      nombre: "Mr Robot",
      plataforma: "Prime",
      genero: "Drama"
    },
  ]
}
