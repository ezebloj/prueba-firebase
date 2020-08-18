import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

const routes: Routes = [
  { path: '', component: PeliculasComponent },
  { path: 'formulario', component: FormularioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
