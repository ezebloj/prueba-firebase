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

  getPeliculaById(id: string): Observable<IPelicula> {
    // return this.afs.doc<IPelicula>('peliculas/' + id).valueChanges();
    return this.afs
      .collection<IPelicula>('peliculas')
      .doc<IPelicula>(id)
      .valueChanges();
  }

  borrarPelicula(id: string): Promise<void> {
    return this.afs
      .collection<IPelicula>('peliculas')
      .doc<IPelicula>(id)
      .delete();
  }

  setPelicula(pelicula: IPelicula): Promise<void> {
    // creo un ID de Firebase
    const firestoreDocumentID = this.afs.createId();
    pelicula.id = firestoreDocumentID;
    return this.afs
      .collection<IPelicula>('peliculas')
      .doc<IPelicula>(firestoreDocumentID)
      .set(pelicula);
  }
}
