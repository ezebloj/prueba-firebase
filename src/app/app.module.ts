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
import { MatFormFieldModule } from '@angular/material/form-field';

import { PeliculasComponent } from './peliculas/peliculas.component';

import { PeliculaService } from './services/pelicula.service';

// Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [AppComponent, PeliculasComponent, FormularioComponent],
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
  ],
  providers: [PeliculaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
