import { Component, OnInit, Inject } from '@angular/core';
import { IPelicula } from '../Model/pelicula.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-detalle-pelicula',
  templateUrl: './dialog-detalle-pelicula.component.html',
  styleUrls: ['./dialog-detalle-pelicula.component.css'],
})
export class DialogDetallePeliculaComponent implements OnInit {
  // Creamos una variable 'pelicula' para guardarnos la película que viene como configuración al Dialog
  pelicula: IPelicula;
  // Inyectamos el MAT_DIALOG_DATA en una variable 'peli' para poder recuperar la película que me está pasando el componente que llama
  constructor(@Inject(MAT_DIALOG_DATA) peli: IPelicula) {
    // Guardar en la variable local pelicula el dato que viene del componente que llama
    this.pelicula = peli;
  }

  ngOnInit(): void {}
}
