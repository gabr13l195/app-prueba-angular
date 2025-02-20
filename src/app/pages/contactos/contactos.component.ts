import { Component } from '@angular/core';

@Component({
  selector: 'app-contactos',
  imports: [],
  templateUrl: './contactos.component.html',
  styleUrl: './contactos.component.css'
})
export class ContactosComponent {
  ocultar = false;

  //Permite cambiar el estado del boton
  // Cambia el estado de "ocultar"
  visualizar(){
    this.ocultar =! this.ocultar
  }
}
