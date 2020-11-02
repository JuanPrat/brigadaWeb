import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';
import { NavbarComponent } from './../navbar/navbar.component';
import { IniciarActividadesComponent } from './actividadesModals/iniciar-actividades/iniciar-actividades.component';
import { FinalizarActividadesComponent } from './actividadesModals/finalizar-actividades/finalizar-actividades.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  activo: boolean;

  constructor(public user: UserService,
              private route: Router,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    if (this.user.user == undefined) {
      this.route.navigate(["/login"])
    }
  }

  activarBrigadista(){
    !this.user.user.activo == false ? this.modalService.open(FinalizarActividadesComponent) : this.modalService.open(IniciarActividadesComponent);  
  }
}
