import { Component, OnInit, Inject } from '@angular/core';
import { IPelicula } from '../Model/pelicula.model';
import { PeliculaService } from '../services/pelicula.service';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogDetallePeliculaComponent } from '../dialog-detalle-pelicula/dialog-detalle-pelicula.component';

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

  openDialog(pelicula: IPelicula) {
    // Creamos una variable para pasarle al Dialog las configuraciones que queremos que tenga ese Dialog
    // Una de esas configuraciones es un dato que le queramos pasar al Dialog
    const dialogConfig = new MatDialogConfig();
    // A través de la propiedad .data del DialogConfig le paso el dato al Dialog. En este caso, una película.
    dialogConfig.data = pelicula;
    // Llamamos a la función open del Dialog con el componente que se usa para este Dialog y las configuraciones correspondientes
    this.dialog.open(DialogDetallePeliculaComponent, dialogConfig);
    // Una vez que se ejecuta la función open va a abrir el Dialog que está definido más abajo
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
