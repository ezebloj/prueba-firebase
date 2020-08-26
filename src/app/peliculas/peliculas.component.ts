import { Component, OnInit } from '@angular/core';
import { IPelicula } from '../Model/pelicula.model';
import { PeliculaService } from '../services/pelicula.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
})
export class PeliculasComponent implements OnInit {
  // Creamos una variable para guardar películas
  peliculas: IPelicula[];

  pelicula: IPelicula;

  peliBorrar: IPelicula;

  arregloMarcado: boolean[] = [];

  id: string;

  activarBoton: boolean;

  constructor(
    private peliculaService: PeliculaService,
    public dialog: MatDialog,
    public router: Router
  ) {}

  ngOnInit(): void {
    // Usamos la función creada en el servicio a la cual nos suscribimos para inicializar el vector de películas
    this.peliculaService.getAllPeliculas().subscribe((peliculas) => {
      this.peliculas = peliculas;
      this.activarBoton = true;
    });
  }

  openDialog() {
    this.dialog.open(DetallePeliculaDialog);
  }

  marcar(index: number) {
    this.arregloMarcado[index] = !this.arregloMarcado[index];
  }

  getPelicula(id: string) {
    this.peliculaService.getPeliculaById(id).subscribe((pelicula) => {
      this.pelicula = pelicula;
    });
  }

  borrarPelicula(id: string) {
    // // el () del dato puede estar vacío
    // this.peliculaService.borrarPelicula(id).then((dato) => {
    //   alert('me borré');
    // });
    this.peliculaService.borrarPelicula(id);
  }

  abrirFormulario() {
    this.router.navigate(['formulario']);
  }
}

@Component({
  selector: 'detalle-pelicula-dialog',
  templateUrl: './detalle-pelicula-dialog.html',
})
export class DetallePeliculaDialog {}
