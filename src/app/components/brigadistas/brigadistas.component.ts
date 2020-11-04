import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { BrigadistasService } from 'src/app/services/brigadistas.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AgregarBrigadistaComponent } from './agregar-brigadista/agregar-brigadista.component'

@Component({
  selector: 'app-brigadistas',
  templateUrl: './brigadistas.component.html',
  styleUrls: ['./brigadistas.component.scss']
})
export class BrigadistasComponent implements OnInit {

  brigadistas: Array<User> = new Array<User>();

  constructor(public userServ: UserService,
    private brigadistasService: BrigadistasService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.userServ.readUsers().subscribe(answer => {
      this.brigadistas = [];
      answer.forEach(user => {
        if (user.habilitado) {
          this.brigadistas.push({
            uid: user.uid,
            activo: user.activo,
            apellidos: user.apellidos,
            email: user.email,
            nombres: user.nombres,
            perfil: user.perfil,
            habilitado: user.habilitado
          })
        }
      })
    });
  }

  agregarBrigadista() {
    this.modalService.open(AgregarBrigadistaComponent)
  }

  eliminarBrigadista(email: string) {
    debugger
    this.userServ.deleteUser(email);
  }

}
