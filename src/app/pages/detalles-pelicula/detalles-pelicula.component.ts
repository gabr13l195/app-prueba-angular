import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-pelicula',
  imports: [CommonModule],
  templateUrl: './detalles-pelicula.component.html',
  styleUrl: './detalles-pelicula.component.css'
})
export class DetallesPeliculaComponent {

  
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

    // Ejecuta cuando se renderiza el componente
  ruta = inject(ActivatedRoute)
  id:any
  serieAux :any

  ngOnInit(){
    this.ruta.params.subscribe(parametro => {
      console.log(parametro['idPelicula']);  
      this.id=parametro['idPelicula']
    })

    for(let i=0; i<=this.series.length; i++){
      if(this.id==this.series[i].id){
        console.log("econtrado");
        this.serieAux=this.series[i]
        break;        
      }
    }
  }
}
