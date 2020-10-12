import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HorariosComponent } from './components/horarios/horarios.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:"", component:MainComponent},
  {path:"login", component:LoginComponent},
  {path:"horarios", component:HorariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
