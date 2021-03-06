import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';

//COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HomeCardsContainerComponent } from './components/home-cards-container/home-cards-container.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { LoginComponent } from './components/login/login.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

//NGX-BOOSTRAP
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

//ANGULAR FIREBASE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from 'src/environments/environment.prod';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

//NGPRIME
import {TableModule} from 'primeng/table';

//MATERIAL
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StepsModule } from 'primeng/steps';
import { RegisterationComponent } from './components/registeration/registeration.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

//SVG 
import { InlineSVGModule } from 'ng-inline-svg';


//Fontawesome
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'ng2-archwizard';
import { BlockUIModule } from 'ng-block-ui';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { ChartsComponent } from './components/admin-panel/charts/charts.component';
import { ChartsModule } from 'ng2-charts';

import { DonateComponent } from './components/donate/donate.component';
import { HospitalHomeComponent } from './components/hospital-home/hospital-home.component';
import { UsersComponent } from './components/users/users.component';
import { HospitalsComponent } from './components/hospitals/hospitals.component';
import { HospitalAddEmergencyComponent } from './components/hospital-add-emergency/hospital-add-emergency.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    HomeCardsContainerComponent,
    FooterComponent,
    ContactUsComponent,
    RegisterationComponent,
    LoginComponent,
    UserHomeComponent,
    AdminPanelComponent,
    ChartsComponent,
    
    DonateComponent,
    HospitalHomeComponent,
    UsersComponent,
    HospitalsComponent,
    HospitalAddEmergencyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    //NGX-BOOTSTRAP
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    //ANGULAR FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    //ngPrime
    TableModule,
    //MATERIAL
    MatCardModule,
    MatButtonModule,
    StepsModule,
    AngularFireAuthModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    ChartsModule,

    AngularFireAuthModule,
    MatDialogModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    }),

    //Fontawesome
    AngularFontAwesomeModule,

    BlockUIModule.forRoot({
      delayStart: 500,
      delayStop: 500
    }),
    AngularFireAuthModule,
    ArchwizardModule,
    ToastrModule.forRoot({ positionClass: 'toast-top-right', preventDuplicates: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
