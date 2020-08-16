import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../Model/pelicula.model';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  // Creamos una variable para guardar películas
  peliculas: IPelicula[];

  marcado = false;

  arregloMarcado: number[];

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    // Usamos la función creada en el servicio a la cual nos suscribimos para inicializar el vector de películas
    this.peliculaService.getAllPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
    });
  }
  marcar(peli: IPelicula, num: number) {
    this.marcado = !this.marcado;
  }
}
