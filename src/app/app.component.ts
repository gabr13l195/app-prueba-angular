import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SaludoComponent } from './saludo/saludo.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PeliculasComponent } from "./pages/peliculas/peliculas.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SaludoComponent, NavBarComponent, PeliculasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-prueba';
}
