import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculasComponent } from './pages/peliculas/peliculas.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { Error404Component } from './pages/error404/error404.component';

//Aqui van los redireccionamiento (rutas)

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'peliculas', component: PeliculasComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: 'galeria', component: GaleriaComponent },

    //Si la ruta es blanca osea localhots:4040/
    // Este comando hace que redireccione siempre a home
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    //Si la ruta es diferente pero no blanca este comando 
    // redirecciona a error404 manualmente creado
    { path: '**', component: Error404Component }
];
