import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeCardsContainerComponent } from './components/home-cards-container/home-cards-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

//NGX-BOOSTRAP
import { CarouselModule } from 'ngx-bootstrap/carousel';

//ANGULAR FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment.prod';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

//NGPRIME
import {CardModule} from 'primeng/card';

//MATERIAL
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    HomeCardsContainerComponent,
    FooterComponent,
    ContactUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    //NGX-BOOTSTRAP
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    //ANGULAR FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    //ngPrime
    CardModule,
    //MATERIAL
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
