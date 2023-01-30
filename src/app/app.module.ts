import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { initializeApp , provideFirebaseApp} from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Environment } from 'src/environments/environment';
import { PagesModule } from './pages/pages.module';
import { AppMaterial } from './angular.material.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    AppMaterial,
    PagesModule,
    BrowserModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(Environment.firebase)),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
