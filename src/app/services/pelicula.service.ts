import { Injectable } from '@angular/core';
// AngularFirestore es el objeto que me permite interactuar con mi BD
import { AngularFirestore } from '@angular/fire/firestore';
import { IPelicula } from '../Model/pelicula.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeliculaService {
  // Me creo una variable (afs) del tipo AngularFirestore. Esta variable me va permitir utilizar todos los métodos para interactuar con mi BD
  // Todos los métodos disponibles están en la librería AngularFire
  constructor(private afs: AngularFirestore) {}

  // Es una función que me va a devolver todos los documentos pertenecientes a la colección 'peliculas'
  // Devuelve un observable conteniendo adentro un arreglo de objetos del tipo IPelicula
  getAllPeliculas(): Observable<IPelicula[]> {
    return this.afs.collection<IPelicula>('peliculas').valueChanges();
  }

  getPeliculaById() {}
}
