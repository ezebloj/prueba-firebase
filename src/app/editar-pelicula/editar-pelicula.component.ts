import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPelicula } from '../Model/pelicula.model';
import { PeliculaService } from '../services/pelicula.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css'],
})
export class EditarPeliculaComponent implements OnInit {
  peliculaForm: FormGroup;

  pelicula: IPelicula;

  peliculaEditar: IPelicula;

  constructor(
    private fb: FormBuilder,
    private peliculaService: PeliculaService,
    private _snackBar: MatSnackBar
  ) {
    this.peliculaEditar = this.peliculaService.getPeliculaEditar();
  }

  ngOnInit(): void {
    this.peliculaForm = this.fb.group({
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
    });
  }

  savePelicula() {
    const pelicula = {
      nombre: this.peliculaForm.get('nombre').value,
      genero: this.peliculaForm.get('genero').value,
      link: this.peliculaForm.get('link').value,
    };
    return pelicula;
  }
}
