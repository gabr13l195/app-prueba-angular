import { Component } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  imports: [],
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

}

