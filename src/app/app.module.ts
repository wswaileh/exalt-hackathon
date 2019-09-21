import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';


//NGX-BOOSTRAP
import { CarouselModule } from 'ngx-bootstrap/carousel';

//ANGULAR FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { environment } from 'src/environments/environment.prod';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    //NGX-BOOTSTRAP
    CarouselModule.forRoot(),
    //ANGULAR FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestore,
    AngularFireAuth
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
