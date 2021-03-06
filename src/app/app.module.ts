import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HorariosComponent } from './components/horarios/horarios.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as firebase from 'firebase';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProgramarModalComponent } from './components/horarios/programar-modal/programar-modal.component';
import {FormsModule} from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { PerfilComponent } from './components/perfil/perfil.component';
import { BrigadistasComponent } from './components/brigadistas/brigadistas.component';
import { AgregarBrigadistaComponent } from './components/brigadistas/agregar-brigadista/agregar-brigadista.component';
import { IniciarActividadesComponent } from './components/main/actividadesModals/iniciar-actividades/iniciar-actividades.component';
import { FinalizarActividadesComponent } from './components/main/actividadesModals/finalizar-actividades/finalizar-actividades.component';
import { ReporteKitComponent } from './components/main/actividadesModals/reporte-kit/reporte-kit.component';
import { InformesComponent } from './components/informes/informes.component';

firebase.initializeApp(environment.firebase)

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HorariosComponent,
    NavbarComponent,
    ProgramarModalComponent,
    PerfilComponent,
    BrigadistasComponent,
    AgregarBrigadistaComponent,
    IniciarActividadesComponent,
    FinalizarActividadesComponent,
    ReporteKitComponent,
    InformesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
