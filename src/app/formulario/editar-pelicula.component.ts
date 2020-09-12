import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPelicula } from '../Model/pelicula.model';
import { PeliculaService } from '../services/pelicula.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;

  pelicula: IPelicula;

  peliculaEditar: IPelicula;

  // variable que me dice si estoy en modo edición o creación
  esEdicion: boolean = false;

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) peli: IPelicula
  ) {
    this.peliculaEditar = peli;
    // si la película tiene ID entonces estoy en modo de edición
    if (peli.id) {
      this.esEdicion = true;
    }
  }

  ngOnInit(): void {
    this.peliculaForm = this.fb.group({
      // otra opción:
      // id: this.peliculaEditar.id,
      nombre: [this.peliculaEditar.nombre, Validators.required],
      genero: [this.peliculaEditar.genero, Validators.required],
      link: [this.peliculaEditar.link, Validators.required],
    });
  }

  onSubmit() {
    // this.peliculaService.setPelicula(this.pelicula);
    this.pelicula = this.savePelicula();
    if (this.esEdicion) {
      this.update();
    } else {
      this.set();
    }
  }

  savePelicula() {
    const pelicula = {
      id: '',
      // otra opción:
      // id: this.peliculaForm.get('id').value,
      nombre: this.peliculaForm.get('nombre').value,
      genero: this.peliculaForm.get('genero').value,
      link: this.peliculaForm.get('link').value,
    };
    if (this.esEdicion) {
      // agrego el id de la película que viene de la BD (no lo saco del formulario)
      pelicula.id = this.peliculaEditar.id;
    }
    return pelicula;
  }

  update() {
    this.peliculaService.updatePelicula(this.pelicula).then(() => {
      this._snackBar.open('Película cargada', 'Aceptar', {
        duration: 2000,
      });
      // alert('me guardé');
      this.peliculaForm.reset();
    });
  }

  set() {
    this.peliculaService.setPelicula(this.pelicula).then(() => {
      this._snackBar.open('Película cargada', 'Aceptar', {
        duration: 2000,
      });
      this.peliculaForm.reset();
    });
  }
}
