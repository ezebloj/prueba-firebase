import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// importaciones referentes a Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
// se debe importar los siguientes 3 componentes para activar los formularios
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { PeliculasComponent } from './peliculas/peliculas.component';

import { PeliculaService } from './services/pelicula.service';

// Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioComponent } from './formulario/formulario.component';

import { ReactiveFormsModule } from '@angular/forms';
import { DialogDetallePeliculaComponent } from './dialog-detalle-pelicula/dialog-detalle-pelicula.component';

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    FormularioComponent,
    DialogDetallePeliculaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  entryComponents: [DialogDetallePeliculaComponent, FormularioComponent],
  providers: [PeliculaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
