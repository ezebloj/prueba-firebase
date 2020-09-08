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

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) peli: IPelicula
  ) {
    this.peliculaEditar = peli;
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
    this.peliculaService.updatePelicula(this.pelicula).then(() => {
      this._snackBar.open('Película cargada', 'Aceptar', {
        duration: 2000,
      });
      // alert('me guardé');
      this.peliculaForm.reset();
    });
  }

  savePelicula() {
    const pelicula = {
      // agrego el id de la película que viene de la BD (no lo saco del formulario)
      id: this.peliculaEditar.id,
      // otra opción:
      // id: this.peliculaForm.get('id').value,
      nombre: this.peliculaForm.get('nombre').value,
      genero: this.peliculaForm.get('genero').value,
      link: this.peliculaForm.get('link').value,
    };
    return pelicula;
  }
}
