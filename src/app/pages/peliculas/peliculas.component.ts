import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TablaComponent } from "../../components/tabla/tabla.component";

@Component({
  selector: 'app-peliculas',
  imports: [CommonModule, TablaComponent],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  nombre = "Matrix";
  anio = 1999;
  genero = "accion"

  pelicula = {
    nombre: "Mr Robot",
    anio: 2014,
    genero: "drama"
  }

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

