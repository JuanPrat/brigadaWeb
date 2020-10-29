import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { BrigadistasService } from 'src/app/services/brigadistas.service'
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {AgregarBrigadistaComponent} from './agregar-brigadista/agregar-brigadista.component'

@Component({
  selector: 'app-brigadistas',
  templateUrl: './brigadistas.component.html',
  styleUrls: ['./brigadistas.component.scss']
})
export class BrigadistasComponent implements OnInit {

  brigadistas: Array<User> = new Array<User>();

  constructor(private userServ: UserService,
     private brigadistasService: BrigadistasService,
     private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userServ.readUsers().then(answer => answer.forEach(doc => this.brigadistas.push({
      uid: doc.data().uid,
      activo: doc.data().activo,
      apellidos: doc.data().apellidos,
      email: "",
      nombres: doc.data().nombres,
      perfil: doc.data().perfil
    })));
  }

  agregarBrigadista(){
    this.modalService.open(AgregarBrigadistaComponent)
  }

}
