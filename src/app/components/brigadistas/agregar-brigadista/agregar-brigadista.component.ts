import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrigadistasService } from 'src/app/services/brigadistas.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agregar-brigadista',
  templateUrl: './agregar-brigadista.component.html',
  styleUrls: ['./agregar-brigadista.component.scss']
})
export class AgregarBrigadistaComponent implements OnInit {
  form: FormGroup;

  constructor(private brigadistaServ: BrigadistasService,
     private fb: FormBuilder,
     private modalService: NgbModal,
     private userService: UserService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],
      pass: [''],
      nombres: [''],
      apellidos: ['']
    })
  }

  agregarBrigadista(){
    this.brigadistaServ.agregarBrigadista(this.form.controls['email'].value,this.form.controls['pass'].value)
    .then(ans => {
      this.modalService.dismissAll()
      this.userService.createUser(ans.user.uid, this.form.controls['nombres'].value, this.form.controls['apellidos'].value, "Brigadista")
    });

  }

}
