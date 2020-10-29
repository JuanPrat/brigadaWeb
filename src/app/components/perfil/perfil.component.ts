import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  public editing:boolean = false;
  public form: FormGroup;

  constructor(public userServ: UserService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  editProfile(){
    if(this.editing == false){
      this.form.controls['names'].enable()
      this.form.controls['lastNames'].enable()
    }
    else{
      this.form.controls['names'].disable()
      this.form.controls['lastNames'].disable()
      this.userServ.user.nombres = this.form.controls['names'].value
      this.userServ.user.apellidos = this.form.controls['lastNames'].value
      this.userServ.updateUserData()
    }
    this.editing = !this.editing;

  }

  createForm(){
    this.form = this.formBuilder.group({
      email: [this.userServ.user.email, Validators.email],
      names: [this.userServ.user.nombres],
      lastNames: [this.userServ.user.apellidos],
      perfil: [this.userServ.user.perfil]
    })
  }

}
