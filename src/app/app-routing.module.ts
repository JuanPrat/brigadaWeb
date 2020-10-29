import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrigadistasComponent } from './components/brigadistas/brigadistas.component';
import { HorariosComponent } from './components/horarios/horarios.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"horarios", component:HorariosComponent},
  {path:"perfil", component:PerfilComponent},
  {path:"brigadistas", component:BrigadistasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
